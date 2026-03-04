"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import HeroScene from "@/components/three/HeroScene";
import MagneticButton from "@/components/ui/MagneticButton";
import { hero } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ── Layered backgrounds ────────────────────────── */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-0 noise" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-violet-600/12 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/8 blur-[140px]" />

      {/* Floating particles */}
      {!reduced && (
        <>
          <div className="pointer-events-none absolute animate-drift" style={{ top: "22%", left: "12%", "--drift-dur": "9s", "--drift-delay": "0s" } as React.CSSProperties}>
            <div className="h-1.5 w-1.5 rounded-full bg-violet-400/50" />
          </div>
          <div className="pointer-events-none absolute animate-drift" style={{ top: "55%", left: "8%", "--drift-dur": "13s", "--drift-delay": "1.5s" } as React.CSSProperties}>
            <div className="h-1 w-1 rounded-full bg-sky-400/40" />
          </div>
          <div className="pointer-events-none absolute animate-drift" style={{ top: "35%", right: "10%", "--drift-dur": "11s", "--drift-delay": "3s" } as React.CSSProperties}>
            <div className="h-2 w-2 rounded-full bg-pink-400/35" />
          </div>
          <div className="pointer-events-none absolute animate-drift" style={{ top: "70%", right: "18%", "--drift-dur": "15s", "--drift-delay": "0.8s" } as React.CSSProperties}>
            <div className="h-1 w-1 rounded-full bg-violet-300/45" />
          </div>
          <div className="pointer-events-none absolute animate-drift" style={{ top: "15%", right: "35%", "--drift-dur": "10s", "--drift-delay": "4s" } as React.CSSProperties}>
            <div className="h-1.5 w-1.5 rounded-full bg-sky-300/30" />
          </div>
        </>
      )}

      <div className="container-pad relative w-full py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ── Left column ──────────────────────────────── */}
          <div>
            {/* Status badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {hero.badge}
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up animate-fade-up-1 mt-7 text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
              Build premium
              <span className="block gradient-text">tech experiences.</span>
              <span className="block text-white/30">Move faster.</span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up animate-fade-up-2 mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              {hero.subtext}
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up animate-fade-up-3 mt-8 flex flex-wrap gap-3">
              {/* Primary — white pill with magnetic pull */}
              <MagneticButton strength={0.4}>
                <motion.div
                  whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.01 }}
                  whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                  transition={spring}
                >
                  <Link
                    href={hero.primaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                  >
                    {hero.primaryCta.label}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </motion.div>
              </MagneticButton>

              {/* Secondary — glass pill */}
              <motion.div
                whileHover={reduced ? {} : { y: MOTION.button.hoverY }}
                whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                transition={spring}
              >
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  {hero.secondaryCta.label}
                </Link>
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up animate-fade-up-4 mt-12 grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold md:text-3xl">{s.kpi}</div>
                  <div className="mt-1 text-xs text-white/50 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <div className="animate-fade-up animate-fade-up-5 mt-7 text-xs text-white/35">
              Serving SaaS, Enterprise, Healthcare &amp; Finance teams across North America
            </div>
          </div>

          {/* ── Right column ─────────────────────────────── */}
          <div className="relative animate-fade-up animate-fade-up-2">
            {/* Main 3D card */}
            <motion.div
              className="glow relative rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
              whileHover={reduced ? {} : { boxShadow: "0 30px 80px rgba(139,92,246,0.18), 0 0 0 1px rgba(255,255,255,0.1)" }}
              transition={spring}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <HeroScene />
              </div>
            </motion.div>

            {/* Floating card — top left */}
            <div className="absolute -left-6 top-8 z-10 min-w-[160px] rounded-2xl border border-white/15 bg-black/70 p-4 backdrop-blur-xl animate-float md:-left-12">
              <div className="text-xs text-white/50">Response time</div>
              <div className="mt-1 text-2xl font-bold">&lt;&nbsp;24h</div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute -right-4 bottom-10 z-10 min-w-[160px] rounded-2xl border border-white/15 bg-black/70 p-4 backdrop-blur-xl animate-float-slow md:-right-10">
              <div className="text-xs text-white/50">Security score</div>
              <div className="mt-1 text-2xl font-bold text-emerald-400">A+</div>
              <div className="mt-1 text-xs text-white/50">All best practices</div>
            </div>

            {/* Glow accents */}
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

            {/* Mini info card below scene */}
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Premium delivery, measurable outcomes</div>
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                  Active
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Clean architecture · Security-first · Smooth motion · Production-ready handoff
              </p>

              <div className="mt-4 h-px w-full hairline" />

              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-white/55">
                {[
                  ["SEO", "Structured + fast"],
                  ["Motion", "Smooth + clean"],
                  ["Security", "Best practices"],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="font-medium text-white/85">{a}</div>
                    <div className="mt-0.5">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
