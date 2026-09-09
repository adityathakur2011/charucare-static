"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, hero } from "@/content/siteContent";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/Button";
import { MobileNavDrawer, HamburgerButton } from "@/components/MobileNavDrawer";
import { ScrollProgress } from "@/components/landing/Reveal";
import { cn } from "@/lib/cn";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[var(--header-height)] max-w-[1180px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Logo className="shrink-0" />

          <nav
            className="mx-auto hidden items-center gap-8 lg:flex"
            aria-label="Main"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button as="link" href="#contact" size="md">
              {hero.bookDemo}
            </Button>
          </div>

          {/* Mobile / tablet: theme right-aligned, menu beside it — no Book a demo */}
          <div className="ml-auto flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <HamburgerButton
              open={drawerOpen}
              onClick={() => setDrawerOpen((o) => !o)}
            />
          </div>
        </div>
      </header>

      <MobileNavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
