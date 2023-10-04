import { forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";
import { BaseLink, BaseLinkProps } from "../../base/BaseLink";

type Props = BaseLinkProps & {
  pattern?: "button" | "underline";
};

export const FormLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, pattern = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <BaseLink
        ref={forwardRef}
        className={twcx(
          "h-[32px] font-medium",
          {
            "rounded border": pattern === "button",
            "text-red-600 underline decoration-blue-400": pattern === "underline",
          },
          className,
        )}
        {...rest}
      >
        {children}
      </BaseLink>
    );
  },
);

FormLink.displayName = "FormLink";
