import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names with clsx. Use for conditional and combined Tailwind classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
