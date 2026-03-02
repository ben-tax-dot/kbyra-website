/**
 * ── KBYRA Motion Configuration ──────────────────────────────────────
 * Global "knobs" — change any value here to tune the whole site's feel.
 *
 * Intensity guide:
 *   Low    → reduce distance/duration, disable blur
 *   Medium → defaults below
 *   High   → increase distance, add extra stagger
 */

export const MOTION = {
  // ── Scroll reveal ──────────────────────────────────────
  reveal: {
    distance:  24,       // px   — how far items travel up on enter  (try 16–48)
    duration:  0.5,      // s    — animation duration                (try 0.3–0.8)
    blur:       0,       // px   — starting blur, fades to 0         (0 = off)
    stagger:   0.06,     // s    — per-item delay in a list          (try 0.03–0.12)
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },

  // ── Parallax ───────────────────────────────────────────
  parallax: {
    strength:  8,        // %    — background layer offset          (try 4–12)
  },

  // ── Custom cursor ─────────────────────────────────────
  cursor: {
    dotSize:        8,   // px   — center dot diameter              (try 6–10)
    ringSize:      28,   // px   — outer ring diameter              (try 24–36)
    ringStiffness: 150,  // spring stiffness for ring lag           (100=laggy, 300=snappy)
    ringDamping:    18,  // spring damping for ring
  },

  // ── Button / link micro-interactions ──────────────────
  button: {
    pressScale:  0.98,   // tap scale                              (try 0.96–0.99)
    hoverY:       -2,    // px lift on hover
  },

  // ── Card hover ─────────────────────────────────────────
  card: {
    hoverY:       -6,    // px lift on hover
  },

  // ── Generic spring (shared) ────────────────────────────
  spring: {
    stiffness: 300,
    damping:    28,
    mass:      0.8,
  },
} as const;

export type MotionConfig = typeof MOTION;
