"use client";

import { FadeScale, FadeUp, SlideIn } from "@/components/landing/Reveal";

const patients = [
  { name: "Priya Sharma", status: "Stable" },
  { name: "James Okonkwo", status: "Follow-up" },
  { name: "Sofia Alvarez", status: "New" },
];

const appointments = [
  { time: "09:30", title: "Care huddle", who: "Clinic team" },
  { time: "11:15", title: "Family update", who: "Sharma circle" },
  { time: "14:00", title: "Visit review", who: "Dr. Elena Voss" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            One place for the people who care.
          </h2>
        </FadeUp>

        <FadeScale delay={0.12} className="mt-10 lg:mt-14">
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-4 shadow-[var(--shadow-float)] sm:p-6 lg:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--color-fg)]">Priya’s Circle</p>
                <p className="text-xs text-[var(--color-muted)]">Shared care workspace</p>
              </div>
              <span className="rounded-full bg-[var(--color-icon-green-bg)] px-3 py-1 text-xs font-semibold text-[var(--color-icon-green)]">
                Active monitoring
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <SlideIn from="left" delay={0.18}>
                <div className="flex flex-col items-center justify-center rounded-3xl bg-[var(--color-accent-soft)] p-6">
                  <div className="relative grid h-36 w-36 place-items-center">
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        fill="none"
                        stroke="var(--color-border)"
                        strokeWidth="10"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="10"
                        strokeDasharray="284"
                        strokeDashoffset="17"
                        strokeLinecap="round"
                        className="progress-fill"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <p className="text-3xl font-semibold tracking-tight text-[var(--color-fg)]">94%</p>
                      <p className="text-[11px] text-[var(--color-muted)]">Satisfaction</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-[var(--color-fg)]">Patient satisfaction</p>
                </div>
              </SlideIn>

              <SlideIn from="right" delay={0.22}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-[var(--color-border)] p-4">
                    <p className="text-sm font-semibold text-[var(--color-fg)]">Patient list</p>
                    <ul className="mt-3 space-y-3">
                      {patients.map((p) => (
                        <li key={p.name} className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)]">
                              {p.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                            <span className="text-sm text-[var(--color-fg)]">{p.name}</span>
                          </div>
                          <span className="text-[11px] text-[var(--color-muted)]">{p.status}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-[var(--color-border)] p-4">
                    <p className="text-sm font-semibold text-[var(--color-fg)]">Upcoming</p>
                    <ul className="mt-3 space-y-3">
                      {appointments.map((a) => (
                        <li key={a.time} className="flex gap-3">
                          <span className="w-12 shrink-0 text-xs font-semibold text-[var(--color-accent)]">
                            {a.time}
                          </span>
                          <span>
                            <span className="block text-sm text-[var(--color-fg)]">{a.title}</span>
                            <span className="text-[11px] text-[var(--color-muted)]">{a.who}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </FadeScale>
      </div>
    </section>
  );
}
