"use client";

import { FadeUp, SlideIn, Stagger, StaggerItem } from "@/components/landing/Reveal";

const vitals = [
  { label: "Blood type", value: "O+" },
  { label: "Heart rate", value: "72 bpm" },
  { label: "Blood pressure", value: "118/76" },
];

const records = [
  "Annual wellness summary",
  "Medication list — current",
  "Lab panel, March 2026",
  "Care plan shared with family",
];

export function RecordHighlight() {
  return (
    <section id="record" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <SlideIn from="left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Everything important
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Right where you need it.
          </h2>
          <p className="mt-4 max-w-md text-[var(--color-muted)]">
            A living patient record for clinical review — vitals, notes, and family-visible
            updates in one calm view. No more hunting across portals for the story that
            actually matters.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--color-fg-soft)]">
            <li>• Permissioned access for clinics, families, and caregivers</li>
            <li>• A timeline instead of a pile of PDFs</li>
            <li>• Built for review, not just storage</li>
          </ul>
        </SlideIn>

        <SlideIn from="right" delay={0.12}>
          <article className="mx-auto w-full max-w-md rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-float)] animate-float">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-cta-fg)]">
                PS
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Patient record
                </p>
                <h3 className="text-lg font-semibold text-[var(--color-fg)]">Priya Sharma</h3>
              </div>
            </div>
            <Stagger className="mt-5 grid grid-cols-3 gap-2" stagger={0.08}>
              {vitals.map((v) => (
                <StaggerItem key={v.label}>
                  <div className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-center">
                    <p className="text-[11px] text-[var(--color-muted)]">{v.label}</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-fg)]">{v.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <ul className="mt-5 space-y-2.5">
              {records.map((item, i) => (
                <FadeUp key={item} delay={0.15 + i * 0.06} y={12}>
                  <li className="rounded-xl border border-[var(--color-border)] px-3 py-2.5 text-sm text-[var(--color-fg-soft)]">
                    {item}
                  </li>
                </FadeUp>
              ))}
            </ul>
          </article>
        </SlideIn>
      </div>
    </section>
  );
}
