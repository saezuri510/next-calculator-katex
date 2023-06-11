import { Dialog } from "@headlessui/react";
import { Dispatch, memo, SetStateAction } from "react";
import { ImCross } from "react-icons/im";

import { auth } from "../../lib/firebase";
import { captureElement } from "../../utils/captureElement";
import { useAuthContext } from "../contexts/AuthContext";
import { Button } from "../ui/Button";
import { Link } from "../ui/Link";

type Props = {
  isKeypadActive: boolean;
  setIsKeypadActive: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SettingsModal = memo(
  ({ isKeypadActive, isOpen, setIsKeypadActive, setIsOpen }: Props): JSX.Element => {
    const { user } = useAuthContext();

    const dialogClose = (func?: () => void) => {
      setIsOpen(false);
      if (func) {
        func();
      }
    };

    return (
      <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
        <div className="fixed inset-0 bg-black/50" />
        <Dialog.Panel className="fixed left-[50%] top-[50%] h-[80%] w-[90%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[6px] bg-white p-[24px]">
          <Dialog.Title className="text-[24px] font-bold">設定</Dialog.Title>
          <div className="m-[12px] flex flex-col space-y-[8px]">
            {!user && <Link href="/login">ログイン、新規登録</Link>}
            <Link href="/trend">今日の数学</Link>
            <Link href="/share">シェア、エクスポート</Link>
            {user && <Link href="/account">アカウント{auth.currentUser?.displayName}の設定</Link>}
            <Link href="/accessibility">アクセシビリティ、表示、言語</Link>
            <Link href="/others">その他</Link>
            {isKeypadActive ? (
              <Button
                className="bg-blue-500"
                onClick={() => dialogClose(() => setIsKeypadActive(false))}
              >
                キーパットを非表示
              </Button>
            ) : (
              <Button
                className="bg-blue-500"
                onClick={() => dialogClose(() => setIsKeypadActive(true))}
              >
                キーパッドを表示
              </Button>
            )}
            <Button
              className="bg-blue-500"
              onClick={() => dialogClose(() => captureElement("#capture"))}
            >
              計算式を保存
            </Button>
          </div>
          <div className="absolute bottom-[24px] right-[24px]">
            <Button className="w-[32px]" onClick={() => dialogClose()}>
              <ImCross />
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    );
  },
);

SettingsModal.displayName = "SettingsModal";
