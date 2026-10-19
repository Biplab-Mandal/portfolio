"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FloatingProps = {
  children: ReactNode;
  className?: string;
};

export default function Floating({
  children,
  className,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}