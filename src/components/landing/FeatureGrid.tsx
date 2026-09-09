"use client";

import Link from "next/link";
import { features } from "@/content/siteContent";
import { FadeUp, Stagger, StaggerItem } from "@/components/landing/Reveal";
import {
  ArrowIcon,
  CalendarIcon,
  ChatIcon,
  FamilyIcon,
  HubIcon,
  IconWrap,
  RecordsIcon,
} from "@/components/landing/icons";

const ICONS = [
  { Icon: RecordsIcon, tone: "coral" as const },
  { Icon: ChatIcon, tone: "blue" as const },
  { Icon: CalendarIcon, tone: "green" as const },
  { Icon: HubIcon, tone: "coral" as const },
  { Icon: FamilyIcon, tone: "blue" as const },
];

export function FeatureGrid() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl lg:text-[2.7rem]">
            Healthcare is connected.{" "}
            <span className="block text-[var(--color-muted)] sm:inline sm:text-[var(--color-fg)]">
              The experience of health isn’t.
            </span>
          </h2>
        </FadeUp>

        <Stagger
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5"
          delay={0.12}
          stagger={0.09}
        >
          {features.map((feature, i) => {
            const { Icon, tone } = ICONS[i];
            return (
              <StaggerItem key={feature.title}>
                <article className="group flex h-full flex-col rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-card)]">
                  <IconWrap tone={tone} className="transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </IconWrap>
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-fg)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] transition-all group-hover:gap-2"
                  >
                    Learn more
                    <ArrowIcon />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
