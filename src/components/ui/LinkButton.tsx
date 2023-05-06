import classNames from "classnames";
import Link from "next/link";
import { ComponentProps, forwardRef, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
  size?: "fit";
  pattern?: "underline" | "border";
};

export const LinkButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, pattern = "border", size, ...rest }, forwardRef): JSX.Element => {
    return (
      <Link
        ref={forwardRef}
        className={classNames(
          "flex h-[32px] cursor-pointer items-center justify-center  font-medium",
          {
            "rounded border": pattern === "border",
            "text-red-600 underline decoration-blue-400": pattern === "underline",
            "w-fit p-[16px]": size === "fit",
          },
        )}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";
