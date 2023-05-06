import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import { auth, provider } from "../lib/firebase";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const router = useRouter();

  const { handleSubmit, register, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    reset();
    router.back();
  };

  const handleClick = async () => {
    await signInWithPopup(auth, provider);
    router.back();
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">メールアドレス</label>
        <input {...register("email")} id="email" />
        <label htmlFor="password">パスワード</label>
        <input {...register("password")} id="password" />
        <button type="submit">ログイン</button>
      </form>
      <button onClick={handleClick}>googleでログイン</button>
      <Link href="/signup">または新規登録</Link>
      <Link href="/">キャンセル</Link>
    </div>
  );
};

export default LoginPage;
