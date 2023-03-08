import classNames from "classnames";
import { ComponentProps, FC, ReactNode } from "react";

type Props = Omit<ComponentProps<"button">, "className"> & {
  children: ReactNode;
  color?: string;
};

export const Button = ({
  children,
  color = "white",
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      className={classNames(
        "h-[24px] w-[64px] cursor-pointer rounded border",
        color === "white" ? "bg-white" : "bg-gray-300"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
