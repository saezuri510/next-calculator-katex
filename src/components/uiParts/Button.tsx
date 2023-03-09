import classNames from "classnames";
import { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<"button">, "className" | "type"> & {
  children: ReactNode;
  color?: "white" | "gray" | "blue";
  type?: "button" | "submit";
};

export const Button = ({
  children,
  color = "white",
  type = "button",
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      className={classNames(
        "h-[32px] cursor-pointer rounded border font-medium",
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
};
