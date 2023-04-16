import Link from "next/link";
import { ComponentProps, forwardRef, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
};

export const LinkButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...rest }, forwardRef): JSX.Element => {
    return (
      <Link
        ref={forwardRef}
        className="flex h-[32px] cursor-pointer items-center justify-center rounded border font-medium"
        {...rest}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";
