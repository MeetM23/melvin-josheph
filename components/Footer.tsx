import Link from "next/link";
import { ArrowRight, FileText, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { policies, site } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services & Installation" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-navy-dark text-slate-300"
      style={{ backgroundColor: "#040e1b" }}
    >
      {/* Engineered Brand Accent Line (Marquee-to-Footer transition) */}
      <div className="relative w-full overflow-hidden">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand via-gold/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 -top-1 h-3 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(242,176,30,0.18),transparent)]" />
      </div>

      {/* Subtle industrial background texture & blueprint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-blueprint-grid-dark" />
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-roof-profile-dark" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(22,104,232,0.08),transparent)]" />

      {/* Main Footer Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-[1.5fr_0.9fr_1.3fr] lg:gap-x-12">
          {/* 1. Brand Section */}
          <div data-reveal className="flex flex-col items-start">
            <Link href="/" className="inline-block transition-opacity hover:opacity-95">
              <Logo tone="light" />
            </Link>

            {/* Establishment & Location Metadata Pill */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-slate-300">
              <span className="font-semibold text-gold">EST. 2004</span>
              <span className="text-white/20">•</span>
              <span>PALAKKAD MANUFACTURING UNIT</span>
            </div>

            {/* Brand Description */}
            <p className="mt-3.5 max-w-md text-xs leading-relaxed text-slate-400 sm:text-sm">
              Leading manufacturer of premium trussfold roofing sheets in Palakkad, Kerala. Engineered with primary steel coils for maximum durability, structural rigidity, and weather resilience.
            </p>

            {/* Request Quotation CTA */}
            <div className="mt-5 sm:mt-6">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-brand/40 bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(22,104,232,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1258c7] hover:border-brand-light/60 hover:shadow-[0_6px_22px_rgba(22,104,232,0.45)]"
              >
                <span>Request Quotation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 2. Navigation Section */}
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <div className="mt-2 h-0.5 w-6 rounded bg-gold" />
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 text-brand-light transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Factory Desk Section */}
          <div data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Factory Desk
            </h3>
            <div className="mt-2 h-0.5 w-6 rounded bg-gold" />
            <ul className="mt-4 space-y-4 text-sm">
              {/* Phone / WhatsApp */}
              <li className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-gold">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={`tel:+91${site.phone}`}
                  className="group flex-1 pt-0.5 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="block text-sm font-bold text-white transition-colors group-hover:text-gold">
                    {site.contact}: +91 {site.phone}
                  </span>
                  <span className="text-xs text-slate-400">
                    Direct Calls & WhatsApp Inquiries
                  </span>
                </a>
              </li>

              {/* Plant Address */}
              <li className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-gold">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="flex-1 pt-0.5">
                  <span className="block text-sm font-bold text-white">
                    Naripotta Plant
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">
                    {site.address.join(", ")}
                  </span>
                </div>
              </li>

              {/* GSTIN / Tax Identifier */}
              <li className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-gold">
                  <FileText className="h-4 w-4" />
                </span>
                <div className="flex-1 pt-0.5">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    GSTIN / TAX IDENTIFIER
                  </span>
                  <span className="mt-0.5 block font-mono text-xs font-bold text-white">
                    {site.gstin}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div
          data-reveal="fade"
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row"
        >
          {/* Legal Links on Left */}
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs">
            {policies.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Copyright Information on Right */}
          <p className="font-mono text-center text-xs text-slate-400 sm:text-right">
            &copy; 2026 Durawin Trafford Sheet Manufacturing &bull; Melvin Joseph
          </p>
        </div>
      </div>
    </footer>
  );
}

