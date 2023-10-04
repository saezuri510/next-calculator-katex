import { ComponentProps, forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";

export type BaseInputProps = Omit<ComponentProps<"input">, "ref">;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, ...rest }, forwardRef): JSX.Element => {
    return <input ref={forwardRef} className={twcx("cursor-pointer", className)} {...rest} />;
  },
);

BaseInput.displayName = "BaseInput";
