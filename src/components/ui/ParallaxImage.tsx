"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export type ParallaxVariant = "ai" | "cyber" | "cloud" | "data" | "web" | "team";

const cfg: Record<ParallaxVariant, {
  bg: string;
  orb1: string; orb2: string;
  accent: string;
  badge: string;
  m1: string; m2: string;
  l1: string; l2: string;
  bars: number[];
  barColor: string;
}> = {
  ai: {
    bg: "from-violet-950 via-[#07071a] to-black",
    orb1: "bg-violet-500/25", orb2: "bg-indigo-500/15",
    accent: "text-violet-300",
    badge: "AI System",
    m1: "↓ 40%", m2: "99.9%", l1: "Handle time", l2: "Uptime SLA",
    bars: [45, 62, 38, 78, 55, 82, 68, 91],
    barColor: "bg-violet-500",
  },
  cyber: {
    bg: "from-orange-950 via-[#0a0800] to-black",
    orb1: "bg-orange-500/22", orb2: "bg-red-500/14",
    accent: "text-orange-300",
    badge: "Zero Trust",
    m1: "↓ 60%", m2: "A+", l1: "Attack surface", l2: "Security grade",
    bars: [72, 88, 60, 95, 78, 97, 85, 99],
    barColor: "bg-orange-500",
  },
  cloud: {
    bg: "from-sky-950 via-[#02101a] to-black",
    orb1: "bg-sky-500/24", orb2: "bg-cyan-500/14",
    accent: "text-sky-300",
    badge: "Cloud Ops",
    m1: "↓ 28%", m2: "3ms", l1: "Monthly cost", l2: "Avg latency",
    bars: [85, 72, 62, 75, 58, 68, 71, 65],
    barColor: "bg-sky-500",
  },
  data: {
    bg: "from-teal-950 via-[#020e0a] to-black",
    orb1: "bg-teal-500/24", orb2: "bg-emerald-500/14",
    accent: "text-teal-300",
    badge: "Data Pipeline",
    m1: "5M+", m2: "99.8%", l1: "Rows / day", l2: "Data quality",
    bars: [55, 72, 68, 80, 75, 85, 78, 90],
    barColor: "bg-teal-500",
  },
  web: {
    bg: "from-indigo-950 via-[#04040e] to-black",
    orb1: "bg-indigo-500/24", orb2: "bg-blue-500/14",
    accent: "text-indigo-300",
    badge: "Web Perf",
    m1: "98", m2: "<1s", l1: "PageSpeed score", l2: "Load time",
    bars: [80, 92, 88, 95, 91, 97, 94, 99],
    barColor: "bg-indigo-500",
  },
  team: {
    bg: "from-slate-900 via-[#05050a] to-black",
    orb1: "bg-violet-500/16", orb2: "bg-sky-500/10",
    accent: "text-white/75",
    badge: "KBYRA",
    m1: "100%", m2: "24h", l1: "Client satisfaction", l2: "Response SLA",
    bars: [90, 95, 88, 100, 92, 98, 95, 100],
    barColor: "bg-white",
  },
};

type Props = {
  variant?: ParallaxVariant;
  className?: string;
  /** Drop in a real image path later — placeholder shows when omitted */
  src?: string;
};

export default function ParallaxImage({ variant = "ai", className = "", src }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const c = cfg[variant];

  /* ── scroll-driven parallax ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const innerY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-40, 40]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl border border-white/10 ${className}`}
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Parallax inner — 80px taller so it can shift ±40px without gaps */}
      <motion.div
        style={{ y: innerY }}
        className={`relative h-[calc(100%+80px)] -top-[40px] bg-gradient-to-br ${c.bg}`}
      >
        {src ? (
          /* Real image — swap in later */
          <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <>
            {/* Texture layers */}
            <div className="absolute inset-0 dot-grid opacity-25" />
            <div className="absolute inset-0 noise" />

            {/* Ambient orbs */}
            <div className={`absolute -top-20 -left-20 h-56 w-56 rounded-full ${c.orb1} blur-[90px]`} />
            <div className={`absolute -bottom-20 -right-20 h-48 w-48 rounded-full ${c.orb2} blur-[80px]`} />

            {/* ── Dashboard placeholder UI ── */}
            <div className="absolute inset-0 p-6 flex flex-col gap-4">

              {/* Header bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className={`text-xs font-semibold ${c.accent}`}>{c.badge}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-white/50">Live</span>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: c.m1, l: c.l1 },
                  { v: c.m2, l: c.l2 },
                ].map(({ v, l }) => (
                  <div key={l} className="rounded-2xl border border-white/10 bg-black/40 p-3.5">
                    <div className={`text-2xl font-bold leading-none ${c.accent}`}>{v}</div>
                    <div className="mt-1 text-[11px] text-white/40">{l}</div>
                  </div>
                ))}
              </div>

              {/* Progress strip */}
              <div>
                <div className="text-[9px] tracking-[0.18em] text-white/25 mb-2">TREND / 8 WEEKS</div>
                <div className="h-px w-full hairline mb-3" />
                {/* Bar chart */}
                <div className="flex items-end gap-1.5 h-20">
                  {c.bars.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${c.barColor}`}
                      style={{ height: `${h}%`, opacity: 0.25 + (h / 100) * 0.6 }}
                    />
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom row */}
              <div>
                <div className="h-px w-full hairline mb-3" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {["Cloud", "AI", "Security"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] text-white/25 font-medium tracking-wider">KBYRA</span>
                </div>
              </div>
            </div>

            {/* Bottom vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
