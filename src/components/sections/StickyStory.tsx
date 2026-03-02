"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ensureGsap } from "@/lib/gsap";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroScene from "@/components/three/HeroScene";

const steps = [
  {
    k: "01",
    title: "Discover",
    tag: "Week 1",
    desc:
      "We clarify goals, success metrics, constraints, and timeline. You get a structured plan — not guesswork. Every project starts with shared understanding.",
    points: ["Stakeholder alignment", "Scope definition + milestones", "Risk + constraint mapping"],
  },
  {
    k: "02",
    title: "Design",
    tag: "Week 1–2",
    desc:
      "We design system architecture, security controls, and a premium UI motion language that feels expensive. No generic templates — everything is intentional.",
    points: ["Architecture + security controls", "UI motion language", "Component + API design"],
  },
  {
    k: "03",
    title: "Build",
    tag: "Week 2–6",
    desc:
      "We implement with clean engineering, reusable components, and production-grade deployment practices. Code reviews, testing, and performance baked in.",
    points: ["CI/CD + IaC setup", "Clean, documented code", "Performance + security checks"],
  },
  {
    k: "04",
    title: "Operate",
    tag: "Week 6–8",
    desc:
      "We deliver documentation, monitoring, and a handoff package so your team can run confidently. Ownership transfers cleanly — no black boxes.",
    points: ["Runbooks + documentation", "Monitoring + alerting", "Clean team handoff"],
  },
];

export default function StickyStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    ensureGsap();
    const wrap = wrapRef.current;
    if (!wrap) return;

    const panels = Array.from(wrap.querySelectorAll("[data-step]")) as HTMLElement[];

    const ctx = gsap.context(() => {
      panels.forEach((p, i) => {
        gsap.to(p, {
          scrollTrigger: {
            trigger: p,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActive(i),
            onEnterBack: () => setActive(i),
          },
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-20 border-y border-white/10 bg-black overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container-pad relative">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="text-xs tracking-[0.22em] text-white/50">HOW WE WORK</div>
            <div className="h-px flex-1 hairline" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            A process that{" "}
            <span className="gradient-text-static">removes uncertainty.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
            Every engagement follows the same structured playbook: discover → design → build →
            operate. No surprises. No scope creep. Just predictable, premium delivery.
          </p>
        </ScrollReveal>

        <div ref={wrapRef} className="mt-12 grid gap-8 md:grid-cols-12 items-start">

          {/* Left: Steps */}
          <div className="md:col-span-6 space-y-4">
            {steps.map((s, i) => (
              <div
                key={s.k}
                data-step
                className={[
                  "relative overflow-hidden rounded-3xl border p-6 transition-all duration-300",
                  i === active
                    ? "border-white/25 bg-white/8"
                    : "border-white/8 bg-white/3",
                ].join(" ")}
              >
                {/* Active glow */}
                {i === active && (
                  <div className="absolute inset-0 service-glow-ai opacity-40 pointer-events-none" />
                )}

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    {/* Step number + title */}
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors",
                          i === active
                            ? "border-violet-500/50 bg-violet-500/20 text-violet-300"
                            : "border-white/10 bg-white/5 text-white/50",
                        ].join(" ")}
                      >
                        {s.k}
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{s.title}</div>
                        <div className="text-xs text-white/40 mt-0.5">{s.tag}</div>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {i === active && (
                      <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400">
                        Active
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>

                  {/* Points */}
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs text-white/55">
                        <span
                          className={[
                            "h-1 w-1 rounded-full",
                            i === active ? "bg-violet-400" : "bg-white/25",
                          ].join(" ")}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Pinned visual */}
          <div className="md:col-span-6 md:sticky md:top-24 space-y-4">
            <div className="glow rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <HeroScene />
              </div>
            </div>

            {/* Progress pills */}
            <div className="flex gap-2 justify-center">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={[
                    "h-1.5 rounded-full transition-all duration-500",
                    i === active
                      ? "w-10 bg-violet-400"
                      : "w-4 bg-white/20",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs text-white/55">
              {[
                ["Clarity",  "Scope + milestones"],
                ["Quality",  "Performance-first"],
                ["Security", "Best practices"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white/85">{a}</div>
                  <div className="mt-1">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
