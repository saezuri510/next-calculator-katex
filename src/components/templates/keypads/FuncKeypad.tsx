import { Button } from "../../uiParts/Button";
import type { KeypadProps } from "../../../types/KeypadProps";
import { memo } from "react";
import { InlineMath } from "react-katex";

export const FuncKeypad = memo(
  ({
    SetCalculationResults,
    setCurrentKeypad,
    open,
  }: KeypadProps): JSX.Element => {
    return <div></div>;
  }
);

FuncKeypad.displayName = "FuncKeypad";
