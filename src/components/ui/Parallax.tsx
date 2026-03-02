"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ensureGsap } from "@/lib/gsap";

export default function Parallax({
  children,
  strength = 22,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: -strength,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}