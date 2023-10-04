import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";
import { InlineMath } from "react-katex";

import { SimpleButton } from "../../../../../components/ui/domain/SimpleButton";
import { KeypadProps } from "../../../types/KeypadProps";

export const FuncKeypad = memo(({ currentKeypad, entrySymbol }: KeypadProps): JSX.Element => {
  return (
    <div
      className={clsx("w-full grid-cols-6 grid-rows-4 sm:w-2/4", {
        grid: currentKeypad === "func",
        hidden: currentKeypad === "func2",
        "hidden sm:grid": currentKeypad === "main",
      })}
    >
      <SimpleButton onClick={() => entrySymbol("<")}>{"<"}</SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\leqq")}>
        <InlineMath>\leqq</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol(">")}>{">"}</SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\geqq")}>
        <InlineMath>\geqq</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\log_2{3}")}>
        <InlineMath>{"\\log_2{3}"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\pi")}>
        <InlineMath>\pi</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\theta")}>
        <InlineMath>\theta</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("30^\\circ")}>
        <InlineMath>30^\circ</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("⌊⌋")}>⌊⌋</SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\displaystyle\\sum_{i=1}^n{3}")}>
        <Image alt="sigma" height={60} src="/svg-drawio/sigma.drawio.svg" width={80} />
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\displaystyle\\prod_{i=1}^n{3}")}>
        <Image alt="product" height={60} src="/svg-drawio/product.drawio.svg" width={80} />
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\intop{d}(3)")}>
        <InlineMath>{"\\intop{d}(3)"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\lim\\limits_{3\\to5}(4)")}>
        <InlineMath>{"\\lim\\limits_{3\\to5}(4)"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\infty")}>
        <InlineMath>{"\\infty"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("{}_1 P_{1}")}>
        <InlineMath>{"{}_1 P_{1}"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("{}_1 C_{2}")}>
        <InlineMath>{"{}_1 C_{2}"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\Harr")}>
        <InlineMath>\Harr</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\sqrt[2]{3}")}>
        <InlineMath>{"\\sqrt[2]{3}"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("≒")}>≒</SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\pm")}>
        <InlineMath>\pm</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\neq")}>
        <InlineMath>\neq</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\overline{3}")}>
        <InlineMath>{"\\overline{3}"}</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\therefore")}>
        <InlineMath>\therefore</InlineMath>
      </SimpleButton>
      <SimpleButton onClick={() => entrySymbol("\\equiv")}>
        <InlineMath>\equiv</InlineMath>
      </SimpleButton>
    </div>
  );
});

FuncKeypad.displayName = "FuncKeypad";
