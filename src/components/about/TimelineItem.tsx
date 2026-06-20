"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { TimelineEntry } from "@/types";

interface Props {
  entry: TimelineEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: Props) {
  const isEven = index % 2 === 0;
  const isVolunteer = entry.type === "volunteer";
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { damping: 20, stiffness: 150 });

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

  return (
    <motion.div
      className="relative flex items-center gap-8 mb-16"
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Center dot with pulse */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className={`w-4 h-4 rounded-full border-4 border-background ${
          isVolunteer ? "bg-green-400" : "bg-primary"
        }`} />
        <div className={`absolute inset-0 w-4 h-4 rounded-full animate-ping ${
          isVolunteer ? "bg-green-400/30" : "bg-primary/30"
        }`} />
      </div>

      {/* Card with 3D tilt */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className={`w-full md:w-5/12 group ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
      >
        <div className={`relative bg-surface rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
          isVolunteer
            ? "border-green-400/20 hover:border-green-400/40 hover:shadow-green-400/5"
            : "border-border hover:border-primary/30 hover:shadow-primary/5"
        }`}>
          {/* Hover gradient overlay */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            isVolunteer
              ? "bg-linear-to-br from-green-400/5 via-transparent to-green-400/5"
              : "bg-linear-to-br from-primary/5 via-transparent to-accent/5"
          }`} />

          {/* Photo */}
          {entry.image && (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={entry.image}
                alt={entry.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/30 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className={`relative p-6 ${isEven ? "md:text-right" : ""}`}>
            <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-end" : ""}`}>
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                isVolunteer
                  ? "bg-green-400/10 text-green-400 border border-green-400/20"
                  : "bg-primary/10 text-primary border border-primary/20"
              }`}>
                {entry.year}
              </span>
              {isVolunteer && (
                <span className="text-xs px-2 py-1 rounded-full bg-green-400/10 text-green-400 font-mono border border-green-400/20">
                  Volunteer
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold mt-2 group-hover:text-primary transition-colors">{entry.title}</h3>
            <p className="text-sm text-accent mt-1">{entry.company}</p>
            <p className="text-muted text-sm mt-3 leading-relaxed">{entry.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}