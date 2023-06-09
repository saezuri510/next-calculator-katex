import { ErrorMessage } from "@hookform/error-message";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../stories/Button";
import { Input } from "../components/ui/Input";
import { LinkButton } from "../components/ui/LinkButton";
import { auth, provider } from "../lib/firebase";
import { useToastStates } from "../recoil/useToastStates";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const [firebaseErrorMessage, setFirebaseErrorMessage] = useState<string>("");

  const { setToastValues } = useToastStates();

  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setToastValues({
        description: "ログインしました",
        isActive: true,
        title: "ログインしました",
      });
      router.push("/");
    } catch (e) {
      if (e instanceof Error) {
        setFirebaseErrorMessage(e.message);
      } else {
        setFirebaseErrorMessage(String(e));
      }
    }
  };

  const handleClick = async () => {
    await signInWithPopup(auth, provider);
    setToastValues({
      description: "ログインしました",
      isActive: true,
      title: "ログインしました",
    });
    router.push("/");
  };

  return (
    <div className="h-screen w-full bg-blue-200">
      <div className="fixed inset-0 m-auto h-full w-full rounded border-[3px] border-blue-500 bg-gray-100 p-[16px] sm:w-[512px]">
        <h1 className="text-[32px] font-bold">ログイン</h1>
        <div className="flex h-full flex-col justify-evenly">
          <form
            className="flex flex-col space-y-[16px] border border-yellow-200 p-[16px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label className="w-fit cursor-pointer" htmlFor="email">
                メールアドレス
              </label>
              <Input
                {...register("email", {
                  pattern: {
                    message: "メールアドレスの形式が間違っています",
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  },
                  required: "これは入力必須項目です",
                })}
                id="email"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <div className="text-red-500">{message}</div>}
              />
            </div>
            <div className="flex flex-col">
              <label className="w-fit cursor-pointer" htmlFor="password">
                パスワード
              </label>
              <Input
                {...register("password", {
                  minLength: {
                    message: "パスワードは8文字以上必要です",
                    value: 8,
                  },
                  required: "これは入力必須項目です",
                })}
                id="password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <div className="text-red-500">{message}</div>}
              />
            </div>
            <div className="text-red-500">{firebaseErrorMessage}</div>
            <div className="flex justify-end">
              <Button color="blue" padding="regular" size="fit" type="submit">
                ログイン
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Button onClick={handleClick} padding="regular" size="largeFit">
              <FcGoogle className="mr-[16px] h-[32px] w-[32px]" />
              googleでログイン
            </Button>
          </div>
          <div className="flex justify-start">
            <div className="flex">
              <div className="flex h-[32px] w-fit items-center justify-center">または</div>
              <LinkButton href="/signup" pattern="underline" size="fit">
                新規登録
              </LinkButton>
            </div>
            <div className="ml-auto">
              <LinkButton href="/" size="fit">
                キャンセル
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
