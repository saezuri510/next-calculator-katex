import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<"sm" | "md" | "lg" | "xl" | "2xl">("2xl");

  useEffect(() => {
    const func = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setWindowWidth("sm");
      } else if (width <= 768) {
        setWindowWidth("md");
      } else if (width <= 1024) {
        setWindowWidth("lg");
      } else if (width <= 1280) {
        setWindowWidth("xl");
      } else {
        setWindowWidth("2xl");
      }
    };

    window.addEventListener("resize", func);
    return () => window.removeEventListener("resize", func);
  }, []);

  return { windowWidth };
};
