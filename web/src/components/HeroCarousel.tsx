"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// 👇 Your images — files inside web/public/images/
const images = [
  "/images/img4.jpeg",
  "/images/img5.jpeg",
  "/images/img6.jpeg",
  "/images/img7.jpeg",
];

const SLIDE_DURATION = 5000; // ms each image stays before sliding
const SWIPE_THRESHOLD = 40; // px a finger must travel sideways to count as a swipe

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const count = images.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Auto-slide
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [index, paused, count, next]);

  return (
    <section
      className="relative h-[78svh] min-h-[460px] w-full touch-pan-y select-none overflow-hidden bg-gray-900 md:h-[85vh] md:min-h-[560px]"
      // Pause on hover only for a real mouse. Phones fire mouseenter on tap but
      // never mouseleave, which used to freeze the slider after one tap.
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
      onTouchStart={(e) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        setPaused(false);
        if (!start) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        // Only treat it as a swipe if the finger moved mostly sideways,
        // so scrolling the page up/down doesn't change slides.
        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
        if (dx > 0) prev();
        else next();
      }}
      onTouchCancel={() => {
        touchStart.current = null;
        setPaused(false);
      }}
      aria-roledescription="carousel"
      aria-label="TruBooker travel highlights"
    >
      {/* ---------- Sliding image track ---------- */}
      <div
        className="flex h-full will-change-transform transition-transform duration-700 ease-in-out motion-reduce:transition-none md:duration-1000"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative h-full w-full shrink-0 overflow-hidden"
            aria-hidden={i !== index}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover object-center ease-out motion-reduce:transition-none ${
                i === index
                  ? "scale-110 transition-transform duration-[6000ms]"
                  : "scale-100 transition-transform duration-1000"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay so text is readable (heavier at the bottom on phones, where the text sits) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 md:from-black/80 md:via-black/40" />

      {/* ---------- Fixed text on top ---------- */}
      {/* Phones: text sits near the bottom above the dots. Tablet/desktop: vertically centred. */}
      <div className="absolute inset-0 z-10 flex items-end pb-20 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-6xl px-5 text-white sm:px-6 lg:px-4">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur sm:px-4 sm:text-sm">
            The TruBooker Blog
          </span>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-extrabold leading-[1.15] sm:mt-6 sm:text-5xl md:text-6xl md:leading-tight">
            Travel smarter across Nigeria
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-200 sm:mt-6 sm:text-lg">
            Route guides, safety tips, travel hacks and the latest TruBooker updates, all in one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="#latest"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-blue-50 sm:px-7 sm:text-base"
            >
              Read the Blog
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.trubooker.trubooker&hl=en"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-7 sm:text-base"
            >
              Book a Trip →
            </a>
          </div>
        </div>
      </div>

      {count > 1 && (
        <>
          {/* Arrows (tablet/desktop only — phones swipe) */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/30 md:block"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/30 md:block"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots — the visible pill stays small, but the button around it is a bigger tap target */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-1 md:bottom-8">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className="group p-2"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-white" : "w-2 bg-white/50 group-hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}