"use client";

import { useEffect, useState } from "react";

export default function useMouseParallax(strength = 12) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;

      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [strength]);

  return offset;
}