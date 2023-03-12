import { Button } from "../../uiParts/Button";
import type { KeypadProps } from "../../../types/KeypadProps";
import { memo } from "react";

export const FuncKeypad = memo(
  ({
    setEquation,
    SetCalculationResults,
    setCurrentKeypad,
    open,
  }: KeypadProps): JSX.Element => {
    return (
      <div>
        <Button>a</Button>
      </div>
    );
  }
);

FuncKeypad.displayName = "FuncKeypad";
