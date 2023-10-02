import clsx from "clsx";
import { memo } from "react";
import { InlineMath } from "react-katex";

import { Button } from "../../../../../components/ui/Button";
import { KeypadProps } from "../../../../../types/KeypadProps";

export const Func2Keypad = memo(({ currentKeypad, entrySymbol }: KeypadProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "w-full grid-cols-6 grid-rows-4 sm:w-2/4",
        currentKeypad === "func2" ? "grid" : "hidden",
      )}
    >
      <Button onClick={() => entrySymbol("\\in")}>
        <InlineMath>\in</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\notin")}>
        <InlineMath>\notin</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\subset")}>
        <InlineMath>\subset</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\ni")}>
        <InlineMath>\ni</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\notni")}>
        <InlineMath>\notni</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\supset")}>
        <InlineMath>\supset</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\cap")}>
        <InlineMath>\cap</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\cup")}>
        <InlineMath>\cup</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\varnothing")}>
        <InlineMath>\varnothing</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\because")}>
        <InlineMath>\because</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\iff")}>
        <InlineMath>\iff</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\square")}>
        <InlineMath>\square</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\triangle")}>
        <InlineMath>\triangle</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\angle")}>
        <InlineMath>\angle</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\gets")}>
        <InlineMath>\gets</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\to")}>
        <InlineMath>\to</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\implies")}>
        <InlineMath>\implies</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\bot")}>
        <InlineMath>\bot</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\overline{AB}")}>
        <InlineMath>{"\\overline{AB}"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\blacksquare")}>
        <InlineMath>\blacksquare</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\N")}>
        <InlineMath>\N</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\Z")}>
        <InlineMath>\Z</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\R")}>
        <InlineMath>\R</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\overrightarrow{A}")}>
        <InlineMath>{"\\overrightarrow{A}"}</InlineMath>
      </Button>
    </div>
  );
});

Func2Keypad.displayName = "Func2Keypad";
