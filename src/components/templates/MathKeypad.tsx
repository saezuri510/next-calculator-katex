import { Dispatch, SetStateAction } from "react";
import { Button } from "../uiParts/Button";

type Props = {
  setEquation: Dispatch<SetStateAction<string>>;
  SetResults: Dispatch<SetStateAction<string[]>>;
};

export const MathKeypad = ({ setEquation, SetResults }: Props): JSX.Element => {
  const handleNumberClick = (number: string) => {
    const func = (prev: string) => {
      if (prev === "0") {
        return number;
      }
      return prev + number;
    };
    setEquation((prev) => func(prev));
  };

  const handleSymbolClick = (symbol: string) => {
    setEquation((prev) => prev + symbol);
  };

  return (
    <div className="grid grid-cols-6 grid-rows-5 ">
      <Button onClick={() => handleSymbolClick("x")}>x</Button>
      <Button onClick={() => handleSymbolClick("y")}>y</Button>
      <Button color={"gray"} onClick={() => handleNumberClick("7")}>
        7
      </Button>
      <Button color={"gray"} onClick={() => handleNumberClick("8")}>
        8
      </Button>
      <Button color={"gray"} onClick={() => handleNumberClick("9")}>
        9
      </Button>
      <Button onClick={() => handleSymbolClick("\\div")}>÷</Button>
      <Button onClick={() => handleSymbolClick("i")}>i</Button>
      <Button onClick={() => handleSymbolClick("\\sqrt{2}")}>√2</Button>
      <Button color={"gray"} onClick={() => handleNumberClick("4")}>
        4
      </Button>
      <Button color={"gray"} onClick={() => handleNumberClick("5")}>
        5
      </Button>
      <Button color={"gray"} onClick={() => handleNumberClick("6")}>
        6
      </Button>
      <Button onClick={() => handleSymbolClick("\\times")}>x</Button>
      <Button onClick={() => handleSymbolClick("\\times10^{2}")}>x10^2</Button>
      <Button onClick={() => handleSymbolClick("\\frac{1}{2}")}>1/2</Button>
      <Button color={"gray"} onClick={() => handleNumberClick("1")}>
        1
      </Button>
      <Button color={"gray"} onClick={() => handleNumberClick("2")}>
        2
      </Button>
      <Button color={"gray"} onClick={() => handleNumberClick("3")}>
        3
      </Button>
      <Button onClick={() => handleSymbolClick("-")}>-</Button>
      <Button onClick={() => handleSymbolClick("(")}>(</Button>
      <Button onClick={() => handleSymbolClick(")")}>)</Button>
      <Button color={"gray"} onClick={() => handleNumberClick("0")}>
        0
      </Button>
      <Button onClick={() => handleSymbolClick(".")}>.</Button>
      <Button onClick={() => handleSymbolClick("=")}>=</Button>
      <Button onClick={() => handleSymbolClick("+")}>+</Button>
      <Button>関数</Button>
      <Button onClick={() => SetResults([])}>clear</Button>
      <Button>settings</Button>
      <Button onClick={() => setEquation((prev) => prev.slice(0, -1))}>
        DEL
      </Button>
      <Button onClick={() => setEquation("")}>AC</Button>
      <Button color={"blue"} type={"submit"}>
        計算
      </Button>
    </div>
  );
};
