import { cn } from "@/lib/cn";

interface IconBadgeProps {
  icon: React.ReactNode;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

export function IconBadge({
  icon,
  label,
  className,
  size = "md",
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card-bg)] shadow-[var(--shadow-soft)] text-[var(--color-accent)]",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-10 w-10",
        size === "md" && !label && "h-12 w-12",
        label && "gap-2 px-3 py-2",
        label && size === "sm" && "h-8 px-2 py-1 text-xs",
        label && size === "md" && "h-auto min-w-[2.5rem] py-2 text-sm font-medium",
        className
      )}
      role={label ? undefined : "img"}
      aria-hidden={!label}
    >
      <span className="shrink-0 [&>svg]:size-5 [&>svg]:shrink-0">{icon}</span>
      {label && <span>{label}</span>}
    </span>
  );
}
