"use client";

import { audiences } from "@/content/siteContent";
import { FadeUp, Stagger, StaggerItem } from "@/components/landing/Reveal";
import { CheckIcon } from "@/components/landing/icons";

export function AudienceGrid() {
  return (
    <section id="patients" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Built for everyone touched by care.
          </h2>
        </FadeUp>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4" delay={0.08} stagger={0.1}>
          {audiences.map((item) => (
            <StaggerItem key={item.title}>
              <article className="flex h-full flex-col rounded-[1.35rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold text-[var(--color-fg)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.items.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm text-[var(--color-fg-soft)]">
                      <span className="mt-0.5 text-[var(--color-accent)]">
                        <CheckIcon />
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
