import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";
import { InlineMath } from "react-katex";

import type { KeypadProps } from "../../types/KeypadProps";
import { Button } from "../ui/Button";

export const FuncKeypad = memo(({ currentKeypad, entrySymbol }: KeypadProps): JSX.Element => {
  return (
    <div
      className={clsx("w-full grid-cols-6 grid-rows-4 sm:w-2/4", {
        grid: currentKeypad === "func",
        hidden: currentKeypad === "func2",
        "hidden sm:grid": currentKeypad === "main",
      })}
    >
      <Button onClick={() => entrySymbol("<")}>{"<"}</Button>
      <Button onClick={() => entrySymbol("\\leqq")}>
        <InlineMath>\leqq</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol(">")}>{">"}</Button>
      <Button onClick={() => entrySymbol("\\geqq")}>
        <InlineMath>\geqq</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\log_2{3}")}>
        <InlineMath>{"\\log_2{3}"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\pi")}>
        <InlineMath>\pi</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\theta")}>
        <InlineMath>\theta</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("30^\\circ")}>
        <InlineMath>30^\circ</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("⌊⌋")}>⌊⌋</Button>
      <Button onClick={() => entrySymbol("\\displaystyle\\sum_{i=1}^n{3}")}>
        <Image alt="sigma" height={60} src="/svgDrawio/sigma.drawio.svg" width={80} />
      </Button>
      <Button onClick={() => entrySymbol("\\displaystyle\\prod_{i=1}^n{3}")}>
        <Image alt="product" height={60} src="/svgDrawio/product.drawio.svg" width={80} />
      </Button>
      <Button onClick={() => entrySymbol("\\intop{d}(3)")}>
        <InlineMath>{"\\intop{d}(3)"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\lim\\limits_{3\\to5}(4)")}>
        <InlineMath>{"\\lim\\limits_{3\\to5}(4)"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\infty")}>
        <InlineMath>{"\\infty"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("{}_1 P_{1}")}>
        <InlineMath>{"{}_1 P_{1}"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("{}_1 C_{2}")}>
        <InlineMath>{"{}_1 C_{2}"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\Harr")}>
        <InlineMath>\Harr</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\sqrt[2]{3}")}>
        <InlineMath>{"\\sqrt[2]{3}"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("≒")}>≒</Button>
      <Button onClick={() => entrySymbol("\\pm")}>
        <InlineMath>\pm</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\neq")}>
        <InlineMath>\neq</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\overline{3}")}>
        <InlineMath>{"\\overline{3}"}</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\therefore")}>
        <InlineMath>\therefore</InlineMath>
      </Button>
      <Button onClick={() => entrySymbol("\\equiv")}>
        <InlineMath>\equiv</InlineMath>
      </Button>
    </div>
  );
});

FuncKeypad.displayName = "FuncKeypad";
