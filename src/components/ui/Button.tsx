import classNames from "classnames";
import { ComponentProps, forwardRef, ReactNode } from "react";

// TODO: スタイルの扱いはまた検討が必要.
type Props = Omit<ComponentProps<"button">, "className" | "type"> & {
  children: ReactNode;
  color?: "white" | "gray" | "blue";
  type?: "button" | "submit";
  size?: "smallBox" | "fit" | "largeFit" | "regular" | "unspecified";
  padding?: "small" | "regular" | "onlyHorizontal";
  radius?: "rounded" | "circle";
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "white",
      padding,
      radius = "rounded",
      size = "regular",
      type = "button",
      ...rest
    },
    forwardRef,
  ): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={classNames(
          "flex cursor-pointer items-center justify-center border font-medium",
          {
            "bg-blue-500": color === "blue",
            "bg-gray-300": color === "gray",
            "bg-white": color === "white",
            "h-[32px]": size === "regular",
            "h-[32px] w-[32px]": size === "smallBox",
            "h-[32px] w-fit": size === "fit",
            "h-[48px] w-fit": size === "largeFit",
            "p-[8px]": padding === "small",
            "p-[16px]": padding === "regular",
            "px-[16px]": padding === "onlyHorizontal",
            rounded: radius === "rounded",
            "rounded-full": radius === "circle",
          },
        )}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
