import clsx from "clsx";
import { memo } from "react";
import { InlineMath } from "react-katex";

import { SimpleButton } from "../../../../../components/ui/domain/SimpleButton";
import { KeypadProps } from "../../../types/KeypadProps";

export const MainKeypad = memo(
  ({ currentKeypad, entryNumber, entrySymbol }: KeypadProps): JSX.Element => {
    return (
      <div
        className={clsx(
          "w-full grid-cols-6 grid-rows-4 sm:grid sm:w-2/4",
          currentKeypad === "main" ? "grid" : "hidden",
        )}
      >
        <SimpleButton onClick={() => entrySymbol("x")}>x</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("y")}>y</SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("7")}>
          7
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("8")}>
          8
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("9")}>
          9
        </SimpleButton>
        <SimpleButton onClick={() => entrySymbol("\\div")}>÷</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("i")}>i</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("\\sqrt{2}")}>
          <InlineMath>{"\\sqrt{2}"}</InlineMath>
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("4")}>
          4
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("5")}>
          5
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("6")}>
          6
        </SimpleButton>
        <SimpleButton onClick={() => entrySymbol("\\times")}>x</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("\\times10^{2}")}>
          <InlineMath>{"\\times10^{2}"}</InlineMath>
        </SimpleButton>
        <SimpleButton onClick={() => entrySymbol("\\frac{1}{2}")}>1/2</SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("1")}>
          1
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("2")}>
          2
        </SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("3")}>
          3
        </SimpleButton>
        <SimpleButton onClick={() => entrySymbol("-")}>-</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("(")}>(</SimpleButton>
        <SimpleButton onClick={() => entrySymbol(")")}>)</SimpleButton>
        <SimpleButton className="bg-gray-300" onClick={() => entryNumber("0")}>
          0
        </SimpleButton>
        <SimpleButton onClick={() => entrySymbol(".")}>.</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("=")}>=</SimpleButton>
        <SimpleButton onClick={() => entrySymbol("+")}>+</SimpleButton>
      </div>
    );
  },
);

MainKeypad.displayName = "MainKeypad";
