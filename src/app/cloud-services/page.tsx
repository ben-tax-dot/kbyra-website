"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { cloudServices } from "@/content/site";
import { MOTION } from "@/lib/motion";

const spring = {
  type:      "spring" as const,
  stiffness: MOTION.spring.stiffness,
  damping:   MOTION.spring.damping,
  mass:      MOTION.spring.mass,
};

const offeringAccent = [
  { glow: "service-glow-cloud",  hoverShadow: "0 20px 50px rgba(56,189,248,0.18)",  chip: "bg-sky-500/10 border-sky-500/25 text-sky-300" },
  { glow: "service-glow-data",   hoverShadow: "0 20px 50px rgba(20,184,166,0.18)",  chip: "bg-teal-500/10 border-teal-500/25 text-teal-300" },
  { glow: "service-glow-web",    hoverShadow: "0 20px 50px rgba(99,102,241,0.18)",  chip: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300" },
  { glow: "service-glow-cyber",  hoverShadow: "0 20px 50px rgba(249,115,22,0.18)",  chip: "bg-orange-500/10 border-orange-500/25 text-orange-300" },
];

export default function CloudServicesPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-bg opacity-60" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 noise" />
        <div className="pointer-events-none absolute -left-16 top-1/3 h-80 w-80 rounded-full bg-sky-500/12 blur-[110px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-teal-500/8 blur-[90px]" />

        <div className="container-pad relative">
          <div className="grid gap-12 lg:grid-cols-[1fr,400px] items-center">
            <div>
              <ScrollReveal>
                <div>
                  <div className="text-xs tracking-[0.22em] text-white/50">CLOUD SERVICES</div>
                  <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    Production platforms,{" "}
                    <span className="gradient-text">built to last.</span>
                  </h1>
                  <p className="mt-5 text-white/65 leading-relaxed md:text-lg">
                    {cloudServices.hero.subtext}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { stat: "AWS / Azure / GCP", label: "Multi-cloud" },
                    { stat: "Zero-downtime", label: "Migration" },
                    { stat: "IaC + CI/CD", label: "Automation" },
                    { stat: "24/7 ready", label: "Observability" },
                  ].map(({ stat, label }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <div className="text-sm font-bold text-white/90">{stat}</div>
                      <div className="mt-1 text-xs text-white/50">{label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Parallax image */}
            <div className="hidden lg:block">
              <ParallaxImage variant="cloud" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-pad pb-24 space-y-12">
        {/* ── Offering cards ───────────────────────────────────── */}
        <div>
          <ScrollReveal>
            <div className="text-xs tracking-[0.22em] text-white/50 mb-3">WHAT WE DELIVER</div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Cloud offerings</h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {cloudServices.offerings.map((offering, idx) => {
              const Icon = offering.icon;
              const a = offeringAccent[idx] ?? offeringAccent[0];
              return (
                <ScrollReveal key={offering.title} delay={idx * MOTION.reveal.stagger}>
                  <motion.div
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shine-hover h-full"
                    whileHover={reduced ? {} : {
                      y:           MOTION.card.hoverY,
                      borderColor: "rgba(255,255,255,0.18)",
                      boxShadow:   a.hoverShadow,
                    }}
                    whileTap={reduced ? {} : { scale: 0.99 }}
                    transition={spring}
                  >
                    <div className={`absolute inset-0 ${a.glow} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5">
                          <Icon className="h-5 w-5 text-white/85" />
                        </div>
                        <span className={`rounded-full border px-2.5 py-0.5 text-xs ${a.chip}`}>
                          {offering.title}
                        </span>
                      </div>
                      <div className="mt-4 text-lg font-semibold">{offering.title}</div>
                      <p className="mt-2 text-sm text-white/65 leading-relaxed">{offering.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ── Process ─────────────────────────────────────────── */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="absolute inset-0 service-glow-cloud opacity-25 pointer-events-none" />
            <div className="relative">
              <div className="text-xs tracking-[0.22em] text-white/50">OUR PROCESS</div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                A clean rollout that prevents downtime.
              </h2>
              <p className="mt-3 text-white/60 max-w-2xl">
                Every cloud engagement follows a proven four-phase approach that eliminates surprises and ensures clean knowledge transfer.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cloudServices.process.map((p, idx) => (
                  <ScrollReveal key={p.step} delay={idx * MOTION.reveal.stagger}>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5 relative">
                      <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 select-none leading-none">
                        {p.step}
                      </div>
                      <div className="text-xs text-white/40 tracking-[0.15em]">PHASE {p.step}</div>
                      <div className="mt-2 font-semibold text-white/90">{p.title}</div>
                      <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Tech coverage ────────────────────────────────────── */}
        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs tracking-[0.22em] text-white/50">TECHNOLOGY COVERAGE</div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Broad stack, deep expertise</h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Prometheus", "Grafana", "GitHub Actions", "ArgoCD", "Cloudflare", "Linux", "Python", "PostgreSQL"].map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div
                whileHover={reduced ? {} : { y: MOTION.button.hoverY, scale: 1.01 }}
                whileTap={reduced   ? {} : { scale: MOTION.button.pressScale }}
                transition={spring}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                >
                  Discuss your cloud needs →
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
