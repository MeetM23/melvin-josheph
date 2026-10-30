"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import UIcon from "@/components/UIcon";

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
        Roofing & Liner<br />
        Solutions<br />
        <span className="text-brand">For a Stronger</span><br />
        Tomorrow
      </>
    ),
    description:
      "Premium Roofing & Liner Sheets Manufactured with Certified Primary Steel for Homes, Businesses, and Industries.",
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
        Roofing & Liner<br />
        Sheet Profiles<br />
        <span className="text-brand">Engineered for</span><br />
        Strength
      </>
    ),
    description:
      "High-strength roofing sheets and interior liner sheets crafted for residential, commercial and industrial builds.",
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
  intervalMs = 4500,
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

  // Reliable interval autoplay across all environments
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
      {/* Subtle Trapezoidal Roofing Profile Linework */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-50 [mask-image:linear-gradient(to_right,black_30%,transparent_80%)]" />

      {/* Content: grid stack keeps the hero height identical across slides */}
      <div className="mx-auto flex min-h-[440px] max-w-7xl items-start px-4 sm:px-8 pb-24 pt-5 sm:min-h-[520px] sm:pb-30 sm:pt-8 lg:min-h-[580px] lg:pb-32 lg:pt-12">
        <div className="w-full sm:w-1/2">
          {/* Editorial Badge */}
          <div
            className="hero-rise mb-3.5 flex items-center gap-2 sm:mb-4"
            style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
          >
            <span className="editorial-badge whitespace-nowrap text-[9px] min-[360px]:text-[10px] sm:text-[11px] tracking-[0.05em] sm:tracking-[0.12em] px-2 py-0.5 min-[360px]:px-2.5 min-[360px]:py-1 sm:px-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Palakkad Plant • 20+ Years Excellence
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:inline-block">
              Trafford Engineering
            </span>
          </div>

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
                    className="hero-rise text-[clamp(1.75rem,7.2vw,2rem)] font-extrabold uppercase leading-[1.04] tracking-[-0.028em] text-navy sm:text-5xl lg:text-[3.6rem]"
                  >
                    {slide.headline}
                  </Heading>
                  <p
                    style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
                    className="hero-rise mt-3 max-w-xs text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:max-w-md sm:text-base"
                  >
                    {slide.description}
                  </p>
                  <div
                    style={{ "--hero-delay": "0.4s" } as React.CSSProperties}
                    className="hero-rise mt-5 sm:mt-6"
                  >
                    <Link
                      href={slide.ctaHref}
                      className="group inline-flex min-h-11 items-center gap-2.5 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(10,37,64,0.18)] transition-all duration-200 ease-out hover:bg-brand hover:shadow-[0_8px_24px_rgba(22,104,232,0.32)] hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:min-h-12 sm:px-8 sm:py-3.5"
                    >
                      {slide.ctaText}
                      <UIcon name="arrow-right" size="sm" className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide indicators with numerical counter */}
          {count > 1 && (
            <div
              role="group"
              aria-label="Choose slide"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md sm:mt-5 sm:border-slate-200/60"
            >
              <div className="flex items-center gap-1 text-[11px] font-bold text-navy">
                <span>0{activeIndex + 1}</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-400">0{count}</span>
              </div>
              <div className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                {slides.map((slide, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setActiveIndex(index)}
                      className="group relative flex h-6 cursor-pointer items-center justify-center px-0.5 focus-visible:outline-2 focus-visible:outline-brand"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          isActive ? "w-6 bg-brand" : "w-2 bg-navy/20 group-hover:bg-navy/50"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
