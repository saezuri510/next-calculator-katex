import { Dispatch, SetStateAction } from "react";
import { KeypadCategory } from "./KeypadCategory";

export type KeypadProps = {
  entryNumber: (number: string) => void;
  entrySymbol: (symbol: string) => void;
  reset: () => void;
  setCalculationResults: Dispatch<SetStateAction<string[]>>;
  setCurrentKeypad: Dispatch<SetStateAction<KeypadCategory>>;
  open: () => void;
};
