import Link from "next/link";

export function SheetStack({ colors, className = "" }: { colors: string[]; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {colors.map((c, i) => (
        <div
          key={i}
          className="sheet absolute h-1/2 w-4/5 rounded-sm"
          style={{ ["--sheet" as string]: c, top: `${i * 18}%`, left: `${i * 8}%` }}
        />
      ))}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "navy" | "light";
}) {
  const styles = {
    gold: "bg-gold text-navy-dark hover:bg-white",
    navy: "bg-navy text-white hover:bg-brand",
    light: "bg-white text-navy hover:bg-gold",
  }[variant];
  return (
    <Link href={href} className={`inline-block rounded px-5 py-2.5 text-sm font-semibold transition ${styles}`}>
      {children}
    </Link>
  );
}

export function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">{children}</h2>
      <div className="mx-auto mt-2 h-1 w-14 rounded bg-gold" />
      {sub && <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="hero-bg text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">{sub}</p>
      </div>
    </section>
  );
}

export function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
