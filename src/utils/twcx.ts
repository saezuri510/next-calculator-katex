import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function twcx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
