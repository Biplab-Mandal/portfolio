"use client";

import CertificationCard from "./certification-card";
import { certifications } from "./certifications-data";

export default function CertificationsGrid() {
  return (
    <div className="w-full">
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}