import { Dispatch, SetStateAction } from "react";

type Props = {
  setEquation: Dispatch<SetStateAction<string>>;
};

export const DeleteButton = ({ setEquation }: Props) => {
  return (
    <button onClick={() => setEquation((prev) => prev.slice(0, -1))}>
      DEL
    </button>
  );
};
