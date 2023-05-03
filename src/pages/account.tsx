import { NextPage } from "next";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button } from "../components/ui/Button";
import { auth } from "../lib/firebase";

const AccountPage: NextPage = () => {
  const [user] = useAuthState(auth);

  const handleClick = () => {
    auth.signOut();
    // TODO: useRouterを使ったページ遷移を実装する.
    console.log("go to root");
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

export default AccountPage;
