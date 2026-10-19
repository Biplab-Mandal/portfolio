import Container from "@/components/layout/container";
import ExperienceHeader from "./experience-header";
import ExperienceTimeline from "./experience-timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        scroll-mt-24
        py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-1/2
          h-[450px]
          w-[450px]
          -translate-y-1/2
          rounded-full
          bg-indigo-500/[0.025]
          blur-[130px]
        "
      />

      {/* Header */}
      <Container>
        <ExperienceHeader />
        <div className="relative mt-12">
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
}