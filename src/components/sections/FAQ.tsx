"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faq } from "@/content/site";

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      animate={{
        borderColor: open ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)",
      }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white/90 sm:text-base">{q}</span>

        {/* Animated + / × icon */}
        <motion.span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 1v10M1 6h10" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px w-full hairline mb-4" />
              <p className="text-sm leading-relaxed text-white/60">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

      <div className="container-pad relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.22em] text-white/50">FAQ</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Common questions
            </h2>
            <p className="mt-3 text-white/55 max-w-xl mx-auto">
              Everything you need to know before starting a project with us.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-3">
          {faq.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 0.05}>
              <Item q={item.q} a={item.a} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
