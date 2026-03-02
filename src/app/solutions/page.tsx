"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutions } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

// Per-industry accent config
const industryAccent: Record<string, { glow: string; chip: string }> = {
  "Enterprise IT":      { glow: "service-glow-web",   chip: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300" },
  "Manufacturing":      { glow: "service-glow-data",  chip: "bg-teal-500/10 border-teal-500/25 text-teal-300" },
  "Healthcare":         { glow: "service-glow-cloud",  chip: "bg-sky-500/10 border-sky-500/25 text-sky-300" },
  "Finance":            { glow: "service-glow-cyber",  chip: "bg-orange-500/10 border-orange-500/25 text-orange-300" },
  "Retail / E-commerce":{ glow: "service-glow-brand",  chip: "bg-pink-500/10 border-pink-500/25 text-pink-300" },
  "Startups":           { glow: "service-glow-ai",     chip: "bg-violet-500/10 border-violet-500/25 text-violet-300" },
};

export default function SolutionsPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[90px]" />

        <div className="container-pad relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.22em] text-white/50">SOLUTIONS</div>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {solutions.hero.title.split(" & ")[0]}{" "}
                <span className="gradient-text">& Industries</span>
              </h1>
              <p className="mt-5 max-w-2xl text-white/65 leading-relaxed md:text-lg">
                {solutions.hero.subtext}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Industry cards ───────────────────────────────────── */}
      <div className="container-pad pb-24">
        <ScrollReveal>
          <div className="text-xs tracking-[0.22em] text-white/50 mb-3">INDUSTRIES SERVED</div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Built for your sector
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl">
            We apply the same engineering rigour across industries, with solution patterns tuned to your sector's specific constraints and opportunities.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.industries.map((industry, idx) => {
            const Icon = industry.icon;
            const a = industryAccent[industry.title] ?? { glow: "service-glow-ai", chip: "bg-white/10 border-white/10 text-white/70" };
            return (
              <ScrollReveal key={industry.title} delay={idx * MOTION.reveal.stagger}>
                <motion.div
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shine-hover h-full"
                  whileHover={reduced ? {} : {
                    y:           MOTION.card.hoverY,
                    borderColor: "rgba(255,255,255,0.18)",
                    boxShadow:   "0 20px 50px rgba(0,0,0,0.3)",
                  }}
                  whileTap={reduced ? {} : { scale: 0.99 }}
                  transition={spring}
                >
                  <div className={`absolute inset-0 ${a.glow} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5">
                        <Icon className="h-5 w-5 text-white/85" />
                      </div>
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs ${a.chip}`}>
                        {industry.title}
                      </span>
                    </div>

                    <div className="mt-4 text-lg font-semibold">{industry.title}</div>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{industry.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Common capabilities ─────────────────────────────── */}
        <ScrollReveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="absolute inset-0 gradient-bg opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="text-xs tracking-[0.22em] text-white/50">CORE CAPABILITIES</div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                What we bring to every engagement
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: "Security-first design", desc: "Zero Trust, least privilege, and compliance-minded architecture from day one." },
                  { title: "Cloud-native delivery", desc: "AWS, Azure, or GCP — with IaC, CI/CD, and observability built in." },
                  { title: "AI-ready foundations", desc: "Data pipelines and APIs structured to support future ML integration." },
                  { title: "Premium UX layer", desc: "Motion systems and design quality that communicate enterprise credibility." },
                ].map((cap) => (
                  <div key={cap.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="font-semibold text-white/90">{cap.title}</div>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div
                  whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.01 }}
                  whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                  transition={spring}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                  >
                    Discuss your industry →
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={reduced ? {} : { y: MOTION.button.hoverY }}
                  whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                  transition={spring}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    View all services
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
