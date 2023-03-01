import { Dispatch, SetStateAction } from "react";

type Props = {
  setEquation: Dispatch<SetStateAction<string>>;
  number: string;
};

export const NumberButton = ({ setEquation, number }: Props) => {
  const handleClick = () => {
    const func = (prev: string) => {
      if (prev === "0") {
        return number;
      }
      return prev + number;
    };
    setEquation((prev) => func(prev));
  };

  return <button onClick={() => handleClick()}>{number}</button>;
};
