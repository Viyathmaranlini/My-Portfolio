"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { skills } from "@/lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
  { key: "other", label: "AI / Other" },
];

export default function TechSection() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <SectionWrapper id="technologies">
      <h2 className="text-3xl font-bold mb-2">Technologies</h2>
      <p className="text-muted mb-8">Tools and technologies I work with.</p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-all
              ${active === cat.key
                ? "bg-primary text-background"
                : "bg-surface text-muted border border-white/5 hover:border-primary/30"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group bg-surface rounded-xl p-4 border border-white/5 hover:border-primary/30 transition-colors text-center"
            >
              {/* Icon */}
              <div className="text-3xl mb-3">{skill.icon}</div>

              {/* Name */}
              <h3 className="text-sm font-bold mb-3">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <span className="text-xs text-muted mt-1 block">{skill.level}%</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}