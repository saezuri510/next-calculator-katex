import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
};

export const LinkButton = ({ children, ...rest }: Props): JSX.Element => {
  return (
    <Link
      className="flex h-[32px] cursor-pointer items-center justify-center rounded border font-medium"
      {...rest}
    >
      {children}
    </Link>
  );
};
