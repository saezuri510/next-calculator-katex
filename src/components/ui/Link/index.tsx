import NextLink from "next/link";
import { ComponentProps, forwardRef } from "react";
import { tv } from "tailwind-variants";

type Props = ComponentProps<typeof NextLink> & {
  pattern?: "underline";
};

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, pattern, ...rest }, forwardRef): JSX.Element => {
    return (
      <NextLink
        ref={forwardRef}
        className={tv({
          base: "flex h-[32px] cursor-pointer items-center justify-center  rounded border font-medium",
          variants: {
            pattern: {
              underline: "text-red-600 underline decoration-blue-400",
            },
          },
        })({ className: className, color: pattern })}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";