"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Eases mouse-wheel / trackpad scrolling and same-page anchor jumps.
 * - Touch, keyboard and scrollbar dragging stay fully native.
 * - Disabled when the user prefers reduced motion.
 * - The animation-frame loop only runs while a scroll animation is in progress.
 * - If this never runs (JS off / error), the page scrolls natively as before.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let teardown: (() => void) | undefined;

    const start = () => {
      const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });

      // Drive Lenis from rAF only while it is animating
      let raf = 0;
      const frame = (time: number) => {
        lenis.raf(time);
        raf = lenis.isScrolling ? requestAnimationFrame(frame) : 0;
      };
      const kick = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };
      window.addEventListener("wheel", kick, { passive: true });

      // Smooth-scroll to sections when a link points at a hash on the current page
      const onClick = (e: MouseEvent) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
        if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
        const url = new URL(a.href, window.location.href);
        if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.hash.length < 2) return;
        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!target) return;

        e.preventDefault();
        e.stopPropagation(); // keep Next's router from also jumping
        // Lenis already honours scroll-margin-top on the target and scroll-padding-top on the page
        lenis.scrollTo(target, { duration: 1.1 });
        kick();
        if (url.hash !== window.location.hash) window.history.pushState(window.history.state, "", url.hash);
      };
      document.addEventListener("click", onClick, true);

      teardown = () => {
        document.removeEventListener("click", onClick, true);
        window.removeEventListener("wheel", kick);
        if (raf) cancelAnimationFrame(raf);
        lenis.destroy();
      };
    };

    const sync = () => {
      teardown?.();
      teardown = undefined;
      if (!reduce.matches) start();
    };

    sync();
    reduce.addEventListener("change", sync);
    return () => {
      reduce.removeEventListener("change", sync);
      teardown?.();
    };
  }, []);

  return null;
}
