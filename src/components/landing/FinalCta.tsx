"use client";

import { Button } from "@/components/Button";
import { FadeScale } from "@/components/landing/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-band-bg)] text-[var(--color-band-fg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <FadeScale className="relative mx-auto max-w-[1180px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Better care starts with connection.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base opacity-85">
          Join clinics, families, and care teams who are building a more human health experience.
        </p>
        <Button as="link" href="#contact" variant="inverse" size="lg" className="mt-8">
          Get started today
        </Button>
      </FadeScale>
    </section>
  );
}
