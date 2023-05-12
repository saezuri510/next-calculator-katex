import { useCallback, useEffect, useRef, useState } from "react";

export const useInactiveVisibility = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>();

  const resetTimer = useCallback(() => {
    setIsVisible(false);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
  }, []);

  useEffect(() => {
    resetTimer();

    window.addEventListener("scroll", resetTimer);

    return () => {
      window.removeEventListener("scroll", resetTimer);
      clearTimeout(timeoutIdRef.current);
    };
  }, [resetTimer, timeoutIdRef]);

  return { isVisible, resetTimer };
};
