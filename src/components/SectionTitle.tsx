import { cn } from "@/lib/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  /** Use "h1" for the main page title (one per page). Default "h2" for section titles. */
  titleAs?: "h1" | "h2";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  titleAs = "h2",
}: SectionTitleProps) {
  const TitleTag = titleAs;
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}
      <TitleTag className="text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-3xl">
        {title}
      </TitleTag>
      {description && (
        <p className={cn("max-w-2xl text-[var(--color-muted)]", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
