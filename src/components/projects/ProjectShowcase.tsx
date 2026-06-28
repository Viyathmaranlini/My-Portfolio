"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

const categories = [
  { key: "all", label: "All Projects", icon: "\u2728" },
  { key: "fullstack", label: "Full Stack", icon: "\u{1F310}" },
  { key: "ml", label: "Machine Learning", icon: "\u{1F916}" },
  { key: "data", label: "Data Analysis", icon: "\u{1F4CA}" },
  { key: "cloud", label: "Cloud / DevOps", icon: "\u2601\uFE0F" },
  { key: "coming-soon", label: "Coming Soon", icon: "\u{1F680}" },
];

export default function ProjectShowcase() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects.filter((p) => p.category !== "coming-soon")
    : projects.filter((p) => p.category === active);

  const totalProjects = projects.filter((p) => p.category !== "coming-soon").length;
  const comingSoonCount = projects.filter((p) => p.category === "coming-soon").length;

  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.p
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Selected work and{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
            developer projects
          </span>
        </motion.h2>
        <motion.p
          className="text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A collection of projects showcasing my skills across different domains
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">{totalProjects}</p>
            <p className="text-xs text-muted">Completed</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">{comingSoonCount}</p>
            <p className="text-xs text-muted">In Progress</p>
          </div>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {categories.map((cat) => {
          const count = cat.key === "all"
            ? totalProjects
            : projects.filter((p) => p.category === cat.key).length;

          if (count === 0 && cat.key !== "all") return null;

          return (
            <motion.button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                active === cat.key
                  ? "bg-primary text-background shadow-lg shadow-primary/20"
                  : "bg-surface text-muted border border-border hover:border-primary/30 hover:text-white"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{cat.icon}</span>
              {cat.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                active === cat.key
                  ? "bg-background/20"
                  : "bg-surface-light"
              }`}>
                {count}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-muted text-lg">No projects in this category yet.</p>
          <p className="text-muted text-sm mt-2">Check back soon!</p>
        </motion.div>
      )}
    </SectionWrapper>
  );
}