"use client";

import ExperienceItem from "./experience-item";
import { experiences } from "./experience-data";

export default function ExperienceTimeline() {
  return (
    <div className="relative w-full space-y-8 before:absolute before:bottom-0 before:left-[9px] before:top-3 before:w-px before:bg-cyan-400/25 md:space-y-10">
      {experiences.map((experience, index) => (
        <div
          key={`${experience.company}-${experience.role}`}
          className="relative pl-8 sm:pl-10"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-8 h-5 w-5 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
          />
          <ExperienceItem experience={experience} index={index} />
        </div>
      ))}
    </div>
  );
}