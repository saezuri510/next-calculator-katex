import { Button } from "../../uiParts/Button";
import { IoArrowRedoSharp, IoSettingsSharp } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";
import { InlineMath } from "react-katex";
import { KeypadProps } from "../../../types/KeypadProps";
import { Dispatch, memo, SetStateAction } from "react";

export const MainKeypad = memo(
  ({
    entryNumber,
    entrySymbol,
    reset,
    setEquation,
    setCalculationResults,
    setCurrentKeypad,
    open,
  }: KeypadProps & {
    setEquation: Dispatch<SetStateAction<string>>;
  }): JSX.Element => {
    return (
      <div className="grid grid-cols-6 grid-rows-5 ">
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
        <Button onClick={() => setCurrentKeypad("func")}>
          <TbMathFunction />
        </Button>
        <Button onClick={() => setCalculationResults([])}>
          <FaEraser />
        </Button>
        <Button onClick={() => open()}>
          <IoSettingsSharp />
        </Button>
        <Button onClick={() => setEquation((prev) => prev.slice(0, -1))}>
          DEL
        </Button>
        <Button onClick={reset}>AC</Button>
        <Button color={"blue"} type={"submit"}>
          <IoArrowRedoSharp />
        </Button>
      </div>
    );
  }
);

MainKeypad.displayName = "MainKeypad";
