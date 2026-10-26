"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Premium Scroll-Triggered Reveals
 *
 * Elements opt in with the `data-reveal` attribute:
 * - `data-reveal` (default subtle upward fade)
 * - `data-reveal="fade"` (pure opacity fade for paragraphs)
 * - `data-reveal="scale"` (subtle scale reveal for photography / cards)
 * - `data-reveal="left"` / `data-reveal="right"` (directional entry)
 * - `--reveal-delay` (custom stagger delay, e.g. "90ms")
 *
 * Fail-safe & Hydration-Clean architecture:
 * 1. All elements are 100% visible by default in HTML/SSR.
 * 2. If prefers-reduced-motion is active, reveals are completely bypassed.
 * 3. Initializes after React hydration completes to eliminate any hydration warnings.
 * 4. Elements below the fold reveal seamlessly as the user scrolls.
 * 5. Once revealed, helper attributes are cleaned up so hover states and
 *    stacking contexts are 100% natural and unconstrained.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let io: IntersectionObserver | null = null;
    const timers: number[] = [];

    // Delay initialization until React hydration is 100% complete
    const initTimer = window.setTimeout(() => {
      const all = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      if (all.length === 0) return;

      let remaining = 0;
      const release = (el: HTMLElement, after = 0) => {
        const id = window.setTimeout(() => {
          el.removeAttribute("data-reveal");
          el.removeAttribute("data-in");
          remaining--;
          if (remaining <= 0) {
            document.documentElement.removeAttribute("data-reveal-ready");
          }
        }, after);
        timers.push(id);
      };

      const fold = window.innerHeight * 0.92;
      const pending: HTMLElement[] = [];

      for (const el of all) {
        // Elements already in the top viewport fold on load reveal cleanly
        if (el.getBoundingClientRect().top < fold) {
          el.removeAttribute("data-reveal");
        } else {
          pending.push(el);
        }
      }

      if (pending.length === 0) return;

      remaining = pending.length;
      document.documentElement.setAttribute("data-reveal-ready", "");

      const isMobile = window.innerWidth < 640;
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            io?.unobserve(el);
            el.setAttribute("data-in", "");
            const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
            release(el, delay + 750);
          }
        },
        {
          rootMargin: isMobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
          threshold: 0.05,
        },
      );

      pending.forEach((el) => io?.observe(el));
    }, 80);

    return () => {
      window.clearTimeout(initTimer);
      if (io) io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      document.documentElement.removeAttribute("data-reveal-ready");
    };
  }, [pathname]);

  return null;
}
