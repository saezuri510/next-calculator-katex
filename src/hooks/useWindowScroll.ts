import { useEffect, useState } from "react";

// これはfixedを持つ要素に対してあてる
export const useWindowScroll = (isFirstVisible = false) => {
  const [isElementShown, setIsElementShown] = useState<boolean>(isFirstVisible);
  const [lastPosition, setLastPosition] = useState<number>(0);

  useEffect(() => {
    const func = () => {
      const currentPosition = window.pageYOffset;

      // 上にスクロールすると表示
      if (currentPosition < lastPosition) {
        setIsElementShown(true);
      } else {
        setIsElementShown(false);
      }

      setLastPosition(currentPosition);
    };

    window.addEventListener("scroll", func);
    return () => window.removeEventListener("scroll", func);
  }, [lastPosition]);

  return { isElementShown, setIsElementShown } as const;
};
