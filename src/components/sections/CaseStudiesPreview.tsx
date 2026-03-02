"use client";

import Link from "next/link";
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

export default function CaseStudiesPreview() {
  const reduced = useReducedMotion();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-bg opacity-25" />

      <div className="container-pad relative">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs tracking-[0.22em] text-white/50">CASE STUDIES</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Outcomes you can{" "}
                <span className="gradient-text-static">measure.</span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Real results from real clients — speed, reliability, security, and bottom-line impact.
              </p>
            </div>
            <motion.div
              whileHover={reduced ? {} : { y: -2 }}
              whileTap={reduced  ? {} : { scale: MOTION.button.pressScale }}
              transition={spring}
            >
              <Link
                href="/case-studies"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
              >
                View all case studies →
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {caseStudies.map((c, idx) => (
            <ScrollReveal key={c.title} delay={idx * MOTION.reveal.stagger}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shine-hover"
                whileHover={
                  reduced ? {} : {
                    y:           MOTION.card.hoverY,
                    borderColor: "rgba(255,255,255,0.18)",
                    boxShadow:   "0 24px 60px rgba(0,0,0,0.35)",
                  }
                }
                whileTap={reduced ? {} : { scale: 0.99 }}
                transition={spring}
              >
                {/* Accent glow */}
                <div className={`absolute inset-0 ${c.accentClass} opacity-50 transition-opacity group-hover:opacity-80 pointer-events-none`} />

                <div className="relative p-6">
                  {/* Industry badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    {c.industry}
                  </div>

                  {/* BIG metric */}
                  <div className="mt-5">
                    <div className="text-5xl font-bold tracking-tight gradient-text-static md:text-6xl">
                      <CountUp to={c.metricValue} prefix="↓" suffix="%" duration={2.5} />
                    </div>
                    <div className="mt-1 text-sm text-white/55">{c.metricLabel}</div>
                  </div>

                  {/* Title */}
                  <div className="mt-5 text-lg font-semibold">{c.title}</div>

                  {/* Problem + Solution */}
                  <div className="mt-3 space-y-2 text-sm text-white/65 leading-relaxed">
                    <p>
                      <span className="font-medium text-white/80">Problem:</span>{" "}
                      {c.problem}
                    </p>
                    <p>
                      <span className="font-medium text-white/80">Solution:</span>{" "}
                      {c.solution}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mt-5 h-px w-full hairline" />

                  {/* Result chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.results.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-white/10 bg-black/25 px-3 py-0.5 text-xs text-white/65"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/case-studies"
                    className="mt-5 inline-flex items-center gap-1 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    Read full case study <span className="text-base">→</span>
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
