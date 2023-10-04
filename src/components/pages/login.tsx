import { ErrorMessage } from "@hookform/error-message";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { auth, provider } from "../../lib/firebase";
import { useToastStates } from "../../recoil/useToastStates";
import { FormInput } from "../ui/domain/FormInput";
import { FormLink } from "../ui/domain/FormLink";
import { SimpleButton } from "../ui/domain/SimpleButton";

type FormValues = {
  email: string;
  password: string;
};

export const LoginPage: NextPage = () => {
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
              <FormInput
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
              <FormInput
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
              <SimpleButton className="h-[32px] w-fit bg-blue-500 p-[16px]" type="submit">
                ログイン
              </SimpleButton>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <SimpleButton className="h-[48px] w-fit p-[16px]" onClick={handleClick}>
              <FcGoogle className="mr-[16px] h-[32px] w-[32px]" />
              googleでログイン
            </SimpleButton>
          </div>
          <div className="flex justify-start">
            <div className="flex">
              <div className="flex h-[32px] w-fit items-center justify-center">または</div>
              <FormLink className="w-fit p-[16px]" href="/signup" pattern="underline">
                新規登録
              </FormLink>
            </div>
            <div className="ml-auto">
              <FormLink className="w-fit p-[16px]" href="/">
                キャンセル
              </FormLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
