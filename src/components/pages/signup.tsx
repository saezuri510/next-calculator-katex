import { ErrorMessage } from "@hookform/error-message";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
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

export const SignupPage: NextPage = () => {
  const router = useRouter();

  const { setToastValues } = useToastStates();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    setToastValues({ description: "新規登録しました", isActive: true, title: "新規登録しました" });
    router.push("/");
  };

  const handleClick = async () => {
    await signInWithPopup(auth, provider);
    setToastValues({ description: "新規登録しました", isActive: true, title: "新規登録しました" });
    router.push("/");
  };

  return (
    <div className="h-screen w-full bg-red-200">
      <div className="fixed inset-0 m-auto h-full w-full rounded border-[3px] border-red-500 bg-gray-100 p-[16px] sm:w-[512px]">
        <h1 className="text-[32px] font-bold">新規登録</h1>
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
            <div className="flex justify-end">
              <SimpleButton className="h-[32px] w-fit bg-blue-500 p-[16px]" type="submit">
                新規登録
              </SimpleButton>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <SimpleButton className="h-[48px] w-fit p-[16px]" onClick={handleClick}>
              <FcGoogle className="mr-[16px] h-[32px] w-[32px]" />
              googleでサインイン
            </SimpleButton>
          </div>
          <div className="flex justify-start">
            <div className="flex">
              <div className="flex h-[32px] w-fit items-center justify-center">または</div>
              <FormLink className="w-fit p-[16px]" href="/login" pattern="underline">
                ログイン
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
