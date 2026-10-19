import Container from "@/components/layout/container";

import SkillsHeader from "./skills-header";
import SkillsGrid from "./skills-grid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 py-32"
    >
      <Container>
        <div className="flex justify-center">
            <SkillsHeader />
        </div>
        <div className="flex justify-center">
            <SkillsGrid />
        </div>
      </Container>
    </section>
  );
}