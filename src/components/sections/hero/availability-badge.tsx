"use client";

import { motion } from "framer-motion";

export default function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 backdrop-blur-md"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
      </span>

      <span className="text-sm font-medium text-cyan-300">
        Available for AI/ML Engineer Roles
      </span>
    </motion.div>
  );
}