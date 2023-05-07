import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

import { ToastRecoilProps } from "../types/ToastRecoilProps";

const toastStates = atom<ToastRecoilProps>({
  default: {
    description: "",
    isActive: false,
    title: "",
  },
  key: "toastStates",
});

export const useToastStates = () => {
  const [toastValues, setToastValues] = useRecoilState(toastStates);

  const changeIsActive = useCallback(
    (isActive: boolean) => {
      setToastValues((prev) => ({ ...prev, isActive: isActive }));
    },
    [setToastValues],
  );

  return {
    changeIsActive,
    setToastValues,
    toastValues,
  } as const;
};
