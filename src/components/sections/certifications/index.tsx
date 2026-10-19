import Container from "@/components/layout/container";

import CertificationsGrid from "./certifications-grid";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        relative
        py-32
      "
    >
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Certifications
          </h2>
        </div>

        {/* Cards */}
        <CertificationsGrid />
      </Container>
    </section>
  );
}