"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  allVideos,
  filterVideos,
  getCategoriesForDomain,
  type VideoDomain,
  type VideoItem,
} from "@/lib/videos";
import { FadeUp } from "@/components/landing/Reveal";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 9;

export function VideosSection() {
  const [domain, setDomain] = useState<VideoDomain | "all">("cancer_education");
  const [category, setCategory] = useState<string | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const categories = useMemo(() => getCategoriesForDomain(domain), [domain]);
  const filtered = useMemo(
    () => filterVideos(domain, category),
    [domain, category]
  );
  const totalForDomain = useMemo(
    () => filterVideos(domain, "all").length,
    [domain]
  );
  const shown = filtered.slice(0, visible);

  const playlist = useMemo(() => {
    if (!activeId) return [];
    const start = filtered.findIndex((v) => v.id === activeId);
    if (start < 0) return filtered;
    return [...filtered.slice(start), ...filtered.slice(0, start)];
  }, [activeId, filtered]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setCategory("all");
    setVisible(PAGE_SIZE);
  }, [domain]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [category]);

  const openVideo = useCallback((video: VideoItem) => {
    setActiveId(video.id);
  }, []);

  const closePlayer = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <section id="videos" className="bg-[var(--color-bg-alt)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Learn in minutes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Care education, by category
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Short videos across cancer education and supportive care — swipe
            like reels on mobile, or watch in a player on laptop.
          </p>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-8 flex flex-wrap justify-center gap-2">
          <DomainChip
            active={domain === "all"}
            onClick={() => setDomain("all")}
            label={`All (${allVideos.length})`}
          />
          <DomainChip
            active={domain === "cancer_education"}
            onClick={() => setDomain("cancer_education")}
            label="Cancer Education"
          />
          <DomainChip
            active={domain === "supportive_care"}
            onClick={() => setDomain("supportive_care")}
            label="Supportive Care"
          />
        </FadeUp>

        <FadeUp delay={0.12} className="mt-5">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            <CategoryChip
              active={category === "all"}
              onClick={() => setCategory("all")}
              label={`All topics (${totalForDomain})`}
            />
            {categories.map((cat) => (
              <CategoryChip
                key={cat.id}
                active={category === cat.id}
                onClick={() => setCategory(cat.id)}
                label={`${cat.label} (${cat.count})`}
              />
            ))}
          </div>
        </FadeUp>

        <p className="mt-4 text-center text-sm text-[var(--color-muted)]">
          Showing {shown.length} of {filtered.length} videos
        </p>

        {shown.length === 0 ? (
          <p className="mt-12 text-center text-[var(--color-muted)]">
            No videos in this category yet.
          </p>
        ) : (
          <div
            key={`${domain}-${category}`}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
              >
                <VideoCard video={video} onPlay={() => openVideo(video)} />
              </motion.div>
            ))}
          </div>
        )}

        {visible < filtered.length ? (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setVisible((n) => n + PAGE_SIZE)}
            >
              Load more ({filtered.length - visible} left)
            </Button>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {activeId && playlist.length > 0 ? (
          isMobile ? (
            <ReelPlayer
              key="reel"
              videos={playlist}
              onClose={closePlayer}
            />
          ) : (
            <DesktopModal
              key="modal"
              videos={playlist}
              onClose={closePlayer}
            />
          )
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function DomainChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
        active
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-cta-fg)]"
          : "border-[var(--color-border)] bg-[var(--color-card-bg)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
      )}
    >
      {label}
    </button>
  );
}

function CategoryChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all sm:text-sm",
        active
          ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
          : "border-[var(--color-border)] bg-[var(--color-card-bg)] text-[var(--color-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
      )}
    >
      {label}
    </button>
  );
}

function VideoCard({
  video,
  onPlay,
}: {
  video: VideoItem;
  onPlay: () => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[var(--color-border)] bg-[var(--color-card-bg)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <button
        type="button"
        onClick={onPlay}
        className="relative aspect-[9/16] max-h-[280px] w-full overflow-hidden bg-[#0b1210] sm:max-h-[320px]"
        aria-label={`Play ${video.title}`}
      >
        <video
          src={`${video.url}#t=0.1`}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#063a28] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M8 5.5v13l11-6.5L8 5.5Z" />
            </svg>
          </span>
        </span>
        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {video.domainLabel}
        </span>
      </button>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          {video.categoryLabel}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-base font-semibold leading-snug text-[var(--color-fg)]">
          {video.title}
        </h3>
        <button
          type="button"
          onClick={onPlay}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]"
        >
          Watch video
          <span aria-hidden>→</span>
        </button>
      </div>
    </article>
  );
}

/** Full-screen TikTok-style reel feed for mobile */
function ReelPlayer({
  videos,
  onClose,
}: {
  videos: VideoItem[];
  onClose: () => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const playAt = useCallback(
    (i: number) => {
      videoRefs.current.forEach((el, id) => {
        const target = videos[i];
        if (target && id === target.id) {
          el.muted = muted;
          void el.play().catch(() => undefined);
        } else {
          el.pause();
          try {
            el.currentTime = 0;
          } catch {
            /* ignore */
          }
        }
      });
    },
    [videos, muted]
  );

  useEffect(() => {
    playAt(index);
  }, [index, playAt]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-reel-slide]"));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.6)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = Number(visible.target.getAttribute("data-index"));
        if (!Number.isNaN(i)) setIndex(i);
      },
      { root, threshold: [0.6, 0.75, 0.9] }
    );

    slides.forEach((slide) => io.observe(slide));
    return () => io.disconnect();
  }, [videos]);

  const current = videos[index];

  return (
    <motion.div
      className="fixed inset-0 z-[80] bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-b from-black/70 to-transparent px-3 pb-8 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md"
          aria-label="Close reels"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06 6.53 18.53a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="min-w-0 flex-1 text-center">
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {current?.categoryLabel}
          </p>
          <p className="text-xs text-white/55">
            {index + 1} / {videos.length} · swipe for next
          </p>
        </div>
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M13.5 5.5v13l-5-3.2H5v-6.6h3.5l5-3.2Zm5.1 2.1 1.4 1.4-2.1 2.1 2.1 2.1-1.4 1.4-2.1-2.1-2.1 2.1-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M13.5 5.5v13l-5-3.2H5v-6.6h3.5l5-3.2ZM16.2 8.8a4.5 4.5 0 0 1 0 6.4l-1.1-1.1a2.9 2.9 0 0 0 0-4.2l1.1-1.1Zm2.2-2.2a7.5 7.5 0 0 1 0 10.8l-1.2-1.2a5.8 5.8 0 0 0 0-8.4l1.2-1.2Z" />
            </svg>
          )}
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="h-[100dvh] snap-y snap-mandatory overflow-y-auto overscroll-contain"
        style={{ scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {videos.map((video, i) => (
          <div
            key={video.id}
            data-reel-slide
            data-index={i}
            className="relative flex h-[100dvh] w-full snap-start snap-always items-center justify-center bg-black"
          >
            <video
              ref={(el) => {
                if (el) videoRefs.current.set(video.id, el);
                else videoRefs.current.delete(video.id);
              }}
              src={video.url}
              className="h-full w-full object-contain"
              playsInline
              loop
              preload={Math.abs(i - index) <= 1 ? "auto" : "none"}
              muted={muted}
              onClick={(e) => {
                const el = e.currentTarget;
                if (el.paused) void el.play().catch(() => undefined);
                else el.pause();
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-24">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-hover)]">
                {video.categoryLabel}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-white">
                {video.title}
              </h3>
              <p className="mt-2 text-xs text-white/65">{video.domainLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/** Desktop / tablet modal with next/prev in the same filtered list */
function DesktopModal({
  videos,
  onClose,
}: {
  videos: VideoItem[];
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);
  const video = videos[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setIndex((i) => Math.min(videos.length - 1, i + 1));
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setIndex((i) => Math.max(0, i - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, videos.length]);

  useEffect(() => {
    if (ref.current) {
      void ref.current.play().catch(() => undefined);
    }
  }, [index, video?.id]);

  if (!video) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[1.5rem] bg-[var(--color-card-bg)] shadow-[var(--shadow-float)]"
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 16, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border)] px-5 py-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {video.categoryLabel}
            </p>
            <h3 className="mt-0.5 line-clamp-2 text-lg font-semibold text-[var(--color-fg)]">
              {video.title}
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              {index + 1} of {videos.length} in this filter
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)]"
            aria-label="Close video"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06 6.53 18.53a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="bg-black">
          <video
            key={video.id}
            ref={ref}
            src={video.url}
            className="mx-auto max-h-[65vh] w-full object-contain"
            controls
            playsInline
            preload="auto"
            controlsList="nodownload"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-5 py-3">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          >
            Previous
          </Button>
          <span className="text-xs text-[var(--color-muted)]">{video.domainLabel}</span>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            disabled={index >= videos.length - 1}
            onClick={() => setIndex((i) => Math.min(videos.length - 1, i + 1))}
          >
            Next
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
