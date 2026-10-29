"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UIcon from "@/components/UIcon";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/90 bg-white/95 shadow-[0_4px_20px_-4px_rgba(10,37,64,0.07)] backdrop-blur-md"
          : "border-b border-slate-100/80 bg-white/90 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-14 sm:h-16 lg:h-[72px] max-w-7xl items-center justify-between gap-2 px-4 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="min-w-0 shrink-0 rounded transition hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center md:flex md:gap-2 lg:gap-3">
          {navItems.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3.5 py-1.5 text-sm font-medium tracking-tight transition-all duration-200 ${
                  isActive
                    ? "rounded-full bg-slate-100 text-navy font-semibold shadow-xs"
                    : "text-slate-600 hover:text-navy hover:bg-slate-50 rounded-full"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="ml-2 pl-2 border-l border-slate-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-brand active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </Link>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={buttonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-navy transition-all duration-150 hover:bg-slate-50 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
        >
          {open ? <UIcon name="close" size="base" /> : <UIcon name="menu" size="base" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          id="mobile-menu"
          data-lenis-prevent
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-5 pt-2 shadow-xl md:hidden"
        >
          <ul className="divide-y divide-slate-100">
            {navItems.map((n) => {
              const isActive = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-12 items-center text-base font-medium focus-visible:outline-2 focus-visible:outline-brand ${
                      isActive ? "font-semibold text-brand" : "text-slate-700"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-12 items-center justify-center rounded-lg bg-navy text-base font-semibold text-white transition hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
