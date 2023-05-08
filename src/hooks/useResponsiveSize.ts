import { useEffect, useState } from "react";

export const useResponsiveSize = () => {
  const [ResponsiveSize, setResponsiveSize] = useState<"sm" | "md" | "lg" | "xl" | "2xl">("2xl");

  useEffect(() => {
    const func = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setResponsiveSize("sm");
      } else if (width <= 768) {
        setResponsiveSize("md");
      } else if (width <= 1024) {
        setResponsiveSize("lg");
      } else if (width <= 1280) {
        setResponsiveSize("xl");
      } else {
        setResponsiveSize("2xl");
      }
    };

    window.addEventListener("resize", func);
    return () => window.removeEventListener("resize", func);
  }, []);

  return { ResponsiveSize } as const;
};
