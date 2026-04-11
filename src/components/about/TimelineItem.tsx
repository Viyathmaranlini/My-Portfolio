"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TimelineEntry } from "@/types";

interface Props {
  entry: TimelineEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: Props) {
  const isEven = index % 2 === 0;
  const isVolunteer = entry.type === "volunteer";

  return (
    <motion.div
      className="relative flex items-center gap-8 mb-16"
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={`absolute left-1/2 -translate-x-1/2
                      w-4 h-4 rounded-full border-4 border-background z-10
                      ${isVolunteer ? "bg-green-400" : "bg-primary"}`} />

      <div
        className={`w-full md:w-5/12 bg-surface rounded-xl border overflow-hidden
                    ${isVolunteer ? "border-green-400/20" : "border-white/5"}
                    ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
      >
        {entry.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          </div>
        )}

        <div className={`p-6 ${isEven ? "md:text-right" : ""}`}>
          <div className={`flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}>
            <span className="text-primary font-mono text-sm">{entry.year}</span>
            {isVolunteer && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 font-mono">
                Volunteer
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold mt-1">{entry.title}</h3>
          <p className="text-muted text-sm">{entry.company}</p>
          <p className="text-muted text-sm mt-2">{entry.description}</p>
        </div>
      </div>
    </motion.div>
  );
}