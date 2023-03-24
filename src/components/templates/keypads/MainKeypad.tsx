import { Button } from "../../uiParts/Button";
import { InlineMath } from "react-katex";
import { KeypadProps } from "../../../types/KeypadProps";
import { memo } from "react";

export const MainKeypad = memo(
  ({ entryNumber, entrySymbol }: KeypadProps): JSX.Element => {
    return (
      <>
        <Button onClick={() => entrySymbol("x")}>x</Button>
        <Button onClick={() => entrySymbol("y")}>y</Button>
        <Button color={"gray"} onClick={() => entryNumber("7")}>
          7
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("8")}>
          8
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("9")}>
          9
        </Button>
        <Button onClick={() => entrySymbol("\\div")}>÷</Button>
        <Button onClick={() => entrySymbol("i")}>i</Button>
        <Button onClick={() => entrySymbol("\\sqrt{2}")}>
          <InlineMath>{"\\sqrt{2}"}</InlineMath>
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("4")}>
          4
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("5")}>
          5
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("6")}>
          6
        </Button>
        <Button onClick={() => entrySymbol("\\times")}>x</Button>
        <Button onClick={() => entrySymbol("\\times10^{2}")}>
          <InlineMath>{"\\times10^{2}"}</InlineMath>
        </Button>
        <Button onClick={() => entrySymbol("\\frac{1}{2}")}>1/2</Button>
        <Button color={"gray"} onClick={() => entryNumber("1")}>
          1
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("2")}>
          2
        </Button>
        <Button color={"gray"} onClick={() => entryNumber("3")}>
          3
        </Button>
        <Button onClick={() => entrySymbol("-")}>-</Button>
        <Button onClick={() => entrySymbol("(")}>(</Button>
        <Button onClick={() => entrySymbol(")")}>)</Button>
        <Button color={"gray"} onClick={() => entryNumber("0")}>
          0
        </Button>
        <Button onClick={() => entrySymbol(".")}>.</Button>
        <Button onClick={() => entrySymbol("=")}>=</Button>
        <Button onClick={() => entrySymbol("+")}>+</Button>
      </>
    );
  }
);

MainKeypad.displayName = "MainKeypad";
