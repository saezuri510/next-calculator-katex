import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<"sm" | "md" | "lg" | "xl" | "2xl">("2xl");

  useEffect(() => {
    const func = () => {
      const width = window.innerWidth;

      switch (true) {
        case width <= 640:
          setWindowWidth("sm");
          break;
        case width <= 768:
          setWindowWidth("md");
          break;
        case width <= 1024:
          setWindowWidth("lg");
          break;
        case width <= 1280:
          setWindowWidth("xl");
          break;
        case width <= 1536:
          setWindowWidth("2xl");
          break;
      }
    };

    window.addEventListener("resize", func);
    func();
    return () => window.removeEventListener("resize", func);
  }, []);

  return { windowWidth };
};
