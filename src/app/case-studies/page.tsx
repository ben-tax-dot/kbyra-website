"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { caseStudies } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function CaseStudiesPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute -left-16 top-1/3 h-80 w-80 rounded-full bg-violet-600/12 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-500/10 blur-[90px]" />

        <div className="container-pad relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.22em] text-white/50">CASE STUDIES</div>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Proof through{" "}
                <span className="gradient-text">outcomes.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-white/65 leading-relaxed md:text-lg">
                Real work: AI copilots, Zero Trust, cloud optimization, and premium product experiences.
                Every engagement results in measurable, documented outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm">
              {[
                { n: "3+", label: "Case studies" },
                { n: "100%", label: "On-time delivery" },
                { n: "24h", label: "Response SLA" },
              ].map(({ n, label }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-2xl font-bold gradient-text-static">{n}</div>
                  <div className="mt-1 text-xs text-white/50">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Case study cards ─────────────────────────────────── */}
      <div className="container-pad pb-24 space-y-6">
        {caseStudies.map((c, idx) => (
          <ScrollReveal key={c.title} delay={idx * MOTION.reveal.stagger}>
            <motion.article
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shine-hover"
              whileHover={reduced ? {} : {
                y:           MOTION.card.hoverY,
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow:   "0 24px 60px rgba(0,0,0,0.4)",
              }}
              whileTap={reduced ? {} : { scale: 0.99 }}
              transition={spring}
            >
              {/* Accent glow */}
              <div className={`absolute inset-0 ${c.accentClass} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

              <div className="relative grid gap-0 lg:grid-cols-12">
                {/* Left: big metric + title */}
                <div className="lg:col-span-4 p-8 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 self-start mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    {c.industry}
                  </div>

                  <div className="text-7xl font-bold tracking-tight gradient-text-static md:text-8xl leading-none">
                    <CountUp to={c.metricValue} prefix="↓" suffix="%" duration={2.8} />
                  </div>
                  <div className="mt-2 text-sm text-white/55 font-medium">{c.metricLabel}</div>

                  <div className="mt-6 text-xl font-semibold leading-snug">{c.title}</div>
                </div>

                {/* Right: problem, solution, results */}
                <div className="lg:col-span-8 p-8 flex flex-col justify-center">
                  <div className="space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <div className="text-xs tracking-[0.2em] text-white/40 mb-2">PROBLEM</div>
                      <p className="text-sm text-white/70 leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <div className="text-xs tracking-[0.2em] text-white/40 mb-2">SOLUTION</div>
                      <p className="text-sm text-white/70 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full hairline" />

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.results.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
