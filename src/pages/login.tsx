import { signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { auth, provider } from "../lib/firebase";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const handleClick = async () => {
    await signInWithPopup(auth, provider);
    router.back();
  };

  return (
    <div>
      <button onClick={handleClick}>googleでログイン</button>
      <button onClick={router.back}>キャンセル</button>
    </div>
  );
};

export default LoginPage;
