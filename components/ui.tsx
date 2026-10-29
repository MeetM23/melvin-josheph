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
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "navy" | "light" | "outline";
  className?: string;
}) {
  const styles = {
    gold: "bg-gold text-navy-dark hover:bg-white hover:text-navy shadow-sm hover:shadow-md",
    navy: "bg-navy text-white hover:bg-brand shadow-sm hover:shadow-md",
    light: "bg-white text-navy hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:border-slate-300",
    outline: "border border-slate-300 bg-transparent text-navy hover:bg-slate-50 hover:border-navy",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
      {sub && (
        <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {sub}
        </p>
      )}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:py-24">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {sub}
        </p>
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
