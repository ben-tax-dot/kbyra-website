"use client";

/**
 * TextReveal — word-by-word masked slide-up animation.
 * Each word slides up from behind an overflow:hidden clip.
 * Perfect for premium section headings.
 */

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface Props {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  el?: Tag;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.07,
  el: Tag = "span",
}: Props) {
  const reduced = useReducedMotion();
  const words = useMemo(() => children.split(" ").filter(Boolean), [children]);

  if (reduced) {
    return (
      <Tag className={className}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay }}
        >
          {children}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={children}>
      <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em" }}>
        {words.map((word, i) => (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.08em" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.8,
                delay: delay + i * stagger,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
