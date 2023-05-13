import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { auth } from "../../lib/firebase";
import { useToastStates } from "../../recoil/useToastStates";

type NullableUser = User | null | undefined;

type AuthContextProps = {
  user: NullableUser;
};

type AuthProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProps): JSX.Element => {
  const [user, setUser] = useState<NullableUser>(undefined);
  const [lastUser, setLastUser] = useState<NullableUser>(undefined);

  const router = useRouter();

  const { setToastValues } = useToastStates();

  const value = {
    user,
  };

  const IS_REQUIRE_LOGIN = router.pathname === "/account";
  const IS_LOGIN_OR_SIGNUP = router.pathname === "/login" || router.pathname === "/signup";

  useEffect(() => {
    const func = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => func();
  }, []);

  // userがloginまたはlogoutする前の情報を基にページを強制移動させるかどうか判断する
  useEffect(() => {
    // user情報が取得できている
    if (user !== undefined) {
      if (lastUser === undefined) {
        setLastUser(user);
      }
      // user情報に変更が加わる前である
      if (user === lastUser) {
        if (!user && IS_REQUIRE_LOGIN) {
          setToastValues({
            description: "ログインしてからやり直してください",
            isActive: true,
            title: "ログインが必要なところにアクセスしました",
          });
          router.push("/login");
        }

        if (user && IS_LOGIN_OR_SIGNUP) {
          setToastValues({
            description: "ログインページにログイン済みのユーザーがアクセスしました",
            isActive: true,
            title: "すでにログインしています",
          });
          router.push("/");
        }
      }
    }
  }, [IS_LOGIN_OR_SIGNUP, IS_REQUIRE_LOGIN, lastUser, router, setToastValues, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
