"use client";

import { motion } from "framer-motion";

import Glow from "./glow";
import OrbitRing from "./orbit-ring";
import ProfileImage from "./profile-image";
import FloatingBadge from "./floating-badge";
import { badges } from "./profile-data";

import useMouseParallax from "@/hooks/use-mouse-parallax";

export default function Profile() {
  const offset = useMouseParallax(12);

  return (
    <motion.div
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="relative flex h-[420px] w-[420px] items-center justify-center"
    >
      {/* Background Glow */}
      <Glow />

      {/* Orbit Rings */}
      <OrbitRing size={340} duration={24} />
      <OrbitRing size={300} duration={28} reverse />
      <OrbitRing size={265} duration={18} />

      {/* Profile */}
      <div className="relative z-20">
        <ProfileImage
          x={offset.x * 1.1}
          y={offset.y * 1.1}
        />
      </div>

      {/* Floating Badges */}
      {badges.map((badge) => (
        <FloatingBadge
          key={badge.label}
          label={badge.label}
          color={badge.color}
          style={{
            ...badge.position,
            transform:
              badge.position.left === "50%"
                ? "translateX(-50%)"
                : undefined,
          }}
        />
      ))}
    </motion.div>
  );
}