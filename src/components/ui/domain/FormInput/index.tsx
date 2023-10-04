import { forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";
import { BaseInput, BaseInputProps } from "../../base/BaseInput";

export const FormInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, ...rest }, forwardRef): JSX.Element => {
    return (
      <BaseInput
        ref={forwardRef}
        className={twcx("w-[256px] rounded border border-black", className)}
        {...rest}
      />
    );
  },
);

FormInput.displayName = "FormInput";
