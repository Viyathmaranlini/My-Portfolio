"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import CertificateCard from "./CertificateCard";
import { certificates } from "@/lib/data";

export default function CertificateSection() {
  return (
    <SectionWrapper id="certificates">
      <h2 className="text-3xl font-bold mb-2">Certificates</h2>
      <p className="text-muted mb-12">
        Professional certifications and courses I have completed.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}