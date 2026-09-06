"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li" | "p" | "span";
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  ariaLabelledBy?: string;
};

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 26,
  className,
  id,
  style,
  ariaLabelledBy,
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      aria-labelledby={ariaLabelledBy}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.62, ease: [0.22, 0.9, 0.24, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
