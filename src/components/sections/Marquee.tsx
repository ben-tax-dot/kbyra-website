"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const row1 = [
  { text: "AI COPILOTS",         color: "text-violet-400", dot: "bg-violet-400" },
  { text: "RAG SYSTEMS",         color: "text-violet-400", dot: "bg-violet-400" },
  { text: "ZERO TRUST",          color: "text-orange-400", dot: "bg-orange-400" },
  { text: "CLOUD MIGRATION",     color: "text-sky-400",    dot: "bg-sky-400" },
  { text: "KUBERNETES",          color: "text-sky-400",    dot: "bg-sky-400" },
  { text: "OBSERVABILITY",       color: "text-teal-400",   dot: "bg-teal-400" },
  { text: "DATA PIPELINES",      color: "text-teal-400",   dot: "bg-teal-400" },
  { text: "NEXT.JS WEBSITES",    color: "text-indigo-400", dot: "bg-indigo-400" },
  { text: "SECURITY HARDENING",  color: "text-orange-400", dot: "bg-orange-400" },
  { text: "CI/CD PIPELINES",     color: "text-sky-400",    dot: "bg-sky-400" },
];

const row2 = [
  { text: "TERRAFORM IaC",       color: "text-sky-400",     dot: "bg-sky-400" },
  { text: "BRAND SYSTEMS",       color: "text-pink-400",    dot: "bg-pink-400" },
  { text: "LLM FINE-TUNING",     color: "text-violet-400",  dot: "bg-violet-400" },
  { text: "DEVOPS AUTOMATION",   color: "text-teal-400",    dot: "bg-teal-400" },
  { text: "INCIDENT RESPONSE",   color: "text-orange-400",  dot: "bg-orange-400" },
  { text: "VECTOR DATABASES",    color: "text-violet-400",  dot: "bg-violet-400" },
  { text: "COST OPTIMIZATION",   color: "text-emerald-400", dot: "bg-emerald-400" },
  { text: "LANDING PAGES",       color: "text-pink-400",    dot: "bg-pink-400" },
  { text: "AUDIT READINESS",     color: "text-orange-400",  dot: "bg-orange-400" },
  { text: "MOTION DESIGN",       color: "text-indigo-400",  dot: "bg-indigo-400" },
];

function Chip({ text, dot, color }: { text: string; dot: string; color: string }) {
  return (
    <span className="chip inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-white/65 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:scale-105 cursor-default">
      <span className={`h-1.5 w-1.5 rounded-full ${dot} opacity-80`} />
      <span className={color}>{text}</span>
    </span>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-section relative overflow-hidden border-y border-white/10 bg-black py-10">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="container-pad mb-7">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="text-xs tracking-[0.22em] text-white/50">CAPABILITIES</div>
            <div className="h-px flex-1 hairline" />
          </div>
        </ScrollReveal>
      </div>

      {/* Row 1 — left */}
      <div className="marquee-row-1 flex items-center gap-3 py-1.5">
        {[...row1, ...row1].map((item, i) => (
          <Chip key={`r1-${i}`} text={item.text} dot={item.dot} color={item.color} />
        ))}
      </div>

      {/* Row 2 — right */}
      <div className="marquee-row-2 mt-3 flex items-center gap-3 py-1.5">
        {[...row2, ...row2].map((item, i) => (
          <Chip key={`r2-${i}`} text={item.text} dot={item.dot} color={item.color} />
        ))}
      </div>

      <style jsx>{`
        .marquee-row-1 {
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }
        .marquee-row-2 {
          width: max-content;
          animation: scroll-right 26s linear infinite;
        }
        .marquee-section:hover .marquee-row-1,
        .marquee-section:hover .marquee-row-2 {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
