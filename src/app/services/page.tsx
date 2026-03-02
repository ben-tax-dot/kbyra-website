"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { services } from "@/content/site";
import { MOTION } from "@/lib/motion";

const accentMap: Record<string, { glowClass: string; hoverShadow: string; chipClass: string; label: string }> = {
  "ai-solutions":        { glowClass: "service-glow-ai",    hoverShadow: "0 24px 60px rgba(139,92,246,0.22)",  chipClass: "bg-violet-500/10 border-violet-500/25 text-violet-300",   label: "AI" },
  "cybersecurity":       { glowClass: "service-glow-cyber",  hoverShadow: "0 24px 60px rgba(249,115,22,0.22)",  chipClass: "bg-orange-500/10 border-orange-500/25 text-orange-300",   label: "Security" },
  "cloud-devops":        { glowClass: "service-glow-cloud",  hoverShadow: "0 24px 60px rgba(56,189,248,0.22)",  chipClass: "bg-sky-500/10 border-sky-500/25 text-sky-300",            label: "Cloud" },
  "data-engineering":    { glowClass: "service-glow-data",   hoverShadow: "0 24px 60px rgba(20,184,166,0.22)",  chipClass: "bg-teal-500/10 border-teal-500/25 text-teal-300",         label: "Data" },
  "web-app-development": { glowClass: "service-glow-web",    hoverShadow: "0 24px 60px rgba(99,102,241,0.22)",  chipClass: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",   label: "Web" },
  "brand-digital":       { glowClass: "service-glow-brand",  hoverShadow: "0 24px 60px rgba(236,72,153,0.22)",  chipClass: "bg-pink-500/10 border-pink-500/25 text-pink-300",         label: "Brand" },
};

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function ServicesPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-sky-500/10 blur-[90px]" />

        <div className="container-pad relative">
          <div className="grid gap-12 lg:grid-cols-[1fr,400px] items-center">
            <div>
              <ScrollReveal>
                <div>
                  <div className="text-xs tracking-[0.22em] text-white/50">SERVICES</div>
                  <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    Everything you need to{" "}
                    <span className="gradient-text">ship premium tech.</span>
                  </h1>
                  <p className="mt-5 text-white/65 leading-relaxed md:text-lg">
                    We build websites, cloud platforms, AI systems, and security foundations. Each engagement
                    includes delivery planning, clean implementation, and a full handoff package.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["AI Solutions", "Cybersecurity", "Cloud & DevOps", "Data Engineering", "Web Dev", "Brand & Digital"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Parallax image — hidden on small screens */}
            <div className="hidden lg:block">
              <ParallaxImage variant="ai" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Service cards ────────────────────────────────────── */}
      <div className="container-pad pb-24 space-y-5">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const a = accentMap[s.slug] ?? { glowClass: "service-glow-ai", hoverShadow: "0 24px 60px rgba(0,0,0,0.4)", chipClass: "bg-white/10 border-white/10 text-white/70", label: "" };

          return (
            <ScrollReveal key={s.slug} delay={idx * MOTION.reveal.stagger}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shine-hover"
                whileHover={reduced ? {} : {
                  y:           MOTION.card.hoverY,
                  borderColor: "rgba(255,255,255,0.18)",
                  boxShadow:   a.hoverShadow,
                }}
                whileTap={reduced ? {} : { scale: 0.99 }}
                transition={spring}
              >
                {/* Accent glow */}
                <div className={`absolute inset-0 ${a.glowClass} opacity-50 transition-opacity group-hover:opacity-80 pointer-events-none`} />

                <div className="relative grid gap-0 lg:grid-cols-12">
                  {/* Left: icon + tag + short + bullets */}
                  <div className="lg:col-span-4 p-7 md:p-8 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5">
                        <Icon className="h-5 w-5 text-white/85" />
                      </div>
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs ${a.chipClass}`}>
                        {a.label}
                      </span>
                    </div>

                    <div className="mt-4 text-xl font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.short}</p>

                    <div className="mt-5 space-y-2">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2 text-sm text-white/65">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: long desc + deliverables + stack */}
                  <div className="lg:col-span-8 p-7 md:p-8">
                    <p className="text-sm text-white/70 leading-relaxed">{s.long}</p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <div className="text-xs tracking-[0.2em] text-white/45">DELIVERABLES</div>
                        <ul className="mt-3 space-y-2">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-white/70">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/60" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <div className="text-xs tracking-[0.2em] text-white/45">TECH STACK</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.stack.map((t) => (
                            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 h-px w-full hairline" />
                        <div className="mt-4 text-sm text-white/60">
                          Typical timeline:{" "}
                          <span className="font-medium text-white/85">2–8 weeks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </>
  );
}
