import { ComponentProps, forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";

export type BaseButtonProps = Omit<ComponentProps<"button">, "ref">;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, className, type = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <button
        ref={forwardRef}
        className={twcx("flex cursor-pointer items-center justify-center", className)}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

BaseButton.displayName = "BaseButton";
