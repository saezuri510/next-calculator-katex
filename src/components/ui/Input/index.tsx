import { ComponentProps, forwardRef } from "react";
import { tv } from "tailwind-variants";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...rest }, forwardRef): JSX.Element => {
    return (
      <input
        ref={forwardRef}
        className={tv({ base: "w-[256px] cursor-pointer rounded border border-black" })({
          className: className,
        })}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
