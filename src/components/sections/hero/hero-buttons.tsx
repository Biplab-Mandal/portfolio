"use client";

import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Primary */}
      <a
        href="https://github.com/Biplab-Mandal"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-indigo-500
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(6,182,212,.35)]
        "
      >
        View Projects

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      {/* Secondary */}
      <a
        href="#contact"
        className="
          rounded-2xl
          border
          border-white/10
          px-8
          py-4
          text-lg
          text-white
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-cyan-500/10
        "
      >
        Contact Me
      </a>

      {/* Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-indigo-500/40
          px-8
          py-4
          text-lg
          text-indigo-300
          transition-all
          duration-300
          hover:bg-indigo-500/10
        "
      >
        <Download size={18} />
        Resume
      </a>
    </div>
  );
}