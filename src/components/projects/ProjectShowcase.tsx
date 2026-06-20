"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectShowcase() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
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
          Explore my projects with cover previews. Click view details to see the
          description, technologies, GitHub, and live demo link.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}