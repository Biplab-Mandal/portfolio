"use client";

import { useState } from "react";

export default function useCardSpotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return {
    position,
    handleMouseMove,
  };
}