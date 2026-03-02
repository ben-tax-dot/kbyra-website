"use client";

/**
 * Scroll-triggered reveal — Framer Motion with spring easing.
 * Respects prefers-reduced-motion automatically.
 *
 * Knobs → src/lib/motion.ts → MOTION.reveal
 */

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION } from "@/lib/motion";

type Props = {
  children:  ReactNode;
  className?: string;
  delay?:    number;
  distance?: number;
  duration?: number;
};

export default function ScrollReveal({
  children,
  className  = "",
  delay      = 0,
  distance   = MOTION.reveal.distance,
  duration   = MOTION.reveal.duration,
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, y: distance, filter: `blur(${MOTION.reveal.blur}px)` }
      }
      whileInView={
        reduced
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: reduced ? 0.15 : duration,
        ease:     MOTION.reveal.ease,
        delay:    reduced ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
