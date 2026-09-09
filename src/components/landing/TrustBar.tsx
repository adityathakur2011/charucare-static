"use client";

import { stats } from "@/content/siteContent";
import { CountUp, Stagger, StaggerItem } from "@/components/landing/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      <Stagger className="mx-auto hidden max-w-[1180px] grid-cols-4 divide-x divide-[var(--color-border)] px-4 sm:grid sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="px-4 py-6 text-center">
            <p className="text-2xl font-semibold tracking-tight text-[var(--color-fg)] lg:text-3xl">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                decimals={"decimals" in stat ? stat.decimals : 0}
              />
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
