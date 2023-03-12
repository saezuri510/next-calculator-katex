import { Dispatch, SetStateAction } from "react";
import { KeypadCategory } from "./KeypadCategory";

export type KeypadProps = {
  setEquation: Dispatch<SetStateAction<string>>;
  SetCalculationResults: Dispatch<SetStateAction<string[]>>;
  setCurrentKeypad: Dispatch<SetStateAction<KeypadCategory>>;
  open: () => void;
};
