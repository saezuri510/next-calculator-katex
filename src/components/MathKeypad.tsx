import { Dispatch, SetStateAction } from "react";
import { DeleteButton } from "./elements/DeleteButton";
import { NumberButton } from "./elements/NumberButton";
import { SymbolButton } from "./elements/SymbolButton";

type Props = {
  setEquation: Dispatch<SetStateAction<string>>;
};

export const MathKeypad = ({ setEquation }: Props) => {
  return (
    <div>
      <div>
        <NumberButton setEquation={setEquation} number={"7"} />
        <NumberButton setEquation={setEquation} number={"8"} />
        <NumberButton setEquation={setEquation} number={"9"} />
        <DeleteButton setEquation={setEquation} />
        <SymbolButton
          setEquation={setEquation}
          symbol={"x"}
          texFunc={"\\div"}
        />
        <NumberButton setEquation={setEquation} number={"4"} />
        <NumberButton setEquation={setEquation} number={"5"} />
        <NumberButton setEquation={setEquation} number={"6"} />
        <SymbolButton
          setEquation={setEquation}
          symbol={"÷"}
          texFunc={"\\times"}
        />
        <NumberButton setEquation={setEquation} number={"1"} />
        <NumberButton setEquation={setEquation} number={"2"} />
        <NumberButton setEquation={setEquation} number={"3"} />
        <SymbolButton setEquation={setEquation} symbol={"-"} />
        <NumberButton setEquation={setEquation} number={"0"} />
        <SymbolButton setEquation={setEquation} symbol={"."} />
        <SymbolButton setEquation={setEquation} symbol={"+"} />
      </div>
    </div>
  );
};
