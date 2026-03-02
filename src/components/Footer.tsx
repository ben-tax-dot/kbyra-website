"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { brand, services, navigation } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

export default function Footer() {
  const reduced = useReducedMotion();

  const companyLinks = navigation.filter((n) =>
    ["/about", "/services", "/case-studies", "/insights", "/contact"].includes(n.href)
  );

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/6 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-500/6 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />

      <div className="container-pad py-16 relative">
        <div className="grid gap-10 md:grid-cols-12">

          {/* Brand column */}
          <ScrollReveal className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <motion.span
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold"
                whileHover={reduced ? {} : { scale: 1.08, borderColor: "rgba(139,92,246,0.4)", backgroundColor: "rgba(139,92,246,0.12)" }}
                transition={spring}
              >
                {brand.name.slice(0, 2).toUpperCase()}
              </motion.span>
              <div className="font-bold tracking-tight">
                {brand.name}
                <span className="font-normal text-white/45"> Technologies</span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {brand.oneLiner}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.div
                whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.02 }}
                whileTap={reduced  ? {} : { scale: MOTION.button.pressScale }}
                transition={spring}
              >
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
                >
                  Book a Call
                </Link>
              </motion.div>
              <motion.div
                whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.02 }}
                whileTap={reduced  ? {} : { scale: MOTION.button.pressScale }}
                transition={spring}
              >
                <Link
                  href="/services"
                  className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/40">
              {["AI • Cloud • Security • Web", "Detroit, MI, USA", "Est. 2024"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 text-xs text-white/35">
              <div>{brand.legalName}</div>
            </div>
          </ScrollReveal>

          {/* Company links */}
          <ScrollReveal delay={0.05} className="md:col-span-2">
            <div className="text-xs tracking-[0.22em] text-white/45 mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              {companyLinks.map((l) => (
                <motion.div
                  key={l.href}
                  whileHover={reduced ? {} : { x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href={l.href} className="block text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.08} className="md:col-span-3">
            <div className="text-xs tracking-[0.22em] text-white/45 mb-4">SERVICES</div>
            <div className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <motion.div
                  key={s.slug}
                  whileHover={reduced ? {} : { x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href="/services" className="block text-white/55 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={reduced ? {} : { x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link href="/cloud-services" className="block text-white/55 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.11} className="md:col-span-2">
            <div className="text-xs tracking-[0.22em] text-white/45 mb-4">CONTACT</div>
            <div className="space-y-2 text-sm text-white/55">
              <a href={`mailto:${brand.email}`} className="block hover:text-white transition-colors">
                {brand.email}
              </a>
              <div>{brand.location}</div>

              <div className="pt-4 flex gap-4 text-sm">
                <motion.a
                  href={brand.socials.linkedin}
                  className="text-white/50 hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduced ? {} : { y: -2 }}
                  transition={spring}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href={brand.socials.twitter}
                  className="text-white/50 hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduced ? {} : { y: -2 }}
                  transition={spring}
                >
                  X / Twitter
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px hairline" />

        {/* Bottom bar */}
        <ScrollReveal delay={0.05}>
          <div className="mt-6 flex flex-col gap-3 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>

            <div className="flex items-center gap-5">
              <span className="hover:text-white/60 transition-colors cursor-default">Privacy Policy</span>
              <span className="hover:text-white/60 transition-colors cursor-default">Terms of Service</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400/80">All systems operational</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
