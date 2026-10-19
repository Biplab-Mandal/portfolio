"use client";

import { motion } from "framer-motion";

import { Experience } from "./experience-data";

interface Props {
  experience: Experience;
  index: number;
}

export default function ExperienceItem({
  experience,
  index,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        relative
        mx-auto
        w-full
        max-w-[1500px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#080d1c]/80
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:bg-[#0a1021]
        hover:shadow-[0_0_60px_rgba(34,211,238,0.07)]
        sm:p-7
        md:p-8
      "
    >
      {/* Top Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-cyan-400/[0.035]
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-cyan-400/[0.07]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              {experience.role}
            </h3>

            <p className="mt-2 text-lg font-medium text-cyan-400">
              {experience.company}
            </p>

            {(experience.location ||
              experience.workMode ||
              experience.employmentType) && (
              <p className="mt-1 text-sm text-slate-500">
                {[
                  experience.location,
                  experience.workMode,
                  experience.employmentType,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
          </div>

          {/* Date */}
          {(experience.period || experience.current) && (
            <div
              className="
                flex
                shrink-0
                flex-col
                items-start
                gap-3
                lg:items-end
              "
            >
              {experience.period && (
                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    py-2
                    font-mono
                    text-xs
                    tracking-wide
                    text-slate-400
                  "
                >
                  {experience.period}
                </span>
              )}

              {experience.current && (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-400/30
                    bg-cyan-400/10
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    text-cyan-300
                  "
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  Current role
                </span>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        {experience.description && (
          <p
            className="
              mt-7
              max-w-3xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            {experience.description}
          </p>
        )}

        {experience.highlights?.length ? (
          <>
            <div className="my-7 h-px bg-white/[0.08]" />

            {experience.highlightsLabel && (
              <h4 className="mb-4 text-sm font-semibold text-cyan-300">
                {experience.highlightsLabel}
              </h4>
            )}

            <div className="space-y-4">
              {experience.highlights.map(
                (highlight, highlightIndex) => (
                  <motion.div
                    key={highlight}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        0.15 +
                        index * 0.08 +
                        highlightIndex * 0.06,
                      duration: 0.35,
                    }}
                    className="flex gap-4"
                  >
                    <span
                      className="
                        mt-2.5
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_10px_rgba(34,211,238,0.8)]
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-7
                        text-slate-400
                        sm:text-[15px]
                      "
                    >
                      {highlight}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </>
        ) : null}

        {/* Technologies */}
        {experience.technologies?.length ? (
          <div className="mt-8">
            <p
              className="
                mb-3
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-600
              "
            >
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-400
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/5
                    hover:text-cyan-300
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}