"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-triggered reveals. Elements opt in with the `data-reveal` attribute
 * (and optionally `--reveal-delay` for staggering); the CSS lives in globals.css.
 *
 * Fail-safe: nothing is hidden until this script has run, anything already on
 * screen is never hidden, and users who prefer reduced motion get no effect at all.
 * One shared IntersectionObserver; each element is revealed once and then released.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const all = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (all.length === 0) return;

    const timers: number[] = [];
    let remaining = 0;
    const release = (el: HTMLElement, after = 0) => {
      const id = window.setTimeout(() => {
        el.removeAttribute("data-reveal");
        el.removeAttribute("data-in");
        // everything has been revealed: drop the page-level marker too
        if (--remaining === 0) document.documentElement.removeAttribute("data-reveal");
      }, after);
      timers.push(id);
    };

    const fold = window.innerHeight * 0.92;
    const pending: HTMLElement[] = [];
    for (const el of all) {
      // already visible on load: leave untouched, no hide/show flash
      if (el.getBoundingClientRect().top < fold) el.removeAttribute("data-reveal");
      else pending.push(el);
    }
    if (pending.length === 0) return;

    remaining = pending.length;
    document.documentElement.setAttribute("data-reveal", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.setAttribute("data-in", "");
          const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
          release(el, delay + 900); // drop the helper styles once the transition is done
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    pending.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      document.documentElement.removeAttribute("data-reveal");
    };
  }, [pathname]);

  return null;
}
