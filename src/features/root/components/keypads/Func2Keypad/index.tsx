import clsx from "clsx";
import { memo } from "react";
import { InlineMath } from "react-katex";

import { SimpleButton } from "../../../../../components/ui/domain/SimpleButton";
import { KeypadProps } from "../../../types/KeypadProps";

export const Func2Keypad = memo(({ currentKeypad, entrySymbol }: KeypadProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "w-full grid-cols-6 grid-rows-4 sm:w-2/4",
        currentKeypad === "func2" ? "grid" : "hidden",
      )}
    >
      <SimpleButton onClick={() => entrySymbol("\\in")}>
        <InlineMath>\in</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\notin")}>
        <InlineMath>\notin</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\subset")}>
        <InlineMath>\subset</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\ni")}>
        <InlineMath>\ni</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\notni")}>
        <InlineMath>\notni</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\supset")}>
        <InlineMath>\supset</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\cap")}>
        <InlineMath>\cap</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\cup")}>
        <InlineMath>\cup</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\varnothing")}>
        <InlineMath>\varnothing</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\because")}>
        <InlineMath>\because</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\iff")}>
        <InlineMath>\iff</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\square")}>
        <InlineMath>\square</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\triangle")}>
        <InlineMath>\triangle</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\angle")}>
        <InlineMath>\angle</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\gets")}>
        <InlineMath>\gets</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\to")}>
        <InlineMath>\to</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\implies")}>
        <InlineMath>\implies</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\bot")}>
        <InlineMath>\bot</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\overline{AB}")}>
        <InlineMath>{"\\overline{AB}"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\blacksquare")}>
        <InlineMath>\blacksquare</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\N")}>
        <InlineMath>\N</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\Z")}>
        <InlineMath>\Z</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\R")}>
        <InlineMath>\R</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\overrightarrow{A}")}>
        <InlineMath>{"\\overrightarrow{A}"}</InlineMath>
      </SimpleButton>
    </div>
  );
});

Func2Keypad.displayName = "Func2Keypad";
