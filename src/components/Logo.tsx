import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="CharuCare home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent)] text-[var(--color-cta-fg)] shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
          <path
            d="M12 20s-7-4.4-7-9.2C5 8 6.8 6.4 9 6.4c1.3 0 2.3.6 3 1.6.7-1 1.7-1.6 3-1.6 2.2 0 4 1.6 4 4.4 0 4.8-7 9.2-7 9.2Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tight text-[var(--color-fg)]">
        CharuCare
      </span>
    </Link>
  );
}
