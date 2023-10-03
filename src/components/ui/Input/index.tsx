import { ComponentProps, forwardRef } from "react";

import { twcx } from "../../../utils/twcx";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...rest }, forwardRef): JSX.Element => {
    return (
      <input
        ref={forwardRef}
        className={twcx("w-[256px] cursor-pointer rounded border border-black", className)}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
