import * as Toast from "@radix-ui/react-toast";

import { useToastStates } from "../../recoil/useToastStates";
import { Button } from "../ui/Button";

export const WarningToast = (): JSX.Element => {
  const { changeIsActive, toastValues } = useToastStates();

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="flex h-[200px] w-[390px] flex-col items-center space-y-[8px] rounded border-[2px] border-yellow-400 bg-white p-[12px]"
        onOpenChange={changeIsActive}
        open={toastValues.isActive}
      >
        <Toast.Title className="px-[16px] text-[32px] font-extrabold">
          {toastValues.title}
        </Toast.Title>
        <Toast.Description className="flex h-full w-full items-center justify-center rounded border border-orange-400 text-[20px] text-gray-600">
          {toastValues.description}
        </Toast.Description>
        <Toast.Action asChild altText="hide this toast">
          <Button padding>OK</Button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-[32px] right-[32px]" />
    </Toast.Provider>
  );
};
