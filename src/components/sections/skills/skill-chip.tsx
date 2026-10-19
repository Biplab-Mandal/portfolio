import type { SkillColor } from "./types";

interface Props {
  text: string;
  color?: SkillColor;
}

const chipStyles = {
  cyan: {
    border: "border-cyan-400/30",
    background: "bg-cyan-400/[0.06]",
    text: "text-cyan-300",
    hoverBorder: "hover:border-cyan-400/50",
    hoverBackground: "hover:bg-cyan-400/10",
    hoverText: "hover:text-cyan-200",
  },

  violet: {
    border: "border-violet-400/30",
    background: "bg-violet-400/[0.06]",
    text: "text-violet-300",
    hoverBorder: "hover:border-violet-400/50",
    hoverBackground: "hover:bg-violet-400/10",
    hoverText: "hover:text-violet-200",
  },

  blue: {
    border: "border-blue-400/30",
    background: "bg-blue-400/[0.06]",
    text: "text-blue-300",
    hoverBorder: "hover:border-blue-400/50",
    hoverBackground: "hover:bg-blue-400/10",
    hoverText: "hover:text-blue-200",
  },

  amber: {
    border: "border-yellow-400/30",
    background: "bg-yellow-400/[0.06]",
    text: "text-yellow-300",
    hoverBorder: "hover:border-yellow-400/50",
    hoverBackground: "hover:bg-yellow-400/10",
    hoverText: "hover:text-yellow-200",
  },

  green: {
    border: "border-green-400/30",
    background: "bg-green-400/[0.06]",
    text: "text-green-300",
    hoverBorder: "hover:border-green-400/50",
    hoverBackground: "hover:bg-green-400/10",
    hoverText: "hover:text-green-200",
  },

  sky: {
    border: "border-sky-400/30",
    background: "bg-sky-400/[0.06]",
    text: "text-sky-300",
    hoverBorder: "hover:border-sky-400/50",
    hoverBackground: "hover:bg-sky-400/10",
    hoverText: "hover:text-sky-200",
  },

  rose: {
    border: "border-rose-400/30",
    background: "bg-rose-400/[0.06]",
    text: "text-rose-300",
    hoverBorder: "hover:border-rose-400/50",
    hoverBackground: "hover:bg-rose-400/10",
    hoverText: "hover:text-rose-200",
  },
};

export default function SkillChip({
  text,
  color = "cyan",
}: Props) {
  const style = chipStyles[color];

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-md
        border
        ${style.border}
        ${style.background}
        px-7
        py-3.5
        text-base
        font-medium
        ${style.text}
        transition-all
        duration-300
        ${style.hoverBorder}
        ${style.hoverBackground}
        ${style.hoverText}
      `}
    >
      {text}
    </span>
  );
}