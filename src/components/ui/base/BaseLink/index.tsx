import NextLink from "next/link";
import { ComponentProps, forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";

export type BaseLinkProps = Omit<ComponentProps<typeof NextLink>, "ref">;

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ children, className, ...rest }, forwardRef): JSX.Element => {
    return (
      <NextLink
        ref={forwardRef}
        className={twcx("flex cursor-pointer items-center justify-center", className)}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);

BaseLink.displayName = "BaseLink";
