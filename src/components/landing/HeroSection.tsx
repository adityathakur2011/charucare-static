"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { hero, stats } from "@/content/siteContent";
import {
  AccentPhrase,
  CountUp,
  FadeUp,
  Parallax,
  Stagger,
  StaggerItem,
  WordReveal,
} from "@/components/landing/Reveal";
import { ShieldIcon } from "@/components/landing/icons";

const nodes = [
  { label: "Care providers", sub: "Clinics & teams", x: "50%", y: "6%", delay: 0 },
  { label: "Patients", sub: "At the center", x: "86%", y: "42%", delay: 0.12 },
  { label: "Families", sub: "Always included", x: "50%", y: "80%", delay: 0.24 },
  { label: "Community", sub: "Social support", x: "14%", y: "42%", delay: 0.36 },
] as const;

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="surface-hero relative overflow-hidden pb-10 pt-[calc(var(--header-height)+1.25rem)] sm:pb-16 sm:pt-[calc(var(--header-height)+2rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[var(--color-accent)]/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <div className="space-y-6">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {hero.eyebrow}
            </p>
          </FadeUp>

          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
            <WordReveal text={hero.headline} />{" "}
            <FadeUp delay={0.28} className="inline-block" y={18}>
              <AccentPhrase className="text-[1.05em]">
                {hero.headlineAccent}
              </AccentPhrase>
            </FadeUp>
          </h1>

          <FadeUp delay={0.2}>
            <p className="max-w-lg text-base text-[var(--color-muted)] sm:text-lg">
              {hero.body}
            </p>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="link" href="#contact" size="lg" className="w-full sm:w-auto">
                {hero.primaryCta}
              </Button>
              <Button
                as="link"
                href="#how-it-works"
                variant="ghost"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                {hero.secondaryCta}
                <span aria-hidden>→</span>
              </Button>
            </div>
          </FadeUp>

          <Stagger className="flex flex-wrap gap-2 pt-1" delay={0.35} stagger={0.08}>
            {hero.trustChips.map((chip) => (
              <StaggerItem key={chip.label}>
                <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)]/80 px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] shadow-[var(--shadow-soft)]">
                  {chip.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Parallax offset={28} className="relative">
          <div className="hidden lg:block">
            <NetworkGraphic reduce={!!reduce} />
          </div>
          <div className="lg:hidden">
            <MobileHeroVisual />
          </div>
        </Parallax>
      </div>
    </section>
  );
}

function NetworkGraphic({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[520px]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 440"
        fill="none"
        aria-hidden
      >
        <line className="network-line" x1="260" y1="220" x2="260" y2="58" />
        <line className="network-line" x1="260" y1="220" x2="448" y2="220" />
        <line className="network-line" x1="260" y1="220" x2="260" y2="382" />
        <line className="network-line" x1="260" y1="220" x2="72" y2="220" />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[var(--color-accent)]/25" />
        <span className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[var(--color-accent)] text-center text-[var(--color-cta-fg)] shadow-[var(--shadow-float)]">
          <span className="text-[0.7rem] font-semibold leading-tight">CharuCare</span>
        </span>
      </motion.div>

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          initial={reduce ? false : { opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35 + node.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="animate-float min-w-[148px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-3 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold text-[var(--color-fg)]">{node.label}</p>
            <p className="text-xs text-[var(--color-muted)]">{node.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MobileHeroVisual() {
  return (
    <div className="space-y-8">
      <motion.div
        className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] shadow-[var(--shadow-float)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] animate-float-slow">
          <ShieldIcon />
        </div>
      </motion.div>
      <Stagger className="grid grid-cols-2 gap-3" stagger={0.1}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-4 shadow-[var(--shadow-soft)]">
              <p className="text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
