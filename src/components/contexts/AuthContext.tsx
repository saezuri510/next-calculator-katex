import { onAuthStateChanged } from "firebase/auth";
import type { NextOrObserver, User } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { auth } from "../../lib/firebase";

export type NullableUser = User | null;

export type AuthContextProps = {
  user: NullableUser;
};

export type AuthProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProps): JSX.Element => {
  const [user, setUser] = useState<NullableUser>(null);

  const value = {
    user,
  };

  const router = useRouter();

  const IS_REQUIRE_LOGIN = router.pathname === "/account";

  useEffect(() => {
    const authStateChanged: NextOrObserver<User> = async (user) => {
      setUser(user);

      if (!user && IS_REQUIRE_LOGIN) {
        await router.push("/login");
      }
    };

    const unsubscribe = onAuthStateChanged(auth, authStateChanged);

    return () => {
      unsubscribe();
    };
  }, [IS_REQUIRE_LOGIN, router]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
