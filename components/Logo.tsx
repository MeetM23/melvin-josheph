import Image from "next/image";

export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className={light ? "rounded-md bg-white px-1.5 py-1" : ""}>
        <Image
          src="/images/durawin-mark.webp"
          alt="Durawin logo"
          width={207}
          height={194}
          className="h-8 w-auto sm:h-11"
          priority
        />
      </span>
      <span className="leading-none">
        <span className={`block text-base font-extrabold sm:text-[1.4rem] tracking-wide ${light ? "text-white" : "text-navy"}`}>
          DURAWIN
        </span>
        <span className={`mt-1 hidden text-[7px] sm:block font-semibold uppercase tracking-[0.16em] ${light ? "text-slate-300" : "text-slate-500"}`}>
          Trafford Sheet Manufacturing
        </span>
      </span>
    </span>
  );
}
