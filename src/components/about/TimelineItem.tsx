"use client";

import { motion } from "framer-motion";
import { TimelineEntry } from "@/types";

interface Props {
  entry: TimelineEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center gap-8 mb-12"
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Center dot on the vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2
                      w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

      {/* Card — alternates left/right on desktop */}
      <div
        className={`w-full md:w-5/12 p-6 bg-surface rounded-xl border border-white/5
                    ${isEven ? "md:mr-auto md:text-right" : "md:ml-auto"}`}
      >
        <span className="text-primary font-mono text-sm">{entry.year}</span>
        <h3 className="text-lg font-bold mt-1">{entry.title}</h3>
        <p className="text-muted text-sm">{entry.company}</p>
        <p className="text-muted text-sm mt-2">{entry.description}</p>
      </div>
    </motion.div>
  );
}