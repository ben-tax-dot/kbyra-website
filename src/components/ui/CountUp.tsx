"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
};

export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            // Ease out quart
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * to;
            setValue(parseFloat(current.toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
