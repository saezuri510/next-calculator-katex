import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { auth } from "../../lib/firebase";
import { useToastStates } from "../../recoil/useToastStates";

type NullableUser = User | null;

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
  const [user, setUser] = useState<NullableUser>(null);

  const router = useRouter();

  const { setToastValues } = useToastStates();

  const value = {
    user,
  };

  const IS_REQUIRE_LOGIN = router.pathname === "/account";
  const IS_LOGIN_OR_SIGNUP = router.pathname === "/login" || router.pathname === "/signup";

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (!user && IS_REQUIRE_LOGIN) {
        setToastValues({
          description: "ログインしてからやり直してください",
          isActive: true,
          title: "ログインが必要なところにアクセスしました",
        });
        await router.push("/login");
      }

      if (user && IS_LOGIN_OR_SIGNUP) {
        setToastValues({
          description: "ログインページにログイン済みのユーザーがアクセスしました",
          isActive: true,
          title: "すでにログインしています",
        });
        await router.push("/");
      }
    });

    router.events.on("routeChangeComplete", authStateChanged);

    return () => {
      router.events.off("routeChangeComplete", authStateChanged);
    };
  }, [IS_LOGIN_OR_SIGNUP, IS_REQUIRE_LOGIN, router, setToastValues]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
