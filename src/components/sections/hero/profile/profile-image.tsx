"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileImageProps {
  x: number;
  y: number;
}

export default function ProfileImage({
  x,
  y,
}: ProfileImageProps) {
  return (
    <motion.div
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="relative"
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          scale-110
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-full
          border-4
          border-white/20
          shadow-[0_0_80px_rgba(6,182,212,.25)]
        "
      >
        <Image
          src="/images/profile.jpeg"
          alt="Biplab Mandal"
          width={260}
          height={260}
          priority
          className="h-[260px] w-[260px] rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}