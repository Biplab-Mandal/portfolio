import Container from "@/components/layout/container";

import HeroContent from "./hero-content";
import Profile from "./profile";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pt-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
          <HeroContent />

          <div className="flex justify-center">
            <Profile />
          </div>
        </div>
      </Container>
    </section>
  );
}