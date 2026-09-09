"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16">
      <h1 className="text-xl font-semibold text-[var(--color-fg)]">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-center text-[var(--color-muted)]">
        An error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-[var(--radius)] bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:shadow-[0 6px 12px -2px rgb(0 0 0 / 0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        Try again
      </button>
    </div>
  );
}
