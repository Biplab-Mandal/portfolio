"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface FloatingBadgeProps {
  label: string;
  color: string;
  style?: CSSProperties;
}

export default function FloatingBadge({
  label,
  color,
  style,
}: FloatingBadgeProps) {
  const animationSeed = [...label].reduce(
    (seed, character) => seed + character.charCodeAt(0),
    0
  );
  const duration = 4 + (animationSeed % 300) / 100;
  const xMovement = (animationSeed % 81) / 10 - 4;
  const yMovement = 6 + (animationSeed % 41) / 10;

  return (
    <motion.div
      animate={{
        x: [0, xMovement, 0],
        y: [0, -yMovement, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={style}
      className={`
        absolute
        z-30
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        backdrop-blur-xl
        shadow-lg
        ${color}
      `}
    >
      {label}
    </motion.div>
  );
}