"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrambleText from "@/components/ui/ScrambleText";
import { services } from "@/content/site";
import { MOTION } from "@/lib/motion";

/* Per-service accent */
const accents: Record<string, {
  glow: string; iconColor: string; iconBg: string;
  dot: string; hoverShadow: string;
}> = {
  "ai-solutions":        { glow: "service-glow-ai",    iconColor: "text-violet-400", iconBg: "bg-violet-500/15 border-violet-500/20",  dot: "bg-violet-400",  hoverShadow: "0 20px 60px rgba(139,92,246,0.18)"   },
  "cybersecurity":       { glow: "service-glow-cyber",  iconColor: "text-orange-400", iconBg: "bg-orange-500/15 border-orange-500/20",  dot: "bg-orange-400",  hoverShadow: "0 20px 60px rgba(249,115,22,0.18)"   },
  "cloud-devops":        { glow: "service-glow-cloud",  iconColor: "text-sky-400",    iconBg: "bg-sky-500/15 border-sky-500/20",         dot: "bg-sky-400",     hoverShadow: "0 20px 60px rgba(56,189,248,0.18)"   },
  "data-engineering":    { glow: "service-glow-data",   iconColor: "text-teal-400",   iconBg: "bg-teal-500/15 border-teal-500/20",       dot: "bg-teal-400",    hoverShadow: "0 20px 60px rgba(20,184,166,0.18)"   },
  "web-app-development": { glow: "service-glow-web",    iconColor: "text-indigo-400", iconBg: "bg-indigo-500/15 border-indigo-500/20",   dot: "bg-indigo-400",  hoverShadow: "0 20px 60px rgba(99,102,241,0.18)"   },
  "brand-digital":       { glow: "service-glow-brand",  iconColor: "text-pink-400",   iconBg: "bg-pink-500/15 border-pink-500/20",       dot: "bg-pink-400",    hoverShadow: "0 20px 60px rgba(236,72,153,0.18)"   },
};

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function Services() {
  const reduced = useReducedMotion();

  return (
    <section className="relative py-20">
      <div className="container-pad">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs text-white/50"><ScrambleText text="SERVICES" delay={0.1} /></div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Deep capability.{" "}
                <span className="gradient-text-static">Premium execution.</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/60 leading-relaxed">
                We don't just "build something." We design a delivery system: architecture,
                security, performance, and clean UI motion — with documentation and
                operational readiness baked in.
              </p>
            </div>

            <motion.div
              whileHover={reduced ? {} : { y: -2 }}
              whileTap={reduced  ? {} : { scale: MOTION.button.pressScale }}
              transition={spring}
            >
              <Link
                href="/services"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors"
              >
                View all services →
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const a = accents[s.slug] ?? accents["ai-solutions"];
            return (
              <ScrollReveal key={s.slug} delay={idx * MOTION.reveal.stagger}>
                <motion.div
                  className="group spotlight-card relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shine-hover"
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const r = el.getBoundingClientRect();
                    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
                    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
                  }}
                  whileHover={
                    reduced ? {} : {
                      y:         MOTION.card.hoverY,
                      boxShadow: a.hoverShadow,
                      borderColor: "rgba(255,255,255,0.18)",
                    }
                  }
                  whileTap={reduced ? {} : { scale: 0.99 }}
                  transition={spring}
                >
                  {/* Accent gradient overlay */}
                  <div className={`absolute inset-0 ${a.glow} opacity-60 transition-opacity group-hover:opacity-100`} />

                  {/* Corner dot */}
                  <div className={`absolute right-5 top-5 h-2 w-2 rounded-full ${a.dot}`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center rounded-2xl border p-3.5 ${a.iconBg}`}>
                      <Icon className={`h-5 w-5 ${a.iconColor}`} />
                    </div>

                    {/* Title + desc */}
                    <div className="mt-4 text-base font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{s.short}</p>

                    {/* Bullets */}
                    <ul className="mt-5 space-y-2">
                      {s.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-white/65">
                          <span className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full ${a.dot} opacity-70`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider */}
                    <div className="mt-6 h-px w-full hairline" />

                    {/* Stack + CTA */}
                    <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex flex-wrap gap-1.5">
                        {s.stack.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-black/20 px-2.5 py-0.5 text-xs text-white/55"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className={`text-xs font-medium transition-colors ${a.iconColor} hover:opacity-80`}
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold">Not sure which service fits your goal?</div>
              <p className="mt-1 text-sm text-white/60">
                Book a free 30-minute discovery call. We'll map out the right approach together.
              </p>
            </div>
            <motion.div
              whileHover={reduced ? {} : { y: -2, scale: 1.01 }}
              whileTap={reduced  ? {} : { scale: MOTION.button.pressScale }}
              transition={spring}
              className="shrink-0"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
              >
                Book a Free Call →
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
