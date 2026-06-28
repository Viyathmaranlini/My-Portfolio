"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { skills } from "@/lib/data";

 const categories = [
  { key: "all", label: "All Skills", icon: "\u2728" },
  { key: "frontend", label: "Frontend", icon: "</>" },
  { key: "backend", label: "Backend", icon: "{}" },
  { key: "tools", label: "Tools", icon: "\u2699\uFE0F" },
  { key: "cloud", label: "Cloud / DevOps", icon: "\u2601\uFE0F" },
  { key: "other", label: "AI / Data", icon: "\u{1F916}" },
];

function SkillRing({ level, size = 60 }: { level: number; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="4"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#skillGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
      <defs>
        <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06d6a0" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TiltSkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { damping: 20, stiffness: 150 });

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
      layout
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        whileHover={{ scale: 1.02 }}
        className="group relative bg-surface rounded-2xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex items-center gap-4">
          {/* Skill Ring */}
          <div className="relative flex-shrink-0">
            <SkillRing level={skill.level} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg">{skill.icon}</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-1 bg-surface-light rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                />
              </div>
              <span className="text-xs font-mono text-muted">{skill.level}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TechSection() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? skills
    : skills.filter((s) => s.category === active);

  const totalSkills = skills.length;
  const avgLevel = Math.round(skills.reduce((a, b) => a + b.level, 0) / totalSkills);

  return (
    <SectionWrapper id="technologies">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.p
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Technologies &{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
            Expertise
          </span>
        </motion.h2>
        <motion.p
          className="text-muted max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Tools and technologies I use to bring ideas to life
        </motion.p>
      </div>

      {/* Stats Overview */}
      <motion.div
        className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center p-4 bg-surface rounded-xl border border-border">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">{totalSkills}</p>
          <p className="text-xs text-muted mt-1">Total Skills</p>
        </div>
        <div className="text-center p-4 bg-surface rounded-xl border border-border">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">{avgLevel}%</p>
          <p className="text-xs text-muted mt-1">Avg. Level</p>
        </div>
        <div className="text-center p-4 bg-surface rounded-xl border border-border">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">4</p>
          <p className="text-xs text-muted mt-1">Categories</p>
        </div>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
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
            {active === cat.key && (
              <span className="ml-1 text-xs bg-background/20 px-2 py-0.5 rounded-full">
                {cat.key === "all" ? totalSkills : skills.filter(s => s.category === cat.key).length}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <TiltSkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}