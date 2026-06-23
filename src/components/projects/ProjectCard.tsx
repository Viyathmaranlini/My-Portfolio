"use client";

import { useRef } from "react";
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
  const projectNum = `Project ${index + 1}`;
  const ref = useRef<HTMLDivElement>(null);

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
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
            <span className="text-xs font-mono text-primary font-medium">{projectNum}</span>
          </div>
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
        {/* Hover glow overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="w-full h-full bg-surface-light" />
          )}

          {/* Project Number Badge */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
            <span className="text-xs font-mono text-primary font-semibold">{projectNum}</span>
          </div>

          {/* Tags - show on hover */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface/80 backdrop-blur-sm text-white border border-white/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface/80 backdrop-blur-sm text-white border border-white/10">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 relative z-10">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* View Details Button */}
          <a
            href={project.liveUrl || project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/20 hover:border-primary/40 hover:gap-3 transition-all duration-300"
          >
            View Details <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}