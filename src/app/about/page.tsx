"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { about, brand } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

const pillars = [
  { icon: "⚡", label: "10x Faster", sub: "launch velocity" },
  { icon: "🛡️", label: "Security-first", sub: "by default" },
  { icon: "99.9%", label: "Uptime", sub: "target" },
  { icon: "24h", label: "Response", sub: "guarantee" },
];

export default function AboutPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-600/12 blur-[110px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-sky-500/8 blur-[90px]" />

        <div className="container-pad relative">
          <div className="grid gap-12 lg:grid-cols-[1fr,400px] items-center">
            <div>
              <ScrollReveal>
                <div>
                  <div className="text-xs tracking-[0.22em] text-white/50">ABOUT</div>
                  <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    Premium tech delivery,{" "}
                    <span className="gradient-text">engineered.</span>
                  </h1>
                  <p className="mt-5 text-white/65 leading-relaxed md:text-lg">
                    {about.story}
                  </p>
                </div>
              </ScrollReveal>

              {/* Stat pillars */}
              <ScrollReveal delay={0.12}>
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {pillars.map(({ icon, label, sub }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                      <div className="text-2xl font-bold">{icon}</div>
                      <div className="mt-2 font-semibold text-white/90">{label}</div>
                      <div className="mt-0.5 text-xs text-white/50">{sub}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Parallax image */}
            <div className="hidden lg:block">
              <ParallaxImage variant="team" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-pad pb-24 space-y-8">
        {/* ── Values ──────────────────────────────────────────── */}
        <ScrollReveal>
          <div className="text-xs tracking-[0.22em] text-white/50">OUR VALUES</div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            What drives every engagement
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {about.values.map((v, idx) => (
            <ScrollReveal key={v.title} delay={idx * MOTION.reveal.stagger}>
              <motion.div
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 shine-hover"
                whileHover={reduced ? {} : {
                  y:           MOTION.card.hoverY,
                  borderColor: "rgba(255,255,255,0.18)",
                  boxShadow:   "0 20px 50px rgba(0,0,0,0.3)",
                }}
                whileTap={reduced ? {} : { scale: 0.99 }}
                transition={spring}
              >
                <div className="text-lg font-semibold">{v.title}</div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{v.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Working style ────────────────────────────────────── */}
        <ScrollReveal delay={0.08}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 relative">
            <div className="absolute inset-0 service-glow-ai opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="text-xs tracking-[0.22em] text-white/50">WORKING STYLE</div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Clarity, speed, and operational discipline.
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed max-w-3xl">
                We run projects with clear milestones and high-signal communication. You get an execution plan,
                documentation, and delivery confidence. Our engineering focuses on performance, security, and
                maintainability — while our UI motion system keeps the product feeling premium.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Execution plan", desc: "Clear scope, milestones, and timeline before any code ships." },
                  { title: "Live communication", desc: "Async updates, async decisions — no meeting overhead." },
                  { title: "Clean handoff", desc: "Full documentation, tested code, and deployment guides." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="font-semibold text-white/90">{item.title}</div>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Industries ───────────────────────────────────────── */}
        <ScrollReveal delay={0.06}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs tracking-[0.22em] text-white/50">INDUSTRIES SERVED</div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Trusted across sectors
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {["SaaS", "Enterprise IT", "Healthcare", "Finance", "E-commerce", "Startups", "Manufacturing", "Professional Services"].map((ind) => (
                <span key={ind} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <ScrollReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <div className="absolute inset-0 gradient-bg opacity-50 pointer-events-none" />
            <div className="relative">
              <div className="text-2xl font-bold tracking-tight">
                Ready to work together?
              </div>
              <p className="mt-3 text-white/60 max-w-md mx-auto">
                Tell us your goal and timeline. We respond within 24 hours with a clear action plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <motion.div
                  whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.01 }}
                  whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                  transition={spring}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                  >
                    Book a Free Call →
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
                    View Services
                  </Link>
                </motion.div>
              </div>
              <div className="mt-5 text-xs text-white/40">{brand.location} · {brand.email}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
