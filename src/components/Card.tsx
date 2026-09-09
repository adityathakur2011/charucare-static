import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  hover?: boolean;
}

export function Card({
  children,
  className,
  as: Component = "div",
  hover = true,
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-card)] transition-shadow",
        hover && "hover:shadow-[0 8px 24px -4px rgb(0 0 0 / 0.1), 0 4px 8px -4px rgb(0 0 0 / 0.06)] dark:hover:shadow-[0 8px 24px -4px rgb(0 0 0 / 0.35)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
