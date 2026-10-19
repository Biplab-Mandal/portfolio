"use client";

import { motion } from "framer-motion";

export default function Glow() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.35, 0.6, 0.35],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        h-[380px]
        w-[380px]
        rounded-full
        bg-cyan-500/20
        blur-[100px]
      "
    />
  );
}