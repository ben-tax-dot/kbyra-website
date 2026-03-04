"use client";

/**
 * ScrambleText — reveals text with a character-scramble effect.
 * Random characters cycle into place from left to right.
 * Great for section labels, badges, and accent text.
 */

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export default function ScrambleText({ text, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref as any, { once: true });
  const reduced = useReducedMotion();

  const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];
  const scrambled = text.replace(/[^ ]/g, randomChar);

  const [display, setDisplay] = useState(reduced ? text : scrambled);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(text);
      return;
    }

    const timer = setTimeout(() => {
      let step = 0;
      const totalSteps = text.length * 3;

      const interval = setInterval(() => {
        step++;
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              const revealAt = Math.floor((i / text.length) * totalSteps);
              if (step >= revealAt) return char;
              return randomChar();
            })
            .join("")
        );
        if (step >= totalSteps) clearInterval(interval);
      }, 30);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, text, delay, reduced]);

  return (
    <span ref={ref} className={`font-mono tracking-wider ${className}`}>
      {display}
    </span>
  );
}
