import classNames from "classnames";
import { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<"button">, "className" | "type"> & {
  children: ReactNode;
  color?: "white" | "gray" | "blue";
  type?: "button" | "submit";
  size?: "smallBox";
};

export const Button = ({
  children,
  color = "white",
  size,
  type = "button",
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      className={classNames(
        "flex h-[32px] cursor-pointer items-center justify-center rounded border font-medium",
        {
          "bg-blue-500": color === "blue",
          "bg-gray-300": color === "gray",
          "bg-white": color === "white",
          "h-[32px] w-[32px]": size === "smallBox",
        },
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
