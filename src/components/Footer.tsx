import Link from "next/link";
import { footerLinks, site } from "@/content/siteContent";
import { Logo } from "@/components/Logo";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M6.5 9H4V20h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7 1.5 1.5 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.8-.7-2.4-1.7-2.4s-1.9.9-1.9 2.5V20H11.4V9h2.5v1.5c.5-.9 1.6-1.8 3.3-1.8 2.2 0 3.8 1.4 3.8 4.4V20Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M17.5 4h2.4l-5.3 6.1L21 20h-4.7l-3.7-4.9L8.2 20H5.8l5.7-6.5L4 4h4.8l3.3 4.5L17.5 4Zm-.8 14.4h1.3L7.4 5.5H6L16.7 18.4Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-footer-bg)] text-[var(--color-footer-fg)]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              {site.description}
            </p>
          </div>
          <FooterCol title="Company" links={footerLinks.company} />
          <FooterCol title="Product" links={footerLinks.product} />
          <FooterCol title="Resources" links={footerLinks.resources} />
          <FooterCol title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-muted)]">
            © {new Date().getFullYear()} CharuCare. All rights reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Social links">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[var(--color-fg-soft)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
