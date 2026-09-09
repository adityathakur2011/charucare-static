"use client";

import { useState } from "react";
import { roles } from "@/content/siteContent";
import { Button } from "@/components/Button";
import { FadeUp } from "@/components/landing/Reveal";
import { cn } from "@/lib/cn";

export function CommunityForm() {
  const [role, setRole] = useState<(typeof roles)[number]>("Patients");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[var(--color-bg-alt)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Healthcare is becoming more connected.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {roles.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRole(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  role === item
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-cta-fg)]"
                    : "border-[var(--color-border)] bg-[var(--color-card-bg)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="mx-auto mt-12 max-w-xl">
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h3 className="text-center text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
              Be part of the future of care.
            </h3>
            {submitted ? (
              <p className="mt-6 text-center text-[var(--color-muted)]" role="status">
                Thank you. We will be in touch about early access for {role.toLowerCase()}.
              </p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <Field label="Name" name="name" autoComplete="name" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field label="Job title" name="title" autoComplete="organization-title" />
                <Field label="Organization" name="org" autoComplete="organization" />
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]">
                    I am a
                  </span>
                  <select
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as (typeof roles)[number])}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-fg)]"
                  >
                    {roles.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]">
                    I need help with
                  </span>
                  <select
                    name="need"
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-fg)]"
                    defaultValue="Early access"
                  >
                    <option>Early access</option>
                    <option>A product demo</option>
                    <option>Clinic partnership</option>
                    <option>Care for a family member</option>
                  </select>
                </label>
                <Button type="submit" size="lg" className="mt-2 w-full">
                  Request early access
                </Button>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-fg)] outline-none transition-shadow placeholder:text-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-accent)]"
      />
    </label>
  );
}
