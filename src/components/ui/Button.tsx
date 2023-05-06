import classNames from "classnames";
import { ComponentProps, forwardRef, ReactNode } from "react";

type Props = Omit<ComponentProps<"button">, "className" | "type"> & {
  children: ReactNode;
  color?: "white" | "gray" | "blue";
  type?: "button" | "submit";
  size?: "smallBox" | "fit" | "largeFit" | "regular";
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, color = "white", size = "regular", type = "button", ...rest },
    forwardRef,
  ): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={classNames(
          "flex cursor-pointer items-center justify-center rounded border font-medium",
          {
            "bg-blue-500": color === "blue",
            "bg-gray-300": color === "gray",
            "bg-white": color === "white",
            "h-[32px]": size === "regular",
            "h-[32px] w-[32px]": size === "smallBox",
            "h-[32px] w-fit p-[16px]": size === "fit",
            "h-[48px] w-fit p-[16px]": size === "largeFit",
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
