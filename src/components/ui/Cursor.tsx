"use client";

/**
 * Custom cursor — white dot + spring-lagged ring.
 * Only renders on pointer-fine (mouse) devices; touch devices keep default.
 *
 * Knobs → src/lib/motion.ts → MOTION.cursor
 */

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { MOTION } from "@/lib/motion";

export default function Cursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot: near-instant snap
  const dotX = useSpring(mouseX, { stiffness: 3000, damping: 120, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 3000, damping: 120, mass: 0.1 });

  // Ring: spring lag for "premium" feel
  const ringX = useSpring(mouseX, {
    stiffness: MOTION.cursor.ringStiffness,
    damping:   MOTION.cursor.ringDamping,
    mass:      0.6,
  });
  const ringY = useSpring(mouseY, {
    stiffness: MOTION.cursor.ringStiffness,
    damping:   MOTION.cursor.ringDamping,
    mass:      0.6,
  });

  const [visible,      setVisible]      = useState(false);
  const [hovered,      setHovered]      = useState(false);
  const [clicked,      setClicked]      = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable on non-touch, pointer-fine devices
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsPointerFine(mq.matches);
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='expand']"
      );
      setHovered(!!el);
    };

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseover",  onOver);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseover",  onOver);
    };
  }, [mouseX, mouseY]);

  if (!isPointerFine) return null;

  const { dotSize, ringSize } = MOTION.cursor;

  return (
    <>
      {/* ── Dot ──────────────────────────────────────────── */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white"
        style={{
          width:      dotSize,
          height:     dotSize,
          x:          dotX,
          y:          dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:   clicked ? 0.5 : hovered ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />

      {/* ── Ring ─────────────────────────────────────────── */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-white/50"
        style={{
          x:          ringX,
          y:          ringY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          width:           hovered ? ringSize * 1.7 : ringSize,
          height:          hovered ? ringSize * 1.7 : ringSize,
          opacity:         visible ? (hovered ? 0.35 : 0.6) : 0,
          borderColor:     hovered ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.5)",
          backgroundColor: hovered ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0)",
          scale:           clicked ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
    </>
  );
}
