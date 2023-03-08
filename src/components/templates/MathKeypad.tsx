import { Dispatch, SetStateAction } from "react";
import { Button } from "../uiParts/Button";

type Props = {
  setEquation: Dispatch<SetStateAction<string>>;
};

export const MathKeypad = ({ setEquation }: Props): JSX.Element => {
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
    <div>
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
      <Button color={"gray"} onClick={() => handleNumberClick("0")}>
        0
      </Button>
      <Button onClick={() => handleSymbolClick(".")}>.</Button>
      <Button onClick={() => handleSymbolClick("\\times10^2")}>x10^2</Button>
      <Button onClick={() => handleSymbolClick("+")}>+</Button>
    </div>
  );
};
