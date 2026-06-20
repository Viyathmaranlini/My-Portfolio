"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CertificateCard from "./CertificateCard";
import { certificates } from "@/lib/data";

export default function CertificateSection() {
  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-16">
        <motion.p
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Credentials
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Certificates &{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
            Achievements
          </span>
        </motion.h2>
        <motion.p
          className="text-muted max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Professional certifications and courses that validate my expertise
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}