"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import ScrambleText from "@/components/ui/ScrambleText";
import { MOTION } from "@/lib/motion";

const stats = [
  {
    prefix: "",
    value: 50,
    suffix: "+",
    decimals: 0,
    label: "Projects shipped",
    sub: "AI, cloud, web & security",
    glow: "service-glow-ai",
  },
  {
    prefix: "",
    value: 10,
    suffix: "x",
    decimals: 0,
    label: "Faster to market",
    sub: "vs. traditional agencies",
    glow: "service-glow-cloud",
  },
  {
    prefix: "",
    value: 99,
    suffix: "%",
    decimals: 0,
    label: "Uptime target",
    sub: "production-grade reliability",
    glow: "service-glow-cyber",
  },
  {
    prefix: "",
    value: 100,
    suffix: "%",
    decimals: 0,
    label: "Client satisfaction",
    sub: "measured every engagement",
    glow: "service-glow-data",
  },
];

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function Stats() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/10 py-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="container-pad relative">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="text-xs text-white/50"><ScrambleText text="BY THE NUMBERS" delay={0.15} /></div>
            <div className="h-px flex-1 hairline" />
          </div>
        </ScrollReveal>

        {/* Bento grid: first stat is tall, last is wide */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {stats.map((s, i) => (
            <ScrollReveal
              key={s.label}
              delay={i * 0.1}
              className={
                i === 0 ? "lg:row-span-2" :
                i === 3 ? "col-span-2 lg:col-span-2" : ""
              }
            >
              <motion.div
                className={`group spotlight-card relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/3 ${
                  i === 3
                    ? "flex flex-col sm:flex-row sm:items-center sm:gap-10 p-7 sm:text-left"
                    : "p-6 text-center"
                } ${i === 0 ? "flex flex-col items-center justify-center py-10" : ""}`}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const r = el.getBoundingClientRect();
                  el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
                  el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
                }}
                whileHover={reduced ? {} : {
                  y:           MOTION.card.hoverY,
                  borderColor: "rgba(255,255,255,0.14)",
                  boxShadow:   "0 16px 48px rgba(0,0,0,0.25)",
                }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                transition={spring}
              >
                {/* Per-stat glow */}
                <div className={`absolute inset-0 ${s.glow} opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none`} />

                <div className="relative">
                  {/* Number */}
                  <div className={`font-bold tracking-tight gradient-text-static ${
                    i === 0 ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"
                  }`}>
                    <CountUp
                      to={s.value}
                      suffix={s.suffix}
                      prefix={s.prefix}
                      decimals={s.decimals}
                      duration={2.2}
                    />
                  </div>

                  {/* Label */}
                  <div className="mt-3 text-sm font-semibold text-white/90 md:text-base">
                    {s.label}
                  </div>

                  {/* Sub */}
                  <div className="mt-1 text-xs text-white/45">{s.sub}</div>
                </div>

                {/* Wide card extras (last stat) */}
                {i === 3 && (
                  <div className="relative mt-4 sm:mt-0 sm:ml-auto flex items-center gap-2 shrink-0">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">Measured every project</span>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
