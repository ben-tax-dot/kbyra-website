"use client";

/**
 * Thin gradient progress bar fixed to the very top of the page.
 * Fills left → right as the user scrolls.
 */

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop   = window.scrollY;
      const docHeight   = document.documentElement.scrollHeight - window.innerHeight;
      const pct         = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9997] h-[2px] w-full"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-violet-500 via-sky-400 to-violet-500"
        style={{
          width:     `${progress}%`,
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
}
