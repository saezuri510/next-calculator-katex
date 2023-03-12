import { useCallback, useState } from "react";

export const useModalControll = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
  } as const;
};
