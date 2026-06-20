"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { Certificate } from "@/types";

interface Props {
  cert: Certificate;
  index: number;
}

export default function CertificateCard({ cert, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { damping: 20, stiffness: 150 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="group relative"
      >
        <div className="relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Certificate Image */}
          <div className="relative h-44 w-full overflow-hidden">
            {cert.image ? (
              <>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/30 to-transparent" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface-light">
                <FiAward size={48} className="text-primary/20" />
              </div>
            )}

            {/* Badge */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <span className="text-xs font-mono text-primary">{cert.date}</span>
            </div>

            {/* Verify link */}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-sm border border-border text-muted hover:text-primary hover:border-primary/30 transition-all"
              >
                <FiExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Content */}
          <div className="relative p-5">
            <h3 className="text-base font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm text-accent mb-4">{cert.issuer}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface-light text-muted border border-border group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}