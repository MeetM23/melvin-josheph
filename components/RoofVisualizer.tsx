"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface RoofColor {
  id: string;
  name: string;
  hex: string;
  accent: string;
  image: string;
}

export const ROOF_COLORS: RoofColor[] = [
  {
    id: "blue",
    name: "Royal Blue",
    hex: "#1f5fbf",
    accent: "linear-gradient(135deg, #1f5fbf, #144085)",
    image: "/images/visualizer-roof-blue.jpg",
  },
  {
    id: "red",
    name: "Terracotta Red",
    hex: "#c8342b",
    accent: "linear-gradient(135deg, #d4382e, #8c1e18)",
    image: "/images/visualizer-roof-red.jpg",
  },
  {
    id: "grey",
    name: "Charcoal Grey",
    hex: "#4b5563",
    accent: "linear-gradient(135deg, #5a6575, #2d343f)",
    image: "/images/visualizer-roof-grey.jpg",
  },
  {
    id: "green",
    name: "Forest Green",
    hex: "#2a9d8f",
    accent: "linear-gradient(135deg, #2ea899, #1b635a)",
    image: "/images/visualizer-roof-green.jpg",
  },
  {
    id: "silver",
    name: "Galvanized Silver",
    hex: "#c5ccd6",
    accent: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
    image: "/images/visualizer-roof-silver.jpg",
  },
];

export default function RoofVisualizer() {
  const [selectedColor, setSelectedColor] = useState<RoofColor>(ROOF_COLORS[0]);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5">
      {/* Visualizer Display Window */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 sm:aspect-[16/9]">
        {ROOF_COLORS.map((c) => {
          const isActive = c.id === selectedColor.id;
          return (
            <div
              key={c.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <Image
                src={c.image}
                alt={`Durawin roofing sheet installed on modern residence in ${c.name}`}
                fill
                priority={c.id === "blue"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Realistic badge overlay */}
        <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full bg-slate-950/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md shadow-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
          <span
            className="h-2.5 w-2.5 rounded-full ring-2 ring-white/30"
            style={{ backgroundColor: selectedColor.hex }}
          />
          <span className="text-slate-300">Active Finish:</span>
          <span className="font-semibold text-white">{selectedColor.name}</span>
        </div>
      </div>

      {/* Colour Selection Swatches */}
      <div className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/50 p-4 sm:p-7">
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold tracking-wide text-slate-500 uppercase sm:text-xs">
            Select Roof Colour
          </h3>
          <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
            Click a shade to preview authentic Durawin colour-coated roofing finishes in natural daylight.
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Roofing colour options"
          className="mt-4 grid grid-cols-2 gap-2.5 min-[480px]:grid-cols-3 sm:mt-5 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-3"
        >
          {ROOF_COLORS.map((c) => {
            const isSelected = c.id === selectedColor.id;
            return (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedColor(c)}
                className={`group flex items-center gap-2.5 rounded-xl border p-2 text-left transition-all duration-200 sm:px-4 sm:py-2.5 ${
                  isSelected
                    ? "border-brand bg-brand/5 shadow-sm ring-2 ring-brand/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80"
                }`}
              >
                {/* Colour Swatch */}
                <div
                  className="relative flex h-7 w-7 min-w-[28px] min-h-[28px] aspect-square shrink-0 self-center items-center justify-center rounded-full shadow-inner ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105 sm:h-8 sm:w-8 sm:min-w-[32px] sm:min-h-[32px]"
                  style={{ background: c.accent, borderRadius: "50%" }}
                >
                  {isSelected && (
                    <Check
                      className={`h-4 w-4 shrink-0 drop-shadow-sm ${
                        c.id === "silver" ? "text-slate-800" : "text-white"
                      }`}
                    />
                  )}
                </div>

                {/* Colour Label */}
                <div className="min-w-0 flex-1">
                  <div
                    className={`text-xs font-semibold sm:text-sm ${
                      isSelected ? "text-brand" : "text-navy"
                    }`}
                  >
                    {c.name}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                    {c.id}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
