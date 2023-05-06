import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import { auth } from "../lib/firebase";

type FormValues = {
  email: string;
  password: string;
};

const SignupPage: NextPage = () => {
  const router = useRouter();

  const { handleSubmit, register, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    reset();
    router.back();
  };

  return (
    <div>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">メールアドレス</label>
        <input {...register("email")} id="email" />
        <label htmlFor="password">パスワード</label>
        <input {...register("password")} id="password" />
        <button type="submit">登録</button>
      </form>
      <Link href="/">キャンセル</Link>
      <Link href="/login">またはログイン</Link>
    </div>
  );
};

export default SignupPage;
