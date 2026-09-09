"use client";

import { useState } from "react";
import { faqs, testimonials } from "@/content/siteContent";
import { FadeUp } from "@/components/landing/Reveal";
import { cn } from "@/lib/cn";

export function FaqTestimonials() {
  const [open, setOpen] = useState(0);
  const [slide, setSlide] = useState(0);
  const current = testimonials[slide];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            What people in the circle are saying
          </h2>
          <article className="mt-8 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-card)] sm:p-8">
            <div className="flex gap-1 text-[var(--color-accent)]" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-[var(--color-fg-soft)]">
              “{current.quote}”
            </blockquote>
            <p className="mt-5 text-sm font-semibold text-[var(--color-fg)]">{current.name}</p>
            <p className="text-sm text-[var(--color-muted)]">{current.role}</p>
            <div className="mt-6 flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setSlide(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === slide
                      ? "w-7 bg-[var(--color-accent)]"
                      : "w-2.5 bg-[var(--color-border)]"
                  )}
                />
              ))}
            </div>
          </article>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div id="faq">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
              Questions, answered
            </h2>
            <div className="mt-8 divide-y divide-[var(--color-border)] rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] px-2 shadow-[var(--shadow-soft)]">
              {faqs.map((item, i) => {
                const expanded = open === i;
                return (
                  <div key={item.question}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setOpen(expanded ? -1 : i)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[var(--color-fg)]"
                      >
                        <span className="font-semibold">{item.question}</span>
                        <span
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-lg text-[var(--color-accent)] transition-transform duration-300"
                          style={{ transform: expanded ? "rotate(45deg)" : "none" }}
                          aria-hidden
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <p className="overflow-hidden px-4 text-sm text-[var(--color-muted)]">
                        <span className="block pb-4">{item.answer}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
