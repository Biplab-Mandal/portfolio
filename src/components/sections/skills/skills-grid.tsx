"use client";

import SkillCard from "./skill-card";
import { skillCategories } from "./skills-data";

export default function SkillsGrid() {
  return (
    <div className="w-full">
      <div
        className="
          grid
          w-full
          min-w-0
          grid-cols-1
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="min-w-0 w-full"
          >
            <SkillCard
              category={category}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}