"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Certificate } from "@/types";

interface Props {
  cert: Certificate;
  index: number;
}

export default function CertificateCard({ cert, index }: Props) {
  return (
    <motion.div
      className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-primary">{cert.date}</span>
          {cert.credentialUrl ? (
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
              <FiExternalLink size={16} />
            </a>
          ) : null}
        </div>
        <h3 className="text-base font-bold mb-1 line-clamp-2">{cert.title}</h3>
        <p className="text-muted text-sm mb-3">{cert.issuer}</p>
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span key={skill} className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
