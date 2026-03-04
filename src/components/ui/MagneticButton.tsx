"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || reduced) return;
    const r = ref.current.getBoundingClientRect();
    setXY({
      x: (e.clientX - r.left - r.width / 2) * strength,
      y: (e.clientY - r.top - r.height / 2) * strength,
    });
  }

  return (
    <motion.div
      ref={ref}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setXY({ x: 0, y: 0 })}
      className={className}
    >
      {children}
    </motion.div>
  );
}
