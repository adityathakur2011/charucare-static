import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "border border-transparent bg-[var(--color-cta-bg)] !text-[var(--color-cta-fg)] shadow-[var(--shadow-soft)] hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-card)]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-card-bg)] !text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]",
  ghost:
    "border border-transparent bg-transparent !text-[var(--color-fg)] hover:!text-[var(--color-accent)]",
  inverse:
    "border border-transparent bg-white !text-[#063a28] shadow-[var(--shadow-soft)] hover:bg-white/90 dark:bg-[var(--color-bg-alt)] dark:!text-[var(--color-fg)]",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.95rem]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  type?: never;
  disabled?: never;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const combined = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if (rest.as === "link" && "href" in rest) {
    const { href, onClick } = rest;
    return (
      <Link href={href} className={combined} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = rest as ButtonAsButton;
  return (
    <button type={type} disabled={disabled} className={combined} onClick={onClick}>
      {children}
    </button>
  );
}
