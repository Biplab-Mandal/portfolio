"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.65,
      }}
      className="
        relative
        left-1/2
        mx-auto
        mb-16
        flex
        w-screen
        -translate-x-1/2
        flex-col
        items-center
        text-center
        md:mb-20
      "
    >
      {/* Career */}
      <p
        className="
          text-sm
          font-medium
          uppercase
          tracking-[0.35em]
          text-cyan-400
        "
      >
        Career
      </p>

      {/* Heading */}
      <h2
        className="
          mt-4
          text-5xl
          font-black
          tracking-tight
          text-white
          sm:text-6xl
          md:text-7xl
        "
      >
        Work{" "}
        <span
          className="
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-indigo-400
            bg-clip-text
            text-transparent
          "
        >
          Experience
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-5
          w-full
          max-w-3xl
          px-4
          text-center
          text-base
          leading-8
          text-slate-400
          sm:px-6
          sm:text-lg
        "
      >
        Building AI-powered applications and scalable software through
        hands-on experience across AI engineering and application
        development.
      </p>

      {/* Accent Line */}
      <div
        className="
          mx-auto
          mt-7
          h-px
          w-20
          bg-gradient-to-r
          from-cyan-400
          to-indigo-500
        "
      />
    </motion.div>
  );
}