"use client";

import { useState, useId } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { cn } from "@/lib/cn";

export interface AccordionItemContent {
  question: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface AccordionItemProps extends AccordionItemContent {
  defaultExpanded?: boolean;
}

export function AccordionItem({
  question,
  paragraphs,
  bullets,
  defaultExpanded = false,
}: AccordionItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const buttonId = useId();
  const panelId = useId();

  const hasContent = (paragraphs?.length ?? 0) > 0 || (bullets?.length ?? 0) > 0;

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <h3 className="text-lg font-semibold">
        <button
          type="button"
          id={buttonId}
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((e) => !e)}
          className={cn(
            "flex w-full items-center justify-between gap-4 py-4 text-left text-[var(--color-fg)]",
            "hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
          )}
        >
          <span>{question}</span>
          <span
            className={cn(
              "shrink-0 text-[var(--color-muted)] transition-transform",
              expanded && "rotate-180"
            )}
            aria-hidden
          >
            <ExpandMoreIcon sx={{ fontSize: 28 }} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!expanded}
        className={cn("overflow-hidden", !expanded && "h-0")}
      >
        <div className="pb-4 pt-0">
          {!hasContent ? (
            <p className="text-[var(--color-muted)]">Content coming soon.</p>
          ) : (
            <>
              {paragraphs && paragraphs.length > 0 && (
                <div className="space-y-3">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="text-[var(--color-muted)]">
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {bullets && bullets.length > 0 && (
                <ul
                  className={cn(
                    "mt-3 list-none space-y-2",
                    (paragraphs?.length ?? 0) > 0 && "mt-4"
                  )}
                  role="list"
                >
                  {bullets.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[var(--color-muted)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemContent[];
  defaultExpandedIndex?: number;
}

export function Accordion({
  items,
  defaultExpandedIndex = 0,
}: AccordionProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card-bg)] shadow-[var(--shadow-card)]">
      <div className="divide-y-0 px-4 sm:px-6">
        {items.map((item, i) => (
          <AccordionItem
            key={item.question}
            {...item}
            defaultExpanded={i === defaultExpandedIndex}
          />
        ))}
      </div>
    </div>
  );
}
