import { NextPage } from "next";
import { useRouter } from "next/router";

import { auth } from "../../lib/firebase";
import { useToastStates } from "../../recoil/useToastStates";
import { useAuthContext } from "../contexts/AuthContext";
import { Button } from "../ui/Button";

export const AccountPage: NextPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const { setToastValues } = useToastStates();

  const handleClick = async () => {
    await auth.signOut();
    setToastValues({
      description: "ログアウトしました",
      isActive: true,
      title: "ログアウトしました",
    });
    router.push("/");
  };

  return user ? (
    <div>
      <Button onClick={handleClick}>ログアウト</Button>
    </div>
  ) : (
    <div>
      <div>ログインされていません</div>
    </div>
  );
};
