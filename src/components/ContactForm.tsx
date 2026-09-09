"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

interface ContactFormProps {
  contactEmail: string;
}

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-accent)]/10 p-6 text-[var(--color-fg)] sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-medium">Thanks for your message.</p>
        <p className="mt-2 text-[var(--color-muted)]">
          Please email us at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-medium text-[var(--color-accent)] underline hover:no-underline"
          >
            {contactEmail}
          </a>{" "}
          to complete your request. We will get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          className={cn(
            "w-full rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-2.5 text-[var(--color-fg)]",
            "placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          )}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]"
        >
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          className={cn(
            "w-full rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-2.5 text-[var(--color-fg)]",
            "placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          )}
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          className={cn(
            "w-full rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-2.5 text-[var(--color-fg)]",
            "placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          )}
          placeholder="Your email"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={cn(
            "w-full resize-y rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-2.5 text-[var(--color-fg)]",
            "placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          )}
          placeholder="How can we help?"
        />
      </div>
      <Button type="submit" size="lg">
        Send message
      </Button>
    </form>
  );
}
