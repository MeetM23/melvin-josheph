import Link from "next/link";
import { ArrowRight, FileText, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { policies, site, socials as socialLinks } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const products = [
  { label: "Trussfold Roofing Sheets", href: "/products#trussfold" },
  { label: "Colour Coated Sheets", href: "/products#colour-coated" },
  { label: "Galvanized Roofing Sheets", href: "/products#galvanized" },
  { label: "Customized Solutions", href: "/products#custom" },
];

const socialIcons = [
  { name: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" },
  { name: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  { name: "YouTube", d: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02l.01-6.54 5.67 3.27-5.68 3.27z" },
];

const heading = "text-[11px] font-bold uppercase tracking-wider text-white sm:text-sm";

// Only show social icons that have a real URL configured in lib/site.ts
const followLinks = socialIcons
  .map((s) => ({ ...s, url: socialLinks.find((x) => x.name === s.name)?.url ?? "" }))
  .filter((s) => s.url);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark text-slate-300">
      <div className="h-1 bg-gradient-to-r from-brand via-gold to-brand" />

      <div className="mx-auto max-w-7xl px-5 pb-5 pt-8 sm:px-8 sm:pb-6 sm:pt-14">
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-y-10 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-x-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block transition hover:opacity-90">
              <Logo tone="light" />
            </Link>
            <p className="mt-3 max-w-sm text-[11px] leading-relaxed text-slate-400 sm:mt-5 sm:text-sm">
              Leading manufacturer of premium trussfold roofing sheets based in Palakkad, Kerala. Engineered for maximum durability, strength and weather resistance.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-[11px] font-semibold text-white shadow-md transition hover:bg-white hover:text-navy sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
            >
              Get a Quote <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={heading}>Quick Links</h4>
            <div className="mt-2 h-0.5 w-8 rounded bg-gold" />
            <ul className="mt-3 space-y-2 text-[11px] sm:mt-5 sm:space-y-3 sm:text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1.5 text-slate-400 transition hover:translate-x-1 hover:text-white">
                    <ArrowRight className="h-3 w-3 text-brand" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className={heading}>Our Products</h4>
            <div className="mt-2 h-0.5 w-8 rounded bg-gold" />
            <ul className="mt-3 space-y-2 text-[11px] sm:mt-5 sm:space-y-3 sm:text-sm">
              {products.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="inline-flex items-center gap-1.5 text-slate-400 transition hover:translate-x-1 hover:text-white">
                    <ArrowRight className="h-3 w-3 shrink-0 text-brand" /> {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className={heading}>Contact Us</h4>
            <div className="mt-2 h-0.5 w-8 rounded bg-gold" />
            <ul className="mt-3 space-y-3 text-[11px] sm:mt-5 sm:space-y-4 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold sm:h-9 sm:w-9">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <a href={`tel:+91${site.phone}`} className="pt-1 text-slate-300 transition hover:text-white sm:pt-1.5">
                  {site.contact}: +91 {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold sm:h-9 sm:w-9">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="pt-0.5 leading-snug text-slate-300 sm:pt-1">{site.address.join(", ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold sm:h-9 sm:w-9">
                  <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="pt-1 text-slate-300 sm:pt-1.5">GSTIN: {site.gstin}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-12 sm:flex-row sm:pt-6">
          {followLinks.length > 0 ? (
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">Follow Us</span>
              <div className="flex gap-2">
                {followLinks.map(({ name, d, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:bg-brand hover:text-white sm:h-9 sm:w-9"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <nav aria-label="Legal" className="flex items-center gap-4 text-[10px] font-medium sm:text-xs">
              {policies.map((l) => (
                <Link key={l.href} href={l.href} className="text-slate-300 transition hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          )}
          <div className="flex flex-col items-center gap-1.5 sm:items-end">
            {followLinks.length > 0 && (
              <nav aria-label="Legal" className="flex items-center gap-4 text-[10px] font-medium sm:text-xs">
                {policies.map((l) => (
                  <Link key={l.href} href={l.href} className="text-slate-300 transition hover:text-white">
                    {l.label}
                  </Link>
                ))}
              </nav>
            )}
            <p className="text-[10px] text-slate-400 sm:text-xs">© 2026 Durawin Trafford Sheet Manufacturing. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
