import {
  Brain,
  Shield,
  Cloud,
  Database,
  Code2,
  Sparkles,
  Server,
  Layers,
  Gauge,
  Lock,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Rocket,
} from "lucide-react";

export const brand = {
  name: "KBYRA",
  legalName: "KBYRA Technologies LLC",
  tagline: "Framer-quality experiences — engineered.",
  oneLiner:
    "We build premium websites, cloud platforms, secure infrastructure, and AI solutions with enterprise reliability.",
  email: "hello@kbyra.com",
  phone: "+1 (___) ___-____",
  location: "Detroit, MI, USA",
  socials: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/cloud-services", label: "Cloud" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const hero = {
  badge: "AI • Cloud • Cybersecurity • Web Engineering",
  headline: "Build premium tech experiences.",
  headlineAccent: "Move faster with confidence.",
  subtext:
    "KBYRA delivers modern websites, cloud platforms, cybersecurity, data engineering, and AI systems — with premium motion design and production-grade quality.",
  primaryCta: { label: "Book a Free Call", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  stats: [
    { kpi: "10x", label: "Faster launches" },
    { kpi: "99.9%", label: "Uptime ready" },
    { kpi: "Secure", label: "Best practices" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: any;
  bullets: string[];
  deliverables: string[];
  stack: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "RAG copilots, automations, and enterprise AI systems that actually work in production.",
    long:
      "We design and build AI systems that integrate with your real tools and data. From retrieval-augmented generation (RAG) and internal copilots, to workflow automation and evaluation pipelines — we focus on reliability, safety, and measurable impact.",
    icon: Brain,
    bullets: [
      "RAG copilots (docs, tickets, CRM, internal knowledge)",
      "Tool calling + workflow automation",
      "Evaluation, monitoring, and guardrails",
      "Secure deployment and access control",
    ],
    deliverables: [
      "AI product scope + technical plan",
      "RAG pipeline (indexing, chunking, embeddings, retrieval)",
      "Model routing + prompt templates + tool integrations",
      "Quality evaluation (offline + online) + dashboards",
      "Deployment guide + handoff documentation",
    ],
    stack: ["OpenAI / OSS LLMs", "Vector DB", "Next.js", "Python", "Observability"],
    image: "/images/ai-1.jpg",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Zero Trust, hardening, monitoring, and security-first engineering.",
    long:
      "Security is not a checkbox — it's an operating system for your business. We implement Zero Trust access, system hardening, monitoring, and practical security controls that reduce risk without slowing your team down.",
    icon: Shield,
    bullets: [
      "Zero Trust access (identity-first)",
      "Server hardening + baseline controls",
      "Monitoring, logging, and alerting",
      "Incident readiness + operational playbooks",
    ],
    deliverables: [
      "Security baseline & gap analysis",
      "Zero Trust rollout plan + policy configuration",
      "Hardening checklist + automation scripts",
      "Centralized logging + alerting rules",
      "Incident response runbook + tabletop exercise plan",
    ],
    stack: ["Cloudflare / ZT", "WAF", "SIEM basics", "Linux", "Windows Server"],
    image: "/images/security-1.jpg",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Production platforms with CI/CD, IaC, observability, and cost optimization.",
    long:
      "We build cloud platforms that are scalable, observable, and cost-aware. Whether you're migrating, modernizing, or building new — we implement CI/CD pipelines, infrastructure-as-code, and production readiness practices.",
    icon: Cloud,
    bullets: [
      "Cloud migration + modernization",
      "CI/CD pipelines + release workflows",
      "Infrastructure as code (IaC)",
      "Observability and cost controls",
    ],
    deliverables: [
      "Cloud architecture diagram + rollout plan",
      "CI/CD pipelines (build, test, deploy)",
      "IaC (Terraform) + environment strategy",
      "Monitoring dashboards + alerting",
      "Cost optimization checklist + reporting",
    ],
    stack: ["AWS/Azure/GCP", "Terraform", "Docker", "Kubernetes", "Observability"],
    image: "/images/cloud-1.jpg",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    short: "Reliable pipelines, warehouses, dashboards, and analytics foundations.",
    long:
      "We build trustworthy data foundations for decision-making and AI. From ingestion pipelines and warehousing, to BI dashboards and governance — we design systems that scale with your business.",
    icon: Database,
    bullets: [
      "ETL/ELT pipelines + data quality checks",
      "Warehousing + analytics foundations",
      "Dashboards and reporting systems",
      "Governance and access control",
    ],
    deliverables: [
      "Data architecture + source mapping",
      "Pipelines (batch/stream) + quality monitoring",
      "Warehouse modeling + documentation",
      "BI dashboards + metric definitions",
      "Access control + governance guide",
    ],
    stack: ["SQL", "Python", "DBT (optional)", "BI tools", "Cloud storage"],
    image: "/images/tech-2.jpg",
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    short: "High-performance websites and products with premium motion design.",
    long:
      "We build conversion-focused websites and product experiences that feel premium. We combine clean design systems, modern engineering, SEO, and motion design to deliver experiences that look expensive and load fast.",
    icon: Code2,
    bullets: [
      "Premium marketing websites (Framer-quality, coded)",
      "Product UI and dashboards",
      "Performance + SEO + accessibility",
      "Animation systems (GSAP/Framer Motion)",
    ],
    deliverables: [
      "Design system (tokens, components)",
      "Responsive pages + SEO metadata",
      "Animation system + reusable patterns",
      "Performance optimizations + image strategy",
      "Deployment guide + analytics integration",
    ],
    stack: ["Next.js", "Tailwind", "GSAP", "Framer Motion", "Vercel/Cloudflare"],
    image: "/images/tech-1.jpg",
  },
  {
    slug: "brand-digital",
    title: "Brand & Digital",
    short: "Brand systems, landing pages, content structure, and conversion design.",
    long:
      "We help you look enterprise-ready. From brand identity consistency and design systems, to landing pages and content structure — we make your site communicate trust immediately.",
    icon: Sparkles,
    bullets: [
      "Brand system + design consistency",
      "Landing pages + messaging",
      "Conversion optimization + CTAs",
      "Content structure and site architecture",
    ],
    deliverables: [
      "Brand guidelines (lightweight)",
      "UI kit + component library direction",
      "Landing page messaging + hierarchy",
      "Conversion checklist + CTA strategy",
      "Content plan for core pages",
    ],
    stack: ["Design system", "Content", "UI components", "Analytics basics"],
    image: "/images/tech-3.jpg",
  },
];

export const cloudServices = {
  hero: {
    title: "Cloud Services",
    subtext:
      "From cloud migration and Kubernetes to observability and cloud security — we build reliable platforms with clean operations.",
  },
  offerings: [
    {
      icon: Server,
      title: "Cloud Migration",
      desc: "Move workloads with minimal downtime using a clear migration runbook and rollback plan.",
    },
    {
      icon: Layers,
      title: "Kubernetes & Containers",
      desc: "Production clusters, deployments, autoscaling, and rollout strategies that keep teams moving fast.",
    },
    {
      icon: Gauge,
      title: "Observability",
      desc: "Logs, metrics, traces, dashboards, alerting, and incident workflows that reduce downtime.",
    },
    {
      icon: Lock,
      title: "Cloud Security",
      desc: "IAM, least privilege, secure networking, policy-as-code, and audit readiness improvements.",
    },
  ],
  process: [
    { step: "01", title: "Assess", desc: "Audit current architecture, risks, costs, and operational gaps." },
    { step: "02", title: "Design", desc: "Define the target architecture, security controls, and rollout plan." },
    { step: "03", title: "Build", desc: "Implement infra, CI/CD, observability, and best practices." },
    { step: "04", title: "Operate", desc: "Handoff docs, runbooks, training, and continuous improvement." },
  ],
};

export const solutions = {
  hero: {
    title: "Solutions & Industries",
    subtext:
      "We build reusable solution frameworks tailored to your industry — security-first and built to scale.",
  },
  industries: [
    {
      icon: Building2,
      title: "Enterprise IT",
      desc: "Modernize legacy systems, strengthen security, and improve operational reliability.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      desc: "Dashboards, automation, and secure infrastructure for operational efficiency.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      desc: "Security, compliance-minded architecture, and data foundations for analytics and AI.",
    },
    {
      icon: Landmark,
      title: "Finance",
      desc: "Secure access, audit readiness, and resilient infrastructure to reduce risk.",
    },
    {
      icon: ShoppingCart,
      title: "Retail / E-commerce",
      desc: "Performance, scalability, conversion-first UX, and cloud cost optimization.",
    },
    {
      icon: Rocket,
      title: "Startups",
      desc: "Fast MVP delivery, production foundations, and scale plans that avoid rewrites.",
    },
  ],
};

export type CaseStudy = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  metric: string;
  metricValue: number;
  metricLabel: string;
  accentClass: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "AI Support Copilot",
    industry: "SaaS",
    problem: "Support agents needed faster answers across docs, tickets, and product knowledge.",
    solution:
      "Built a RAG copilot with tool integrations (ticket lookup, CRM, knowledge base) and quality evaluation dashboards.",
    results: ["↓ 35% handle time", "↑ 22% CSAT", "99.9% uptime target"],
    image: "/images/tech-1.jpg",
    metric: "↓35%",
    metricValue: 35,
    metricLabel: "handle time",
    accentClass: "service-glow-ai",
  },
  {
    title: "Zero Trust Rollout",
    industry: "Professional Services",
    problem: "Remote teams needed secure access without traditional VPN sprawl.",
    solution:
      "Implemented Zero Trust policies, least privilege access, device posture checks, and centralized logging.",
    results: ["↓ 60% attack surface", "↑ audit readiness", "Faster onboarding"],
    image: "/images/security-1.jpg",
    metric: "↓60%",
    metricValue: 60,
    metricLabel: "attack surface",
    accentClass: "service-glow-cyber",
  },
  {
    title: "Cloud Cost Optimization",
    industry: "E-commerce",
    problem: "High monthly cloud spend and unpredictable scaling costs.",
    solution:
      "Introduced observability, rightsizing, autoscaling rules, and a reserved capacity strategy with reporting.",
    results: ["↓ 28% monthly cost", "Stable latency", "Clear dashboards"],
    image: "/images/cloud-1.jpg",
    metric: "↓28%",
    metricValue: 28,
    metricLabel: "monthly cloud cost",
    accentClass: "service-glow-cloud",
  },
];

export const about = {
  title: "About KBYRA",
  story:
    "We're a technology services team focused on premium delivery. That means clean architecture, reliable operations, security-first thinking, and experiences that look expensive and feel smooth.",
  values: [
    {
      title: "Engineering Quality",
      desc: "Performance, reliability, and maintainability — not quick hacks.",
    },
    {
      title: "Security First",
      desc: "Design decisions consider risk, access, and resilience from day one.",
    },
    {
      title: "Client Clarity",
      desc: "Clear communication, documented plans, and measurable outcomes.",
    },
  ],
};

export const insights = {
  hero: {
    title: "Insights",
    subtext:
      "Practical write-ups on AI systems, cloud platforms, cybersecurity, and building premium websites.",
  },
  posts: [
    {
      title: "How to build a production-ready AI copilot",
      date: "2026-03-01",
      excerpt:
        "A practical blueprint: data ingestion, retrieval, evaluation, monitoring, and governance.",
      tag: "AI",
      readTime: "8 min read",
    },
    {
      title: "Zero Trust for small teams: what actually matters",
      date: "2026-03-01",
      excerpt:
        "A lightweight checklist that improves security without slowing down operations.",
      tag: "Security",
      readTime: "6 min read",
    },
    {
      title: "Cloud observability: the fastest way to reduce downtime",
      date: "2026-03-01",
      excerpt:
        "Dashboards that matter, alerting that isn't noisy, and incident response workflows.",
      tag: "Cloud",
      readTime: "7 min read",
    },
  ],
};

export const contact = {
  title: "Contact",
  subtext:
    "Tell us your goal and timeline. We'll respond with a clear plan and next steps.",
  steps: [
    { title: "Share your requirements", desc: "Quick summary of what you want to build." },
    { title: "We review + propose", desc: "We respond with an action plan and options." },
    { title: "Kickoff & delivery", desc: "We set milestones and start execution." },
  ],
};

export const faq = [
  {
    q: "What is your typical project timeline?",
    a: "Most engagements run 2–8 weeks depending on scope. We define milestones during the discovery phase so you always know exactly where things stand — no surprises, no moving goalposts.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We work across the full stack: Next.js, React, TypeScript and Python for AI/data; AWS, Azure, and GCP for cloud; Terraform for IaC; Docker and Kubernetes for containers; and GSAP/Framer Motion for premium web experiences.",
  },
  {
    q: "How do you approach security?",
    a: "Security-first is our default operating mode, not an add-on. Every engagement includes a baseline security review. For infrastructure work we implement Zero Trust, least privilege, centralized logging, and monitoring from day one.",
  },
  {
    q: "Do you offer retainer or ongoing support?",
    a: "Yes. Many clients retain us post-delivery for ongoing improvements, feature additions, and operational support. We offer flexible monthly retainers sized to your team's needs.",
  },
  {
    q: "How is pricing structured?",
    a: "We work project-basis with milestone payments. You get a clear scope, timeline, and fixed price before we start — no surprise invoices. Discovery calls are always free and carry no commitment.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We're comfortable integrating with in-house teams as embedded specialists, or taking full ownership of a workstream. Either way, we document everything cleanly for a smooth handoff.",
  },
];

export const testimonials = [
  {
    quote:
      "KBYRA shipped our AI copilot in 6 weeks. Clean code, clear communication, and it actually works in production with real users.",
    name: "Sarah Chen",
    title: "CTO, DataFlow SaaS",
    initials: "SC",
  },
  {
    quote:
      "Zero Trust rollout with zero drama. They came in with a clear plan, executed cleanly, and we passed our security audit on the first attempt.",
    name: "Marcus Williams",
    title: "VP Engineering, Apex Consulting",
    initials: "MW",
  },
  {
    quote:
      "Cut our cloud costs 28% in 8 weeks. No fluff — just a structured optimization plan and measurable results we could show the board.",
    name: "Jennifer Park",
    title: "Head of Platform, RetailCo",
    initials: "JP",
  },
];
