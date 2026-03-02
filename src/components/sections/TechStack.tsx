"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const row1 = [
  "Next.js", "React", "TypeScript", "Python", "AWS",
  "Azure", "GCP", "Docker", "Kubernetes", "Terraform",
];

const row2 = [
  "OpenAI", "PostgreSQL", "Redis", "Elasticsearch",
  "GitHub Actions", "Cloudflare", "Vercel", "GSAP",
  "Tailwind CSS", "Framer Motion",
];

function TechChip({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs tracking-wide transition-all duration-200 hover:scale-105 cursor-default",
        accent
          ? "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-500/50 hover:bg-violet-500/20"
          : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:bg-white/10 hover:text-white/85",
      ].join(" ")}
    >
      {text}
    </span>
  );
}

export default function TechStack() {
  return (
    <section className="tech-section relative overflow-hidden border-b border-white/10 py-14">
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="container-pad relative mb-8">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="text-xs tracking-[0.22em] text-white/50">TECHNOLOGY STACK</div>
            <div className="h-px flex-1 hairline" />
          </div>
          <p className="mt-2 text-sm text-white/45">
            Battle-tested tools for every layer of your stack
          </p>
        </ScrollReveal>
      </div>

      {/* Row 1 — left */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
        <div className="tech-row-1 flex items-center gap-3 py-2">
          {[...row1, ...row1].map((t, i) => (
            <TechChip key={`r1-${i}`} text={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="relative mt-3 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
        <div className="tech-row-2 flex items-center gap-3 py-2">
          {[...row2, ...row2].map((t, i) => (
            <TechChip key={`r2-${i}`} text={t} accent />
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-row-1 {
          animation: scroll-left 28s linear infinite;
          width: max-content;
        }
        .tech-row-2 {
          animation: scroll-right 32s linear infinite;
          width: max-content;
        }
        .tech-section:hover .tech-row-1,
        .tech-section:hover .tech-row-2 {
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
