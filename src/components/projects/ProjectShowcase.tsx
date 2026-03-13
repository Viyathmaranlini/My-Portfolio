"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectShowcase() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <p className="text-muted mb-12">A selection of things I've built.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}