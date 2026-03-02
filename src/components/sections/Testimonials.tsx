"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Faint gradient */}
      <div className="pointer-events-none absolute inset-0 gradient-bg opacity-30" />

      <div className="container-pad relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.22em] text-white/50">TESTIMONIALS</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Trusted by engineering teams
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Real outcomes from teams that chose clarity, speed, and production quality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * MOTION.reveal.stagger}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shine-hover"
                whileHover={
                  reduced ? {} : {
                    y:           MOTION.card.hoverY,
                    borderColor: "rgba(255,255,255,0.18)",
                    boxShadow:   "0 20px 50px rgba(0,0,0,0.3)",
                  }
                }
                whileTap={reduced ? {} : { scale: 0.99 }}
                transition={spring}
              >
                {/* Quote mark */}
                <div className="absolute right-6 top-4 text-6xl font-serif leading-none text-white/5 select-none">
                  "
                </div>

                {/* Stars — staggered entrance */}
                <motion.div
                  className="flex gap-1 mb-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: i * 0.08 } } }}
                >
                  {Array.from({ length: 5 }).map((_, k) => (
                    <motion.svg
                      key={k}
                      className="h-4 w-4 fill-amber-400"
                      viewBox="0 0 20 20"
                      variants={reduced ? {} : {
                        hidden:  { opacity: 0, scale: 0.3, y: 6 },
                        visible: { opacity: 1, scale: 1,   y: 0, transition: { type: "spring", stiffness: 500, damping: 18 } },
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Person */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-500/30 to-blue-500/20 text-sm font-semibold text-white/90">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/90">{t.name}</div>
                    <div className="text-xs text-white/50">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
