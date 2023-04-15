import * as Dialog from "@radix-ui/react-dialog";
import { ImCross } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";

import { Button } from "../../uiParts/Button";

export const SettingsModal = (): JSX.Element => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          <IoSettingsSharp />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-[50%] left-[50%] z-10 h-[80%] w-[90%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[6px] bg-white p-[24px]">
          <Dialog.Title>設定</Dialog.Title>
          <Dialog.Close asChild>
            <Button>
              <ImCross />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
