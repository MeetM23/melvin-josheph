"use client";

import { useEffect, useState, useRef } from "react";
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

export default function HeroCarousel({
  slides = defaultSlides,
  intervalMs = 3000,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reliable autoplay timer: advances every 3000ms, resets on slide click
  useEffect(() => {
    if (isPaused || slides.length <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, intervalMs, slides.length]);

  const handleSelectSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      aria-label="Hero Carousel"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background Images with smooth 700ms crossfade - all preloaded to eliminate flicker */}
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
              priority
              className={`object-cover ${slide.imagePosition || "object-center"}`}
            />
          </div>
        );
      })}

      {/* Preserve existing overlay treatment */}
      {/* phones: fade from the top so the roof shows at the bottom; sm+: fade from the left */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/55 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-transparent to-transparent" />

      {/* Hero content container: preserves exact dimensions and vertical padding */}
      <div className="mx-auto flex min-h-[400px] max-w-7xl items-start px-5 pb-28 pt-8 sm:min-h-[460px] sm:items-center sm:px-8 sm:pb-10 sm:pt-4 lg:min-h-[520px]">
        <div className="w-full sm:w-1/2">
          {/* CSS Grid stack keeps height perfectly stable across transitions */}
          <div className="grid grid-cols-1 grid-rows-1">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={slide.id}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                    isActive
                      ? "pointer-events-auto z-10 opacity-100"
                      : "pointer-events-none z-0 select-none opacity-0"
                  }`}
                >
                  <h1 className="text-[clamp(1.9rem,9vw,2.6rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
                    {slide.headline}
                  </h1>
                  <p className="mt-3 max-w-xs text-sm font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="mt-5 sm:mt-7">
                    <Link
                      href={slide.ctaHref}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand sm:px-7 sm:py-3.5"
                    >
                      {slide.ctaText} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel indicators: exactly 4 subtle, accessible pill buttons */}
          {slides.length > 1 && (
            <div
              role="tablist"
              aria-label="Carousel slide selectors"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="mt-6 flex items-center gap-2 sm:mt-8"
            >
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => handleSelectSlide(index)}
                    className="group relative flex h-7 cursor-pointer items-center justify-center px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-brand"
                          : "w-2.5 bg-navy/25 group-hover:bg-navy/50"
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
