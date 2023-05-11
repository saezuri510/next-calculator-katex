import * as Dialog from "@radix-ui/react-dialog";
import { Dispatch, memo, ReactNode, SetStateAction } from "react";
import { ImCross } from "react-icons/im";

import { auth } from "../../lib/firebase";
import { captureElement } from "../../utils/captureElement";
import { useAuthContext } from "../contexts/AuthContext";
import { Button } from "../ui/Button";
import { LinkButton } from "../ui/LinkButton";

type Props = {
  isKeypadActive: boolean;
  setIsKeypadActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export const SettingsModal = memo(
  ({ children, isKeypadActive, setIsKeypadActive }: Props): JSX.Element => {
    const { user } = useAuthContext();

    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-[50%] left-[50%] h-[80%] w-[90%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[6px] bg-white p-[24px]">
            <Dialog.Title className="text-[24px] font-bold">設定</Dialog.Title>
            <div className="m-[12px] flex flex-col space-y-[8px]">
              {!user && <LinkButton href="/login">ログイン、新規登録</LinkButton>}
              <LinkButton href="/trend">今日の数学</LinkButton>
              <LinkButton href="/share">シェア、エクスポート</LinkButton>
              {user && (
                <LinkButton href="/account">
                  アカウント{auth.currentUser?.displayName}の設定
                </LinkButton>
              )}
              <LinkButton href="/accessibility">アクセシビリティ、表示、言語</LinkButton>
              <LinkButton href="/others">その他</LinkButton>
              {isKeypadActive ? (
                <Dialog.Close asChild>
                  <Button color="blue" onClick={() => setIsKeypadActive(false)}>
                    キーパットを非表示
                  </Button>
                </Dialog.Close>
              ) : (
                <Dialog.Close asChild>
                  <Button color="blue" onClick={() => setIsKeypadActive(true)}>
                    キーパッドを表示
                  </Button>
                </Dialog.Close>
              )}
              <Button color="blue" onClick={() => captureElement("#capture")}>
                計算式を保存
              </Button>
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
  },
);

SettingsModal.displayName = "SettingsModal";
