import Hero             from "@/components/sections/Hero";
import Marquee          from "@/components/sections/Marquee";
import Stats            from "@/components/sections/Stats";
import Services         from "@/components/sections/Services";
import StickyStory      from "@/components/sections/StickyStory";
import TechStack        from "@/components/sections/TechStack";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import Testimonials     from "@/components/sections/Testimonials";
import FAQ              from "@/components/sections/FAQ";
import CTA              from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      {/* Full-screen hero — spring entrance + floating cards */}
      <Hero />

      {/* Dual-row scrolling capabilities marquee */}
      <Marquee />

      {/* Big numbers with CountUp animation */}
      <Stats />

      {/* Service cards — gradient accent, spring hover */}
      <Services />

      {/* Scroll-driven process storytelling */}
      <StickyStory />

      {/* Technology stack dual marquee */}
      <TechStack />

      {/* Case studies with prominent metrics */}
      <CaseStudiesPreview />

      {/* Social proof */}
      <Testimonials />

      {/* FAQ accordion */}
      <FAQ />

      {/* Conversion CTA — animated buttons */}
      <CTA />
    </main>
  );
}
