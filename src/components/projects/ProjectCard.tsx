"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiExternalLink, FiClock } from "react-icons/fi";
import { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const isComingSoon = project.title === "Coming Soon";
  const projectNum = `Project ${index + 1}`;

  return (
    <motion.div
      className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {isComingSoon ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-light">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FiClock size={36} className="text-primary/30" />
            </motion.div>
            <span className="text-primary/50 font-mono text-sm mt-3">Coming Soon</span>
          </div>
        ) : (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        )}

        {/* Project Number Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <span className="text-xs font-mono text-primary font-medium">{projectNum}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {!isComingSoon && (
          <>
            <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded-full bg-surface-light text-muted border border-border"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-surface-light text-muted border border-border">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    <FiGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  View Details <FiArrowRight size={14} />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}