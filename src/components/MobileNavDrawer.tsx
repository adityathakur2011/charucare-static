"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, hero } from "@/content/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06 6.53 18.53a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="overlay"
            role="presentation"
            aria-hidden
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.div
            key="drawer"
            aria-modal="true"
            aria-label="Mobile menu"
            role="dialog"
            className="fixed right-0 top-0 z-50 flex h-full w-[min(340px,88vw)] flex-col border-l border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-float)] lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-4">
              <Logo onClick={onClose} />
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)]"
                aria-label="Close menu"
              >
                <XIcon className="size-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Main">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-2xl px-4 py-3.5 text-base font-medium text-[var(--color-fg)] transition-colors hover:bg-[var(--color-accent-soft)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-3 border-t border-[var(--color-border)] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-[var(--color-muted)]">Theme</span>
                <ThemeToggle />
              </div>
              <Button
                as="link"
                href="#contact"
                className="w-full"
                size="lg"
                onClick={onClose}
              >
                {hero.bookDemo}
              </Button>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

export function HamburgerButton({ open, onClick, className }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)]",
        className
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
    </button>
  );
}
