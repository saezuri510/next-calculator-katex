import { useCallback, useState } from "react";

export const useModalController = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    close,
    isOpen,
    open,
  } as const;
};
