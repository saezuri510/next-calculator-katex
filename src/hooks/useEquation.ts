import { useCallback, useState } from "react";

export const useEquation = (initialValue: string) => {
  const [equation, setEquation] = useState<string>(initialValue);

  const entryNumber = useCallback((number: string) => {
    const func = (prev: string) => {
      if (prev === "0") {
        return number;
      }
      return prev + number;
    };
    setEquation((prev) => func(prev));
  }, []);

  const entrySymbol = useCallback((symbol: string) => {
    setEquation((prev) => prev + symbol);
  }, []);

  const reset = useCallback(() => {
    setEquation("");
  }, []);

  return {
    equation,
    setEquation,
    equationControllers: { entryNumber, entrySymbol, reset },
  } as const;
};
