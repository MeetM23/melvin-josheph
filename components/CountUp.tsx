"use client";

import { useEffect, useRef } from "react";

/**
 * Counts from 0 to `to` once, the first time it scrolls into view.
 * The real value is rendered on the server (and for screen readers, no-JS and
 * reduced-motion users). A hidden copy reserves the final width so nothing shifts.
 */
export default function CountUp({
  to,
  suffix = "",
  duration = 1100,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const live = useRef<HTMLSpanElement>(null);
  const final = `${to}${suffix}`;

  useEffect(() => {
    const el = live.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen at load: show the real value (avoids a visible 0 flash)
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    let raf = 0;
    el.textContent = `0${suffix}`;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out
          el.textContent = `${Math.round(to * eased)}${suffix}`;
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = final;
    };
  }, [to, suffix, duration, final]);

  return (
    <span className="relative inline-block tabular-nums">
      <span className="sr-only">{final}</span>
      <span aria-hidden="true" className="invisible">{final}</span>
      <span ref={live} aria-hidden="true" className="absolute inset-0 text-center">{final}</span>
    </span>
  );
}
