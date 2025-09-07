// app/components/TextFX.tsx
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren, CSSProperties } from "react";

type Common = {
  className?: string;
  style?: CSSProperties;
  /** Accessibility: fall back to a subtle highlight for users who prefer reduced motion */
  reducedStyle?: CSSProperties;
};

export function PulseText({
  children,
  className,
  style,
  reducedStyle,
  scale = 1.06,
  duration = 1.8,
}: PropsWithChildren<{ scale?: number; duration?: number } & Common>) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return (
      <span className={className} style={{ ...style, ...reducedStyle }}>
        {children}
      </span>
    );
  }
  return (
    <motion.span
      className={className}
      style={style}
      initial={{ scale: 1, opacity: 0.95 }}
      animate={{ scale: [1, scale, 1], opacity: [0.95, 1, 0.95] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}

export function FloatText({
  children,
  className,
  style,
  reducedStyle,
  amplitude = 8,          // px up/down
  duration = 3.2,
  rotate = 0.25,          // gentle sway (deg)
}: PropsWithChildren<{ amplitude?: number; duration?: number; rotate?: number } & Common>) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return (
      <span className={className} style={{ ...style, ...reducedStyle }}>
        {children}
      </span>
    );
  }
  return (
    <motion.span
      className={className}
      style={style}
      animate={{
        y: [0, -amplitude, 0, amplitude, 0],
        rotate: [0, -rotate, 0, rotate, 0],
        filter: ["blur(0px)", "blur(0.2px)", "blur(0px)"], // barely-there “limbo” vibe
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
}

/** Combine both for a “limbo” feel: slow float + subtle pulse */
export function LimboText({
  children,
  className,
  style,
  reducedStyle,
}: PropsWithChildren<Common>) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return (
      <span className={className} style={{ ...style, ...reducedStyle }}>
        {children}
      </span>
    );
  }
  return (
    <motion.span
      className={className}
      style={style}
      animate={{
        y: [0, -10, 0, 10, 0],
        rotate: [0, -0.3, 0, 0.3, 0],
        scale: [1, 1.02, 1, 0.98, 1],
        opacity: [0.98, 1, 0.98, 1, 0.98],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}
