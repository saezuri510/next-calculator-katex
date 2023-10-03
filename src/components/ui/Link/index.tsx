import NextLink from "next/link";
import { ComponentProps, forwardRef } from "react";

import { twcx } from "../../../utils/twcx";

type Props = ComponentProps<typeof NextLink> & {
  pattern?: "button" | "underline";
};

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, pattern = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <NextLink
        ref={forwardRef}
        className={twcx(
          "flex h-[32px] cursor-pointer items-center justify-center font-medium",
          {
            "rounded border": pattern === "button",
            "text-red-600 underline decoration-blue-400": pattern === "underline",
          },
          className,
        )}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";
