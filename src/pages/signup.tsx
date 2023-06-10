import { ErrorMessage } from "@hookform/error-message";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { LinkButton } from "../components/ui/LinkButton";
import { auth, provider } from "../lib/firebase";
import { useToastStates } from "../recoil/useToastStates";

type FormValues = {
  email: string;
  password: string;
};

const SignupPage: NextPage = () => {
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
            <div className="flex justify-end">
              <Button className="h-[32px] w-fit bg-blue-500 p-[16px]" type="submit">
                新規登録
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Button className="h-[48px] w-fit p-[16px]" onClick={handleClick}>
              <FcGoogle className="mr-[16px] h-[32px] w-[32px]" />
              googleでサインイン
            </Button>
          </div>
          <div className="flex justify-start">
            <div className="flex">
              <div className="flex h-[32px] w-fit items-center justify-center">または</div>
              <LinkButton href="/login" pattern="underline" size="fit">
                ログイン
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

export default SignupPage;
