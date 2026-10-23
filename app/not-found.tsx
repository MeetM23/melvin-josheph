import Link from "next/link";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-2xl px-5 py-14 text-center sm:px-8">
        <p className="text-6xl font-extrabold text-brand sm:text-8xl">404</p>
        <h1 className="mt-3 text-xl font-extrabold text-navy sm:text-3xl">Page not found</h1>
        <p className="mt-2 text-xs text-slate-600 sm:text-base">
          The page you are looking for does not exist or has moved. Try one of these instead.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand sm:px-6 sm:py-3 sm:text-sm"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
