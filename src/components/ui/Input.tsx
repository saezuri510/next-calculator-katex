import { ComponentProps, forwardRef } from "react";

type Props = Omit<ComponentProps<"input">, "className">;

export const Input = forwardRef<HTMLInputElement, Props>(({ ...rest }, forwardRef): JSX.Element => {
  return (
    <input
      ref={forwardRef}
      className="w-[256px] cursor-pointer rounded border border-black"
      {...rest}
    />
  );
});

Input.displayName = "Input";
