"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { brand, contact } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

const stepIcons = ["01", "02", "03"];

export default function ContactPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-sky-500/10 blur-[90px]" />

        <div className="container-pad relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.22em] text-white/50">CONTACT</div>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Let&apos;s build{" "}
                <span className="gradient-text">something great.</span>
              </h1>
              <p className="mt-5 max-w-xl text-white/65 leading-relaxed md:text-lg">
                {contact.subtext}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {["No commitment required", "Reply within 24 hours", "NDA available", "Free consultation"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="container-pad pb-24">
        <div className="grid gap-8 md:grid-cols-12 items-start">

          {/* Form card */}
          <ScrollReveal className="md:col-span-7">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
              whileHover={reduced ? {} : { borderColor: "rgba(255,255,255,0.16)" }}
              transition={spring}
            >
              <div className="absolute inset-0 service-glow-ai opacity-20 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <div className="text-sm font-semibold">Send a message</div>
                </div>
                <p className="text-xs text-white/45 mb-6">We respond within 24 hours with a clear action plan.</p>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs text-white/50">Name</label>
                      <input
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30 transition-colors placeholder:text-white/25"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-white/50">Work email</label>
                      <input
                        type="email"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30 transition-colors placeholder:text-white/25"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/50">Company</label>
                    <input
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30 transition-colors placeholder:text-white/25"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/50">What do you want to build?</label>
                    <textarea
                      className="h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30 transition-colors placeholder:text-white/25"
                      placeholder="Brief description of your goal, timeline, and any constraints…"
                    />
                  </div>

                  <motion.button
                    type="button"
                    className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
                    whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.01 }}
                    whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                    transition={spring}
                  >
                    Send message →
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right panel */}
          <div className="md:col-span-5 space-y-5">
            {/* What happens next */}
            <ScrollReveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-xs tracking-[0.22em] text-white/50">WHAT HAPPENS NEXT</div>
                <div className="mt-5 space-y-4">
                  {contact.steps.map((s, idx) => (
                    <div key={s.title} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/50">
                        {stepIcons[idx]}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{s.title}</div>
                        <p className="mt-1 text-xs text-white/55 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Direct contact */}
            <ScrollReveal delay={0.12}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-xs tracking-[0.22em] text-white/50">DIRECT CONTACT</div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
                      <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="text-sm text-white/70">{brand.email}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
                      <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="text-sm text-white/70">{brand.location}</div>
                  </div>
                </div>

                <div className="mt-6 h-px w-full hairline" />

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-white/45">
                  {["No commitment required", "Reply within 24 hours", "Clear action plan", "NDA available"].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </>
  );
}
