import { forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";
import { BaseButton, BaseButtonProps } from "../../base/BaseButton";

export const SimpleButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, className, type = "button", ...rest }, forwardRef): JSX.Element => {
    return (
      <BaseButton
        ref={forwardRef}
        className={twcx("h-[32px] rounded border bg-white font-medium", className)}
        type={type}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

SimpleButton.displayName = "SimpleButton";
