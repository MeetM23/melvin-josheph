"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  imagePosition?: string;
  headline: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const defaultSlides: HeroSlide[] = [
  {
    id: "roofing-solutions",
    image: "/images/home-hero.jpg",
    alt: "Durawin High Quality Roofing Solutions",
    imagePosition: "object-[72%_50%] sm:object-[80%_25%]",
    headline: (
      <>
        Roofing<br />
        Solutions<br />
        <span className="text-brand">For a Stronger</span><br />
        Tomorrow
      </>
    ),
    description:
      "Premium Trussfold Roofing Sheets Manufactured with the Best Raw Materials for Homes, Businesses and Industries.",
    ctaText: "Explore Our Products",
    ctaHref: "/products",
  },
  {
    id: "commercial-residential",
    image: "/images/hero-slide-2.jpg",
    alt: "Durawin Commercial and Residential Roofing Solutions",
    imagePosition: "object-[60%_50%] sm:object-[80%_75%]",
    headline: (
      <>
        Commercial<br />
        & Residential<br />
        <span className="text-brand">Roofing Built to</span><br />
        Endure
      </>
    ),
    description:
      "Precision-Engineered Roofing Sheets Delivering Exceptional Strength, Weather Resistance, and Architectural Appeal.",
    ctaText: "Explore Our Products",
    ctaHref: "/products",
  },
  {
    id: "superior-protection",
    image: "/images/hero-slide-3.jpg",
    alt: "Durawin Colour Coated Roofing Sheets",
    imagePosition: "object-[55%_50%] sm:object-[68%_100%]",
    headline: (
      <>
        Superior<br />
        Protection<br />
        <span className="text-brand">Crafted for Every</span><br />
        Season
      </>
    ),
    description:
      "High-Performance Colour Coated Roofing Sheets Sourced from Top Steel Brands for Unmatched Longevity.",
    ctaText: "Explore Our Products",
    ctaHref: "/products",
  },
  {
    id: "engineered-strength",
    image: "/images/products-hero.jpg",
    alt: "Durawin High-Strength Trussfold Roofing Sheets Stack",
    imagePosition: "object-[78%_50%] sm:object-[80%_50%]",
    headline: (
      <>
        Trussfold<br />
        Roofing Sheets<br />
        <span className="text-brand">Engineered for</span><br />
        Strength
      </>
    ),
    description:
      "High-strength corrugated and colour coated roofing sheets crafted for residential, commercial and industrial builds.",
    ctaText: "Explore Our Products",
    ctaHref: "/products",
  },
];

interface HeroCarouselProps {
  slides?: HeroSlide[];
  intervalMs?: number;
}

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const subscribeVisibility = (cb: () => void) => {
  document.addEventListener("visibilitychange", cb);
  return () => document.removeEventListener("visibilitychange", cb);
};

export default function HeroCarousel({
  slides = defaultSlides,
  intervalMs = 3000,
}: HeroCarouselProps) {
  const count = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);

  // Autoplay is off for reduced-motion users and while the tab is in the background
  const reducedMotion = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
  const tabHidden = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "hidden",
    () => false,
  );
  const paused = hovering || keyboardFocus || tabHidden || reducedMotion;

  // Which slide images have finished loading, so we never fade to a blank frame
  const loaded = useRef<Set<number>>(new Set([0]));
  const skipped = useRef(0);

  // Advances every `intervalMs`; the effect re-runs on every slide change, which
  // restarts the countdown after manual navigation as well.
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % count;
        // wait (at most once) for the next image instead of fading to an empty frame
        if (!loaded.current.has(next) && skipped.current < 1) {
          skipped.current += 1;
          return current;
        }
        skipped.current = 0;
        return next;
      });
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [activeIndex, paused, intervalMs, count]);

  return (
    <section
      aria-label="Hero Carousel"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-white"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovering(true);
      }}
      onPointerLeave={() => setHovering(false)}
      onFocus={(e) => {
        if ((e.target as HTMLElement).matches(":focus-visible")) setKeyboardFocus(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setKeyboardFocus(false);
      }}
    >
      {/* Background images, 700ms crossfade. Only the first is preloaded with high priority;
          the rest are fetched eagerly at low priority so they are ready before their turn. */}
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 -z-20 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              ref={(el) => {
                if (el?.complete && el.naturalWidth > 0) loaded.current.add(index);
              }}
              onLoad={() => loaded.current.add(index)}
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              fetchPriority={index === 0 ? "high" : "low"}
              className={`object-cover ${slide.imagePosition || "object-center"}`}
            />
          </div>
        );
      })}

      {/* Overlay: phones fade from the top so the roof shows at the bottom; sm+ fades from the left */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/55 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-transparent to-transparent" />

      {/* Content: grid stack keeps the hero height identical across slides */}
      <div className="mx-auto flex min-h-[400px] max-w-7xl items-start px-5 pb-28 pt-8 sm:min-h-[460px] sm:items-center sm:px-8 sm:pb-10 sm:pt-4 lg:min-h-[520px]">
        <div className="w-full sm:w-1/2">
          <div className="grid grid-cols-1 grid-rows-1" aria-live={paused ? "polite" : "off"}>
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              // Only the first slide owns the page's <h1>; the rest are same-looking <h2>s
              const Heading = index === 0 ? "h1" : "h2";
              return (
                <div
                  key={slide.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                  inert={!isActive}
                  className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                    isActive ? "z-10 opacity-100" : "z-0 select-none opacity-0"
                  }`}
                >
                  <Heading
                    style={{ "--hero-delay": "0.05s" } as React.CSSProperties}
                    className="hero-rise text-[clamp(1.9rem,9vw,2.6rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]"
                  >
                    {slide.headline}
                  </Heading>
                  <p
                    style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
                    className="hero-rise mt-3 max-w-xs text-sm font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed"
                  >
                    {slide.description}
                  </p>
                  <div
                    style={{ "--hero-delay": "0.4s" } as React.CSSProperties}
                    className="hero-rise mt-5 sm:mt-7"
                  >
                    <Link
                      href={slide.ctaHref}
                      className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-7 sm:py-3.5"
                    >
                      {slide.ctaText}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide indicators: exactly one button per slide */}
          {count > 1 && (
            <div
              role="group"
              aria-label="Choose slide"
              className="mt-5 inline-flex items-center rounded-full bg-white/80 px-2 ring-1 ring-black/5 sm:mt-8 sm:bg-transparent sm:px-0 sm:ring-0"
            >
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => {
                      skipped.current = 0;
                      setActiveIndex(index);
                    }}
                    className="group relative flex h-9 cursor-pointer items-center justify-center px-1 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        isActive ? "w-8 bg-brand" : "w-2.5 bg-navy/35 group-hover:bg-navy/60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
