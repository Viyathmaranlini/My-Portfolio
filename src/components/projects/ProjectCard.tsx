"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  if (!project) return null;

  const isComingSoon = project.title === "Coming Soon";
  const ref = useRef<HTMLDivElement>(null);
  
  // State to handle image loading errors gracefully
  const [imgSrc, setImgSrc] = useState<string>(project.image || "");
  const [hasError, setHasError] = useState<boolean>(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { damping: 25, stiffness: 150 });

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

  if (isComingSoon) {
    return (
      <motion.div
        className="group relative bg-surface rounded-2xl border border-dashed border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="aspect-[16/10] flex flex-col items-center justify-center bg-surface-light relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiClock size={32} className="text-primary/30" />
          </motion.div>
          <span className="text-primary/50 font-mono text-sm mt-3">Coming Soon</span>
          <div className="flex gap-1 mt-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: "0.3s" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/30 animate-pulse" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-white/50">Coming Soon</h3>
          <p className="text-sm text-muted mt-1">{project.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        {/* 🖼️ Main Mockup Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-950/40">
          {imgSrc ? (
            <>
              <Image
                src={imgSrc}
                alt={project.title}
                fill
                className="object-contain p-2 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                onError={() => {
                  if (!hasError) {
                    setHasError(true);
                    setImgSrc("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80");
                  }
                }}
              />
              
              {/* Subtle Overlay Layers for Depth */}
              <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-40 pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-surface/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full bg-surface-light" />
          )}

          {/* 🎯 Project Number Badge (Top Left - Clean & Floating) */}
          <div className="absolute top-3 left-3 z-20">
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary">
              Project {index + 1}
            </span>
          </div>
        </div>

        {/* 📝 Content Info Block */}
        <div className="p-5 relative z-10">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-wide">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* 🏷️ Technology Tags Grid below description */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl || project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/20 hover:border-primary/40 hover:gap-3 transition-all duration-300 w-fit"
          >
            View Details <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}