"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import TimelineItem from "./TimelineItem";
import { timeline } from "@/lib/data";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold mb-2">About Me</h2>
      <p className="text-muted mb-12 max-w-2xl">
       Undergraduate at NSBM Green University.Volunteering in tech communities and organizing hackathons.
      </p>

      {/* Vertical center line */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0
                        w-0.5 bg-white/10" />

        {timeline.map((entry, i) => (
          <TimelineItem key={entry.year} entry={entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}