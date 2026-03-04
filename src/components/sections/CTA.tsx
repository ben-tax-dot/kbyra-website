"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import ScrambleText from "@/components/ui/ScrambleText";
import { brand } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function CTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-pad">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 glow border-glow-pulse">
          {/* Background layers */}
          <div className="absolute inset-0 gradient-bg opacity-80" />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute inset-0 noise" />

          {/* Extra glow orbs */}
          <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[80px]" />

          <div className="relative grid gap-10 md:grid-cols-12 items-start">
            {/* Left */}
            <div className="md:col-span-7">
              <ScrollReveal>
                <div className="text-xs text-white/50"><ScrambleText text="GET STARTED" delay={0.2} /></div>
                <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  <TextReveal delay={0.1} stagger={0.08} el="span" className="block">
                    Ready to build
                  </TextReveal>
                  <span className="gradient-text">something premium?</span>
                </h3>
                <p className="mt-4 max-w-xl text-white/65 leading-relaxed">
                  Share your goal and timeline. We'll respond within 24 hours with a structured
                  action plan, recommended stack, and a clear delivery schedule.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {/* Primary CTA — magnetic pull toward cursor */}
                  <MagneticButton strength={0.4}>
                    <motion.div
                      whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.01 }}
                      whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                      transition={spring}
                    >
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                      >
                        Book a Free Call
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </motion.div>
                  </MagneticButton>

                  {/* Secondary CTA */}
                  <motion.div
                    whileHover={reduced ? {} : { y: MOTION.button.hoverY }}
                    whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                    transition={spring}
                  >
                    <Link
                      href="/services"
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.18}>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { a: "24h", b: "Response guarantee" },
                    { a: "Clear plan", b: "Scope + milestones" },
                    { a: "Quality build", b: "Security + performance" },
                  ].map(({ a, b }) => (
                    <div key={a} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <div className="font-semibold text-white/90">{a}</div>
                      <div className="mt-1 text-sm text-white/55">{b}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: mini contact card */}
            <div className="md:col-span-5">
              <ScrollReveal delay={0.14}>
                <motion.div
                  className="rounded-3xl border border-white/15 bg-black/40 p-7 backdrop-blur-sm"
                  whileHover={
                    reduced ? {} : {
                      borderColor: "rgba(255,255,255,0.22)",
                      boxShadow:   "0 16px 50px rgba(0,0,0,0.3)",
                    }
                  }
                  transition={spring}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <div className="text-sm font-semibold">Let's talk</div>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">
                    Prefer email? Reach us directly at{" "}
                    <span className="text-white/80 font-medium">{brand.email}</span>
                  </p>

                  <div className="mt-6 space-y-3">
                    {["Your name", "Work email", "What do you want to build?"].map((ph) => (
                      <div
                        key={ph}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/40 select-none"
                      >
                        {ph}
                      </div>
                    ))}

                    <motion.div
                      whileHover={reduced ? {} : { y: -1, scale: 1.005 }}
                      whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                      transition={spring}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
                      >
                        Open full contact form →
                      </Link>
                    </motion.div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/45">
                    {[
                      "No commitment required",
                      "Reply within 24 hours",
                      "Clear action plan",
                      "NDA available",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
