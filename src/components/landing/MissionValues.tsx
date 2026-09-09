"use client";

import Link from "next/link";
import { values } from "@/content/siteContent";
import {
  AccentPhrase,
  FadeScale,
  FadeUp,
  Stagger,
  StaggerItem,
} from "@/components/landing/Reveal";
import { HandsIcon, ValueMark } from "@/components/landing/icons";

export function MissionValues() {
  return (
    <>
      <section id="mission" className="py-16 sm:py-20">
        <FadeScale className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] animate-float-slow">
            <HandsIcon />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Because healthcare isn’t just about data.{" "}
            <AccentPhrase>It’s about people.</AccentPhrase>
          </h2>
          <Link
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
          >
            Join the mission →
          </Link>
        </FadeScale>
      </section>

      <section id="values" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
              Engineered for trust and compassion.
            </h2>
          </FadeUp>
          <Stagger
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
            delay={0.08}
            stagger={0.09}
          >
            {values.map((item, i) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <ValueMark index={i} />
                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
