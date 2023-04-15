import * as Dialog from "@radix-ui/react-dialog";
import { Dispatch, memo, SetStateAction } from "react";
import { ImCross } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";

import { Button } from "../ui/Button";
import { LinkButton } from "../ui/LinkButton";

type Props = {
  setIsKeypadActive: Dispatch<SetStateAction<boolean>>;
};

export const SettingsModal = memo(({ setIsKeypadActive }: Props): JSX.Element => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          <IoSettingsSharp />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-[50%] left-[50%] h-[80%] w-[90%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[6px] bg-white p-[24px]">
          <Dialog.Title className="text-[24px] font-bold">設定</Dialog.Title>
          <div className="m-[12px] flex flex-col space-y-[8px]">
            <LinkButton href="/trend">今日の数学</LinkButton>
            <LinkButton href="/share">シェア、エクスポート</LinkButton>
            <Dialog.Close asChild>
              <Button onClick={() => setIsKeypadActive(false)}>キーパットを非表示</Button>
            </Dialog.Close>
            <LinkButton href="/account">アカウント</LinkButton>
            <LinkButton href="/accessibility">アクセシビリティ、表示、言語</LinkButton>
            <LinkButton href="/others">その他</LinkButton>
          </div>
          <div className="absolute right-[24px] bottom-[24px]">
            <Dialog.Close asChild>
              <Button size="smallBox">
                <ImCross />
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

SettingsModal.displayName = "SettingsModal";
