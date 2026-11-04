import Image from "next/image";

export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center ${light ? "rounded-xl bg-white p-2 sm:p-2.5 shadow-xs" : ""} ${className}`}>
      <Image
        src="/images/durawin-logo.png"
        alt="Durawin - Integrated Roofing Solutions"
        width={953}
        height={270}
        className={
          light
            ? "h-10 w-auto sm:h-12 lg:h-[50px] object-contain"
            : "h-9 w-auto sm:h-11 lg:h-[48px] object-contain"
        }
        priority
      />
    </span>
  );
}
