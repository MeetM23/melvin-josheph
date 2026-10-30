"use client";

import React, { useState, useRef, useEffect, useId } from "react";

export interface ExpandableTextProps {
  /** The text content to display. */
  text: string;
  /** Custom classes for typography, color, and line spacing. */
  className?: string;
  /** Number of lines shown when collapsed on mobile viewports (default: 3). */
  mobileLines?: 2 | 3 | 4;
  /** Number of lines shown when collapsed on desktop viewports (default: 3). */
  desktopLines?: 2 | 3 | 4 | 5;
  /** Character threshold below which text is considered short and rendered without button. Default 130. */
  minChars?: number;
  /** Label for expand action (default: "Read More"). */
  moreLabel?: string;
  /** Label for collapse action (default: "Read Less"). */
  lessLabel?: string;
  /** Optional class name for the expand/collapse button. */
  buttonClassName?: string;
  /** Optional id for accessibility aria-controls. */
  id?: string;
}

const MOBILE_CLAMP: Record<number, string> = {
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
};

const DESKTOP_CLAMP: Record<number, string> = {
  2: "sm:line-clamp-2",
  3: "sm:line-clamp-3",
  4: "sm:line-clamp-4",
  5: "sm:line-clamp-5",
};

function ExpandableTextClient({
  text,
  className = "",
  mobileLines = 3,
  desktopLines = 3,
  moreLabel = "Read More",
  lessLabel = "Read Less",
  buttonClassName = "",
  id,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);
  const autoId = useId();
  const contentId = id || `expandable-${autoId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  // Measure actual overflow after mount and on window resize
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const checkOverflow = () => {
      if (!expanded) {
        // When collapsed, check if the full content height exceeds the clamped height
        const hasOverflow = el.scrollHeight > el.clientHeight + 1;
        setCanExpand(hasOverflow);
      }
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [expanded, text, mobileLines, desktopLines]);

  const mobileClass = MOBILE_CLAMP[mobileLines] || "line-clamp-3";
  const desktopClass = DESKTOP_CLAMP[desktopLines] || "sm:line-clamp-3";

  return (
    <div className="relative">
      <p
        ref={textRef}
        id={contentId}
        className={`${className} ${
          expanded ? "line-clamp-none sm:line-clamp-none" : `${mobileClass} ${desktopClass}`
        } transition-all duration-300 ease-in-out motion-reduce:transition-none`}
      >
        {text}
      </p>

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className={`group/btn mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-brand transition-colors duration-200 hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-1 sm:text-xs cursor-pointer ${buttonClassName}`}
        >
          <span>{expanded ? lessLabel : moreLabel}</span>
          <span
            className={`inline-block text-[10px] font-bold transition-transform duration-200 motion-reduce:transform-none ${
              expanded ? "group-hover/btn:-translate-y-0.5" : "group-hover/btn:translate-y-0.5"
            }`}
            aria-hidden="true"
          >
            {expanded ? "↑" : "↓"}
          </span>
        </button>
      )}
    </div>
  );
}

export default function ExpandableText(props: ExpandableTextProps) {
  const { text, className = "", minChars = 130 } = props;

  // Short texts that don't need any clamping or buttons
  if (!text || text.length < minChars) {
    return <p className={className}>{text}</p>;
  }

  return <ExpandableTextClient {...props} />;
}

