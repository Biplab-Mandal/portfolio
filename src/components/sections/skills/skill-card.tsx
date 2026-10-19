"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import useCardSpotlight from "@/hooks/use-card-spotlight";
import SkillChip from "./skill-chip";
import { SkillCategory } from "./types";

interface Props {
  category: SkillCategory;
  index: number;
}

const accent = {
  cyan: {
    border: "hover:border-cyan-400/50",
    title: "text-cyan-300",
    glow: "hover:shadow-[0_0_55px_rgba(34,211,238,.10)]",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    light: "rgba(34,211,238,.10)",
    top: "bg-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
    icon: "text-cyan-300",
  },
  violet: {
    border: "hover:border-violet-400/50",
    title: "text-violet-300",
    glow: "hover:shadow-[0_0_55px_rgba(139,92,246,.10)]",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    light: "rgba(139,92,246,.10)",
    top: "bg-violet-400",
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/20",
    icon: "text-violet-300",
  },
  blue: {
    border: "hover:border-blue-400/50",
    title: "text-blue-300",
    glow: "hover:shadow-[0_0_55px_rgba(59,130,246,.10)]",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    light: "rgba(59,130,246,.10)",
    top: "bg-blue-400",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    icon: "text-blue-300",
  },
  amber: {
    border: "hover:border-yellow-400/50",
    title: "text-yellow-300",
    glow: "hover:shadow-[0_0_55px_rgba(251,191,36,.10)]",
    badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
    light: "rgba(251,191,36,.10)",
    top: "bg-yellow-400",
    iconBg: "bg-yellow-500/10",
    iconBorder: "border-yellow-500/20",
    icon: "text-yellow-300",
  },
  green: {
    border: "hover:border-green-400/50",
    title: "text-green-300",
    glow: "hover:shadow-[0_0_55px_rgba(34,197,94,.10)]",
    badge: "bg-green-500/10 text-green-300 border-green-500/30",
    light: "rgba(34,197,94,.10)",
    top: "bg-green-400",
    iconBg: "bg-green-500/10",
    iconBorder: "border-green-500/20",
    icon: "text-green-300",
  },
  sky: {
    border: "hover:border-sky-400/50",
    title: "text-sky-300",
    glow: "hover:shadow-[0_0_55px_rgba(14,165,233,.10)]",
    badge: "bg-sky-500/10 text-sky-300 border-sky-500/30",
    light: "rgba(14,165,233,.10)",
    top: "bg-sky-400",
    iconBg: "bg-sky-500/10",
    iconBorder: "border-sky-500/20",
    icon: "text-sky-300",
  },
  rose: {
    border: "hover:border-rose-400/50",
    title: "text-rose-300",
    glow: "hover:shadow-[0_0_55px_rgba(244,63,94,.10)]",
    badge: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    light: "rgba(244,63,94,.10)",
    top: "bg-rose-400",
    iconBg: "bg-rose-500/10",
    iconBorder: "border-rose-500/20",
    icon: "text-rose-300",
  },
};

export default function SkillCard({ category, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const { position, handleMouseMove } = useCardSpotlight();

  const style =
    accent[category.color as keyof typeof accent] ?? accent.cyan;

  const previewCount = 4;

  const skills = expanded
    ? category.skills
    : category.skills.slice(0, previewCount);

  const Icon = category.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.35,
      }}
      onMouseMove={handleMouseMove}
      onClick={() => setExpanded((v) => !v)}
      className={`
        group
        relative
        flex
        min-h-[200px]
        min-w-0
        max-w-full
        w-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-white/10
        bg-[#0b101d]/75
        px-7
        py-7
        backdrop-blur-xl
        transition-all
        duration-500
        ${style.border}
        ${style.glow}
      `}
    >
      {/* Reference-style top accent */}
      <div
        className={`
          pointer-events-none
          absolute
          left-8
          right-8
          top-0
          h-[2px]
          rounded-full
          opacity-80
          ${style.top}
        `}
      />

      {/* Subtle spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            320px circle at ${position.x}px ${position.y}px,
            ${style.light},
            transparent 72%
          )`,
        }}
      />

      <div className="relative z-10 flex h-full flex-1 flex-col">
        {/* Header */}
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{
              rotate: [0, -8, 8, -4, 0],
              scale: 1.05,
            }}
            transition={{ duration: 0.45 }}
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              ${style.iconBg}
              ${style.iconBorder}
            `}
          >
            <Icon className={`h-5 w-5 ${style.icon}`} />
          </motion.div>

          <div className="min-w-0 flex-1 pt-0.5">
            <h3
              className={`
                text-xl
                font-semibold
                leading-7
                tracking-tight
                ${style.title}
              `}
            >
              {category.title}
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-slate-400">
              {category.description}
            </p>
          </div>

          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 pt-1"
          >
            <ChevronDown size={18} className="text-slate-500" />
          </motion.div>
        </div>

        {/* Skills — no divider, reference-style chip area */}
        <motion.div
          layout
          className="mt-7 flex flex-wrap content-start gap-2.5"
        >
          <AnimatePresence>
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{
                  delay: i * 0.025,
                  duration: 0.22,
                }}
              >
                <SkillChip 
                text={skill}
                color={category.color}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More */}
        {!expanded && category.skills.length > previewCount && (
          <motion.p
            layout
            className="mt-3 text-sm font-medium text-slate-500"
          >
            +{category.skills.length - previewCount} more
          </motion.p>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <motion.span
            whileHover={{ scale: 1.04 }}
            className={`
              rounded-full
              border
              px-3
              py-1
              text-xs
              font-medium
              ${style.badge}
            `}
          >
            ● {category.badge}
          </motion.span>

          <span className="text-xs tracking-wide text-slate-500">
            {expanded ? "Collapse" : "Expand"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}