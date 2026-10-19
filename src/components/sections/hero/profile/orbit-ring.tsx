"use client";

interface OrbitRingProps {
  size: number;
  duration: number;
  reverse?: boolean;
}

export default function OrbitRing({
  size,
  duration,
  reverse,
}: OrbitRingProps) {
  return (
    <div
      className="orbit-ring absolute rounded-full"
      style={{
        width: size,
        height: size,
        animation: `orbit-ring-rotation ${duration}s linear infinite${reverse ? " reverse" : ""}`,
        background:
          "linear-gradient(135deg, rgba(34,211,238,.6), rgba(59,130,246,.05), rgba(168,85,247,.5))",
        padding: "0.8px",
      }}
    >
      <div className="h-full w-full rounded-full bg-[#07101f]/90" />
    </div>
  );
}