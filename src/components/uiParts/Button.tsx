import classNames from "classnames";
import { ComponentProps, memo, ReactNode } from "react";

type Props = Omit<ComponentProps<"button">, "className" | "type"> & {
  children: ReactNode;
  color?: "white" | "gray" | "blue";
  type?: "button" | "submit";
};

export const Button = memo(
  ({
    children,
    color = "white",
    type = "button",
    ...rest
  }: Props): JSX.Element => {
    return (
      <button
        className={classNames(
          "flex h-[32px] cursor-pointer items-center justify-center rounded border font-medium",
          {
            "bg-white": color === "white",
            "bg-gray-300": color === "gray",
            "bg-blue-500": color === "blue",
          }
        )}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
