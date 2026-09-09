"use client";

import { steps } from "@/content/siteContent";
import { FadeUp, Stagger, StaggerItem } from "@/components/landing/Reveal";

export function ProcessSteps() {
  return (
    <section id="how-it-works" className="bg-[var(--color-bg-alt)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Care, without the complexity.
          </h2>
        </FadeUp>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4" delay={0.08} stagger={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.n}>
              <article className="relative overflow-hidden rounded-[1.35rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-soft)]">
                <p className="text-3xl font-bold tracking-tight text-[var(--color-accent)]">{step.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-fg)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{step.description}</p>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[var(--color-accent-soft)]">
                  <div
                    className="progress-fill h-full rounded-full bg-[var(--color-accent)]"
                    style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
