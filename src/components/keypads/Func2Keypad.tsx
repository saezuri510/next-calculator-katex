import classNames from "classnames";
import { memo } from "react";
import { InlineMath } from "react-katex";

import { KeypadProps } from "../../types/KeypadProps";
import { Button } from "../ui/Button";

export const Func2Keypad = memo(({ currentKeypad, entrySymbol }: KeypadProps) => {
  return (
    <div
      className={classNames(
        "w-full grid-cols-6 grid-rows-4 sm:w-2/4",
        currentKeypad === "func2" ? "grid" : "hidden",
      )}
    >
      <Button onClick={() => entrySymbol("\\in")}>
        <InlineMath>{"\\in"}</InlineMath>
      </Button>
    </div>
  );
});

Func2Keypad.displayName = "Func2Keypad";
