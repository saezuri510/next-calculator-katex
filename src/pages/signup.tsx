import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { LinkButton } from "../components/ui/LinkButton";
import { auth, provider } from "../lib/firebase";

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
    router.push("/");
  };

  const handleClick = async () => {
    await signInWithPopup(auth, provider);
    router.push("/");
  };

  return (
    <div className="h-screen w-full bg-red-200">
      <div className="fixed inset-0 m-auto h-full w-[512px] rounded border-[3px] border-red-500 bg-gray-100 p-[16px]">
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
              <Input {...register("email")} id="email" />
            </div>
            <div className="flex flex-col">
              <label className="w-fit cursor-pointer" htmlFor="password">
                パスワード
              </label>
              <Input {...register("password")} id="password" />
            </div>
            <div className="flex justify-end">
              <Button color="blue" size="fit" type="submit">
                新規登録
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Button onClick={handleClick} size="largeFit">
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
