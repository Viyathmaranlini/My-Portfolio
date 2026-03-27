"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { dsProjects, webProjects } from "@/lib/data";

export default function ProjectShowcase() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <p className="text-muted mb-12">A selection of things I&apos;ve built.</p>

      {/* Data Science & ML */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-7 rounded-full bg-gradient-to-b from-emerald-500 to-cyan-500" />
          <h3 className="text-xl font-semibold">Data Science & ML</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {dsProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-7 rounded-full bg-gradient-to-b from-emerald-500 to-cyan-500" />
          <h3 className="text-xl font-semibold">Web Development</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}