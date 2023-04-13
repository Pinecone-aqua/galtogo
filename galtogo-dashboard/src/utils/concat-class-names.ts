import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function concat(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
