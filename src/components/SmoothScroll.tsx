"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ensureGsap } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Register GSAP plugins once
    ensureGsap();

    let lenis: any;
    let gsapRaf: ((time: number) => void) | null = null;

    (async () => {
      const mod: any = await import("@studio-freight/lenis");
      const LenisCtor = mod.default ?? mod.Lenis ?? mod;

      lenis = new LenisCtor({
        duration:    1.0,
        smoothWheel: true,
        syncTouch:   false,
      });

      // ── Critical: keep GSAP ScrollTrigger in sync with Lenis ──
      lenis.on("scroll", ScrollTrigger.update);

      // ── Drive Lenis from GSAP's own ticker (single RAF loop) ──
      gsapRaf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(gsapRaf);
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      if (gsapRaf) gsap.ticker.remove(gsapRaf);
      try { lenis?.destroy?.(); } catch {}
    };
  }, []);

  return <>{children}</>;
}
