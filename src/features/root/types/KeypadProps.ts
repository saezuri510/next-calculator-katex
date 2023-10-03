import { KeypadCategory } from "./KeypadCategory";

export type KeypadProps = {
  entryNumber: (number: string) => void;
  entrySymbol: (symbol: string) => void;
  currentKeypad: KeypadCategory;
};
