"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// 👇 Your images — files inside web/public/hero/
const images = [
  "/images/img6.jpeg",
  "/images/img7.jpeg",
  "/images/img5.jpeg",
  "/images/img4.jpeg",
];

const SLIDE_DURATION = 5000; // ms each image stays before sliding

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
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
      className="relative h-[85vh] min-h-[520px] w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 50) prev();
        if (diff < -50) next();
        touchStartX.current = null;
      }}
      aria-roledescription="carousel"
    >
      {/* ---------- Sliding image track ---------- */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0 overflow-hidden">
            <img
              src={src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover ease-out motion-reduce:transition-none ${
                i === index
                  ? "scale-110 transition-transform duration-[6000ms]"
                  : "scale-100 transition-transform duration-1000"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay so text is readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      {/* ---------- Fixed text on top ---------- */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4 text-white">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
            The TruBooker Blog
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Travel smarter across Nigeria
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Route guides, safety tips, travel hacks and the latest TruBooker updates, all in one place.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#latest"
              className="rounded-full bg-white px-7 py-3 font-semibold text-gray-900 shadow-lg transition hover:bg-blue-50"
            >
              Read the Blog
            </Link>
            <a
              href="https://trubooker.com"
              className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Book a Trip →
            </a>
          </div>
        </div>
      </div>

      {count > 1 && (
        <>
          {/* Arrows */}
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

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}