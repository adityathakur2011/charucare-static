import { cn } from "@/lib/cn";

export function IconWrap({
  tone,
  children,
  className,
}: {
  tone: "coral" | "blue" | "green";
  children: React.ReactNode;
  className?: string;
}) {
  const tones = {
    coral: "bg-[var(--color-icon-coral-bg)] text-[var(--color-icon-coral)]",
    blue: "bg-[var(--color-icon-blue-bg)] text-[var(--color-icon-blue)]",
    green: "bg-[var(--color-icon-green-bg)] text-[var(--color-icon-green)]",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function RecordsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="5" y="3.5" width="14" height="17" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M5 16.5V8.8A3.3 3.3 0 0 1 8.3 5.5h7.4A3.3 3.3 0 0 1 19 8.8v4.4A3.3 3.3 0 0 1 15.7 16.5H9.2L5 19.2V16.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="4" y="5.5" width="16" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 10h16M8 3.5v4M16 3.5v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function HubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="5.5" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10.2 10.6 6.8 7.7M13.8 10.5l3.4-2.4M10.3 13.4 7.3 16.2M13.8 13.5l3.2 2.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FamilyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.5" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 18.5c.4-2.8 2.4-4.4 4.3-4.4s3.9 1.6 4.3 4.4M13.2 14.4c1.5-.2 3.2.9 3.8 3.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" aria-hidden>
      <path
        d="M32 8 12 16v16c0 14 8.5 22.5 20 26 11.5-3.5 20-12 20-26V16L32 8Z"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M20 33h8l4-8 5 16 3-8h8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandsIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path
        d="M28 36c0-4 3-7 7-7 3 0 5 2 6 4 1-2 3-4 6-4 4 0 7 3 7 7 0 8-13 16-13 16S28 44 28 36Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M7 5.5v9l8-4.5-8-4.5Z" />
    </svg>
  );
}

const VALUE_PATHS = [
  "M12 3.5 4.5 7v5.4c0 5.1 3.4 8.4 7.5 9.6 4.1-1.2 7.5-4.5 7.5-9.6V7L12 3.5Z",
  "M12 4.5 5 8v8h14V8L12 4.5ZM8 16V9.2l4-2.1 4 2.1V16",
  "M12 20S5 15.2 5 10.2C5 7.6 7 6 9.2 6c1.4 0 2.4.7 2.8 1.7C12.4 6.7 13.4 6 14.8 6 17 6 19 7.6 19 10.2 19 15.2 12 20 12 20Z",
  "M12 3.5 13.8 9H19l-4.2 3.2L16.6 18 12 14.8 7.4 18l1.8-5.8L5 9h5.2L12 3.5Z",
  "M12 4v16M5.5 8.5h13M5.5 15.5h13",
  "M7 7h10v10H7V7Zm3.5 3.2 2.2 2.2 3-3.4",
];

export function ValueMark({ index }: { index: number }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d={VALUE_PATHS[index] ?? VALUE_PATHS[0]}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
