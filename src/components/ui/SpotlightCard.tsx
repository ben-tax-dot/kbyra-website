"use client";

/**
 * SpotlightCard — adds a radial spotlight that follows the mouse cursor.
 * Wrap any card with this for a premium interactive hover effect.
 * The spotlight is rendered via CSS ::after with custom properties.
 */

import type { ReactNode } from "react";
import { useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
