import * as Toast from "@radix-ui/react-toast";

import { useToastStates } from "../../recoil/useToastStates";
import { Button } from "../ui/Button";

export const WarningToast = (): JSX.Element => {
  const { changeIsActive, toastValues } = useToastStates();

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="flex rounded bg-red-500 p-[15px] "
        onOpenChange={changeIsActive}
        open={toastValues.isActive}
      >
        <Toast.Title>{toastValues.title}</Toast.Title>
        <Toast.Description>{toastValues.description}</Toast.Description>
        <Toast.Action asChild altText="hide this toast">
          <Button>OK</Button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 h-[500px] w-[390px]" />
    </Toast.Provider>
  );
};
