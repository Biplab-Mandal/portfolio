"use client";

import FadeUp from "@/components/animations/fade-up";

const stats = [
  {
    number: "12+",
    label: "Projects Built",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "Open",
    label: "To Work",
  },
];

export default function HeroStats() {
  return (
    <FadeUp delay={0.55}>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              px-6
              py-5
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
            "
          >
            <h3 className="text-5xl font-bold text-cyan-400">
              {item.number}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </FadeUp>
  );
}