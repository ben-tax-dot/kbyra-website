"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ensureGsap } from "@/lib/gsap";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsap();

    gsap.fromTo(
      ref.current,
      { y: 30, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}