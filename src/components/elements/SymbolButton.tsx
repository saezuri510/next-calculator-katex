import { Dispatch, SetStateAction } from "react";

type Props = {
  setEquation: Dispatch<SetStateAction<string>>;
  symbol: string;
  texFunc?: string;
};

export const SymbolButton = ({
  setEquation,
  symbol,
  texFunc = symbol,
}: Props) => {
  const handleClick = () => {
    setEquation((prev) => prev + texFunc);
  };

  return <button onClick={() => handleClick()}>{symbol}</button>;
};
