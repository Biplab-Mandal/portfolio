import FadeUp from "@/components/animations/fade-up";

import AvailabilityBadge from "./availability-badge";
import HeroButtons from "./hero-buttons";
import HeroDescription from "./hero-description";
import TechRotator from "./tech-rotator";

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col">

      {/* Availability */}
      <AvailabilityBadge />

      {/* Heading */}
      <FadeUp delay={0.1}>
        <div className="mt-8">
          <h2 className="text-6xl font-black leading-none text-white md:text-7xl">
            Hi, I&apos;m
          </h2>

          <h1 className="mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-7xl font-black leading-none text-transparent md:text-8xl">
            Biplab.
          </h1>
        </div>
      </FadeUp>

      {/* Role */}
      <FadeUp delay={0.2}>
        <div className="mt-5">
          <TechRotator />
        </div>
      </FadeUp>

      {/* Description */}
      <HeroDescription />

      {/* Buttons */}
      <FadeUp delay={0.45}>
        <div className="mt-10">
          <HeroButtons />
        </div>
      </FadeUp>

    </div>
  );
}