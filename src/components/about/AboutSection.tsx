"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { FiBookOpen, FiUsers, FiHeart, FiAward, FiCode, FiTarget, FiUser } from "react-icons/fi";

const stories = [
  {
    id: 0,
    tag: "About Me",
    icon: FiUser,
    title: "Who I Am",
    subtitle: "Computer Science Undergraduate",
    description: "I'm a Computer Science undergraduate passionate about Data Analytics, Machine Learning, and Cloud Computing. I enjoy solving real-world problems through technology and building impactful software solutions that turn data into actionable insights.",
    image: "/profile.jpg",
    color: "from-primary to-accent",
    borderColor: "hover:border-primary/40",
    year: "",
  },
  {
    id: 1,
    tag: "Education",
    icon: FiBookOpen,
    title: "NSBM Green University",
    subtitle: "BSc (Hons) in Computer Science",
    description: "Currently pursuing a BSc (Hons) in Computer Science with interests in Data Analytics, Machine Learning, Cloud Computing, and Software Engineering. Building strong foundations in algorithms, databases, and modern software development practices.",
    image: "",
    color: "from-accent to-secondary",
    borderColor: "hover:border-accent/40",
    year: "2023 - Present",
  },
  {
    id: 2,
    tag: "Volunteering",
    icon: FiUsers,
    title: "IEEE Student Branch",
    subtitle: "Program Team Member",
    description: "Organized IEEE Day 2023 event activities as a Program Team Member. Participated in technical workshops, networking events, and collaborative projects while contributing to student-led technology initiatives since June 2023.",
    image: "/volunteer/ieee-day.jpg",
    color: "from-secondary to-primary",
    borderColor: "hover:border-secondary/40",
    year: "2023",
  },
  {
    id: 3,
    tag: "Hackathon",
    icon: FiCode,
    title: "AlgoXplore 1.0",
    subtitle: "Marketing Team Member",
    description: "Contributed to the marketing strategy for AlgoXplore 1.0 at Hackathon Hub NSBM. Led social media campaigns and coordinated with university channels to successfully drive participant registrations and event awareness.",
    image: "/volunteer/algoxplore.jpg",
    color: "from-primary to-secondary",
    borderColor: "hover:border-primary/40",
    year: "2024",
  },
  {
    id: 4,
    tag: "Community",
    icon: FiAward,
    title: "Math & Statistics Circle",
    subtitle: "Member",
    description: "Engaged in mathematical problem-solving sessions and statistical analysis workshops. Developing analytical thinking and quantitative reasoning skills that directly complement my data science and machine learning journey.",
    image: "/volunteer/math-circle.jpg",
    color: "from-accent to-primary",
    borderColor: "hover:border-accent/40",
    year: "2023 - Present",
  },
  {
    id: 5,
    tag: "Passion",
    icon: FiHeart,
    title: "What Drives Me",
    subtitle: "Curiosity & Impact",
    description: "I'm fascinated by how data can reveal meaningful patterns and support better decisions. My passion lies in combining analytics, machine learning, and software development to create solutions that solve real-world challenges.",
    image: "",
    color: "from-secondary to-accent",
    borderColor: "hover:border-secondary/40",
    year: "",
  },
  {
    id: 6,
    tag: "Vision",
    icon: FiTarget,
    title: "Where I'm Heading",
    subtitle: "Future Goals",
    description: "Aspiring to build a career in Data Analytics, Machine Learning, and Cloud Computing. Currently developing expertise in data-driven decision making, predictive modeling, and scalable cloud technologies.",
    image: "",
    color: "from-primary to-accent",
    borderColor: "hover:border-primary/40",
    year: "",
  },
];

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { damping: 25, stiffness: 150 });

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

  const Icon = story.icon;
  const hasImage = !!story.image;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Connector dot on center line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 hidden lg:block">
        <motion.div
          className={`w-4 h-4 rounded-full bg-linear-to-r ${story.color} border-4 border-background`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3 }}
        />
        <motion.div
          className={`absolute inset-0 w-4 h-4 rounded-full bg-linear-to-r ${story.color} opacity-30`}
          animate={{ scale: [1, 2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Card - alternating sides on desktop */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className={`lg:w-[45%] ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
      >
        <div className={`group relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${story.borderColor}`}>
          {/* Top gradient line */}
          <div className={`h-1 w-full bg-linear-to-r ${story.color}`} />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className={`relative ${hasImage ? "grid md:grid-cols-5" : ""}`}>
            {/* Image side */}
            {hasImage && (
              <div className="relative md:col-span-2 h-48 md:h-auto overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-surface/50 hidden md:block" />
                <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent md:hidden" />
              </div>
            )}

            {/* Content side */}
            <div className={`relative p-6 ${hasImage ? "md:col-span-3" : ""}`}>
              {/* Tag + Year row */}
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${story.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={14} className="text-white" />
                </div>
                <span className="text-xs font-mono text-muted bg-surface-light px-2.5 py-1 rounded-full border border-border">
                  {story.tag}
                </span>
                {story.year && (
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {story.year}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className={`text-sm font-medium mt-1 text-transparent bg-clip-text bg-linear-to-r ${story.color}`}>
                {story.subtitle}
              </p>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                {story.description}
              </p>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl ${story.color} opacity-[0.03] rounded-tl-full pointer-events-none`} />
            </div>
          </div>
        </div>
      </motion.div>
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
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
            Story
          </span>
        </motion.h2>
        <motion.p
          className="text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Scroll through the chapters of my journey — from who I am to where I'm heading
        </motion.p>
      </div>

      {/* Vertical center line (desktop only) */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden lg:block">
          <motion.div
            className="w-full h-full bg-linear-to-b from-primary via-accent to-secondary opacity-20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        {/* Story Cards */}
        <div className="space-y-12 lg:space-y-16">
          {stories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>

        {/* End dot */}
        <motion.div
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -bottom-4 w-8 h-8 rounded-full bg-linear-to-r from-primary to-accent items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div className="w-3 h-3 rounded-full bg-background" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}