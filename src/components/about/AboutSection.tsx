"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { FiBookOpen, FiUsers, FiCode, FiAward } from "react-icons/fi";

const timelineItems = [
  {
    year: "2024",
    icon: FiCode,
    title: "AlgoXplore 1.0",
    subtitle: "Marketing Team Member",
    org: "Hackathon Hub NSBM",
    description: "Led social media campaigns and coordinated with university channels to drive participant registrations for the hackathon.",
    image: "/volunteer/algoxplore.jpg",
    color: "from-primary to-accent",
  },
  {
    year: "2023",
    icon: FiUsers,
    title: "IEEE Day 2023",
    subtitle: "Program Team Member",
    org: "IEEE Student Branch - NSBM",
    description: "Organized event activities, managed the program schedule, and contributed to student-led technology initiatives.",
    image: "/volunteer/ieee-day.jpg",
    color: "from-accent to-secondary",
  },
  {
    year: "2023",
    icon: FiAward,
    title: "Math & Statistics Circle",
    subtitle: "Active Member",
    org: "NSBM Green University",
    description: "Engaged in problem-solving sessions and statistical analysis workshops, strengthening analytical thinking for data science.",
    image: "",
    color: "from-secondary to-primary",
  },
  {
    year: "2023",
    icon: FiBookOpen,
    title: "BSc (Hons) Computer Science",
    subtitle: "Undergraduate",
    org: "NSBM Green University",
    description: "Focusing on Data Analytics, Machine Learning, Cloud Computing, and Software Engineering.",
    image: "",
    color: "from-primary to-secondary",
  },
];

function TimelineCard({ item, index }: { item: typeof timelineItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), { damping: 25 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), { damping: 25 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => { x.set(0.5); y.set(0.5); };
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {item.image && (
        <div className="relative h-36 overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent" />
        </div>
      )}

      <div className="relative p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
            <Icon size={14} className="text-white" />
          </div>
          <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
            {item.year}
          </span>
        </div>
        <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-xs text-accent mt-0.5">{item.subtitle} &middot; {item.org}</p>
        <p className="text-sm text-muted mt-2 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Who{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
            I Am
          </span>
        </motion.h2>
      </div>

      {/* Quick Intro - Photo + Bio */}
      <motion.div
        className="grid md:grid-cols-5 gap-8 items-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Photo */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-primary via-accent to-secondary opacity-40 blur-md" />
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/30">
              <Image
                src="/profile.jpg"
                alt="Viyathma Arukgoda"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-3">
          <motion.div
            className="bg-surface rounded-2xl border border-border p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Viyathma Arukgoda
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              I'm a Computer Science undergraduate passionate about cloud technologies, machine learning, and data-driven systems. I love turning complex data into actionable insights and building scalable software solutions to solve real-world challenges.
            </p>
            <p className="text-muted leading-relaxed">
              Aspiring to build an impactful career in Cloud Engineering and MLOps. Currently focusing on developing expertise in automated CI/CD pipelines, containerization, and deploying predictive models efficiently on the cloud.
            </p>

            {/* Quick Info Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["NSBM Green University", "CS Undergraduate", "Data & Cloud Enthusiast"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Education & Volunteering Timeline */}
      <div>
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-mono text-muted px-4 py-1.5 rounded-full bg-surface border border-border">
            Education & Volunteering
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {timelineItems.map((item, i) => (
            <TimelineCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}