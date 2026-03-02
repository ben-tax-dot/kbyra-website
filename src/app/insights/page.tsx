"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { insights } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

const tagConfig: Record<string, { chip: string; glow: string; dot: string }> = {
  "AI":       { chip: "bg-violet-500/10 border-violet-500/25 text-violet-300",  glow: "service-glow-ai",    dot: "bg-violet-400" },
  "Security": { chip: "bg-orange-500/10 border-orange-500/25 text-orange-300",  glow: "service-glow-cyber", dot: "bg-orange-400" },
  "Cloud":    { chip: "bg-sky-500/10 border-sky-500/25 text-sky-300",           glow: "service-glow-cloud", dot: "bg-sky-400" },
  "Data":     { chip: "bg-teal-500/10 border-teal-500/25 text-teal-300",        glow: "service-glow-data",  dot: "bg-teal-400" },
  "Web":      { chip: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",  glow: "service-glow-web",   dot: "bg-indigo-400" },
};

export default function InsightsPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-violet-600/12 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-sky-500/8 blur-[90px]" />

        <div className="container-pad relative">
          <div className="grid gap-12 lg:grid-cols-[1fr,400px] items-center">
            <div>
              <ScrollReveal>
                <div>
                  <div className="text-xs tracking-[0.22em] text-white/50">INSIGHTS</div>
                  <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    <span className="gradient-text">{insights.hero.title}</span>
                  </h1>
                  <p className="mt-5 text-white/65 leading-relaxed md:text-lg">
                    {insights.hero.subtext}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["All", "AI", "Security", "Cloud", "Data", "Web"].map((tag) => {
                    const t = tag !== "All" ? tagConfig[tag] : null;
                    return (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs cursor-default ${t ? t.chip : "border-white/15 bg-white/5 text-white/70"}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>

            {/* Parallax image */}
            <div className="hidden lg:block">
              <ParallaxImage variant="web" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Post cards ───────────────────────────────────────── */}
      <div className="container-pad pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {insights.posts.map((p, idx) => {
            const t = tagConfig[p.tag] ?? { chip: "bg-white/10 border-white/10 text-white/70", glow: "service-glow-ai", dot: "bg-white/40" };
            return (
              <ScrollReveal key={p.title} delay={idx * MOTION.reveal.stagger}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shine-hover"
                  whileHover={reduced ? {} : {
                    y:           MOTION.card.hoverY,
                    borderColor: "rgba(255,255,255,0.18)",
                    boxShadow:   "0 20px 50px rgba(0,0,0,0.3)",
                  }}
                  whileTap={reduced ? {} : { scale: 0.99 }}
                  transition={spring}
                >
                  <div className={`absolute inset-0 ${t.glow} opacity-30 group-hover:opacity-55 transition-opacity pointer-events-none`} />

                  <div className="relative p-7 flex flex-col h-full">
                    {/* Tag + read time */}
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs ${t.chip}`}>
                        {p.tag}
                      </span>
                      <span className="text-xs text-white/40">{p.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h2>

                    {/* Date */}
                    <div className="mt-2 text-xs text-white/40">
                      {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>

                    {/* Excerpt */}
                    <p className="mt-4 text-sm text-white/65 leading-relaxed flex-1">{p.excerpt}</p>

                    {/* Divider + CTA */}
                    <div className="mt-6 h-px w-full hairline" />
                    <div className="mt-4 flex items-center gap-1.5 text-sm text-white/60 group-hover:text-white/90 transition-colors">
                      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                      Read article →
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Newsletter / subscribe nudge ─────────────────────── */}
        <ScrollReveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="absolute inset-0 gradient-bg opacity-30 pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.22em] text-white/50">STAY SHARP</div>
                <h2 className="mt-2 text-xl font-bold">Practical insights, no noise.</h2>
                <p className="mt-1 text-sm text-white/60">
                  Engineering write-ups on AI, cloud, security, and web performance.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                {["AI", "Security", "Cloud", "Web"].map((topic) => {
                  const tc = tagConfig[topic];
                  return (
                    <span key={topic} className={`rounded-full border px-3 py-1 text-xs ${tc?.chip ?? "border-white/10 bg-white/5 text-white/60"}`}>
                      {topic}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
