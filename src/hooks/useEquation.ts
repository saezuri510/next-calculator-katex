import { useCallback, useState } from "react";

export const useEquation = (initialValue: string) => {
  const [equation, setEquation] = useState<string>(initialValue);

  const entryNumber = useCallback((number: string) => {
    setEquation((prev) => (prev === "0" ? number : `${prev}${number}`));
  }, []);

  const entrySymbol = useCallback((symbol: string) => {
    setEquation((prev) => `${prev}${symbol}`);
  }, []);

  const reset = useCallback(() => {
    setEquation("");
  }, []);

  return {
    equation,
    equationControllers: { entryNumber, entrySymbol, reset },
    setEquation,
  } as const;
};
