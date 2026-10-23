"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:px-8">
        <Link href="/" className="shrink-0 transition hover:opacity-95">
          <Logo />
        </Link>

        <nav className="flex items-center gap-2.5 sm:gap-8">
          {navItems.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-[10px] font-medium transition-colors sm:text-sm ${
                  isActive ? "font-semibold text-brand" : "text-slate-700 hover:text-brand"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm transition hover:bg-brand sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
