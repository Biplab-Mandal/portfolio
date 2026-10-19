"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import roles from "./roles";

export default function TechRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center text-3xl font-medium">
      <span className="text-slate-300">AI Engineer</span>

      <span className="mx-3 text-cyan-500">•</span>

      <div className="relative min-w-[280px] h-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={roles[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 font-semibold text-cyan-400"
          >
            {roles[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}