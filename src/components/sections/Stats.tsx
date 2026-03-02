"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
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
            <div className="text-xs tracking-[0.22em] text-white/50">BY THE NUMBERS</div>
            <div className="h-px flex-1 hairline" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 p-6 text-center"
                whileHover={reduced ? {} : {
                  y:           MOTION.card.hoverY,
                  borderColor: "rgba(255,255,255,0.14)",
                  boxShadow:   "0 16px 48px rgba(0,0,0,0.25)",
                }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                transition={spring}
              >
                {/* Per-stat glow */}
                <div className={`absolute inset-0 ${s.glow} opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none`} />

                <div className="relative">
                  {/* Number */}
                  <div className="text-5xl font-bold tracking-tight gradient-text-static md:text-6xl lg:text-7xl">
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
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
