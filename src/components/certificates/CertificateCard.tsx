"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiAward } from "react-icons/fi";
import { Certificate } from "@/types";

interface Props {
  cert: Certificate;
  index: number;
}

export default function CertificateCard({ cert, index }: Props) {
  if (!cert) return null;

  const ref = useRef<HTMLDivElement>(null);

  // State to handle image loading errors gracefully
  const [imgSrc, setImgSrc] = useState<string>(cert.image || "");
  const [hasError, setHasError] = useState<boolean>(false);

  // Keeping your exact dynamic tilt values and configurations
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
        {/* Outer Card Layout matching Project Card layout exactly */}
        <div className="relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

          {/* 🖼️ Main Image Screen (Swapped 'h-44 w-full' with 'aspect-[16/10]') */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-950/40 border-b border-white/5">
            {imgSrc ? (
              <>
                <Image
                  src={imgSrc}
                  alt={cert.title}
                  fill
                  className="object-contain p-3 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  onError={() => {
                    if (!hasError) {
                      setHasError(true);
                      // Fallback premium abstract wallpaper if certificate link breaks
                      setImgSrc("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80");
                    }
                  }}
                />
                
                {/* Visual overlays matching Project Card style */}
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-40 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-t from-surface/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface-light">
                <FiAward size={48} className="text-primary/20" />
              </div>
            )}

            {/* 📅 Date/Year Floating Badge (Top Left - Floating like project index) */}
            <div className="absolute top-3 left-3 z-20">
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary">
                {cert.date}
              </span>
            </div>
          </div>

          {/* 📝 Text Content & Button Info Block */}
          <div className="p-5 relative z-10">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-wide line-clamp-1">
              {cert.title}
            </h3>
            
            <p className="text-accent font-medium text-sm mt-1">
              {cert.issuer}
            </p>

            {/* 🏷️ Skill Tags Grid rendering below descriptions */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* 🔗 Dynamic Action Button matching Project Card view link exactly */}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/20 hover:border-primary/40 hover:gap-3 transition-all duration-300 w-fit"
              >
                Verify Credential <FiArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}