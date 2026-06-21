"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { FiChevronLeft, FiChevronRight, FiBookOpen, FiUsers, FiHeart, FiAward, FiCode, FiTarget, FiUser } from "react-icons/fi";

const stories = [
  {
    id: 0,
    tag: "About Me",
    icon: FiUser,
    title: "Who I Am",
    subtitle: "Computer Science Undergraduate",
    description: "I'm a Computer Science undergraduate passionate about Data Analytics, Machine Learning, and Cloud Computing. I enjoy solving real-world problems through technology and building impactful software solutions that turn data into actionable insights.",
    image: "/volunteer/profile.jpg",
    color: "from-primary to-accent",
  },
  {
    id: 1,
    tag: "Education",
    icon: FiBookOpen,
    title: "NSBM Green University",
    subtitle: "BSc (Hons) in Computer Science",
    description: "Currently pursuing a BSc (Hons) in Computer Science with interests in Data Analytics, Machine Learning, Cloud Computing, and Software Engineering. Building strong foundations in algorithms, databases, and modern software development practices.",
    image: "/volunteer/nsbm.jpg",
    color: "from-accent to-secondary",
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
    year: "2024",
  },
  {
    id: 4,
    tag: "Community",
    icon: FiAward,
    title: "Math & Statistics Circle",
    subtitle: "Active Member",
    description: "Engaged in mathematical problem-solving sessions and statistical analysis workshops. Developing analytical thinking and quantitative reasoning skills that directly complement my data science and machine learning journey.",
    image: "/volunteer/math-circle.jpg",
    color: "from-accent to-primary",
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
    year: "",
  },
];

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { damping: 25, stiffness: 150 });

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="flex-shrink-0 w-[340px] md:w-[400px] snap-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative h-full bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
        <div className={`h-1 w-full bg-linear-to-r ${story.color}`} />

        <div className="absolute inset-0 bg-linear-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {story.image ? (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={story.image}
              alt={story.title}
              fill
             className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${story.color} flex items-center justify-center`}>
                <Icon size={14} className="text-white" />
              </div>
              <span className="text-xs font-mono text-white bg-surface/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                {story.tag}
              </span>
            </div>
            {story.year && (
              <div className="absolute top-4 right-4">
                <span className="text-xs font-mono text-primary bg-surface/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/20">
                  {story.year}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-44 flex items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 bg-linear-to-br ${story.color} opacity-5`} />
            <motion.div
              className={`w-20 h-20 rounded-2xl bg-linear-to-br ${story.color} flex items-center justify-center`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={32} className="text-white" />
            </motion.div>
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="text-xs font-mono text-white bg-surface/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                {story.tag}
              </span>
            </div>
            {story.year && (
              <div className="absolute top-4 right-4">
                <span className="text-xs font-mono text-primary bg-surface/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/20">
                  {story.year}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="relative p-6">
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className={`text-sm font-medium mt-1 text-transparent bg-clip-text bg-linear-to-r ${story.color}`}>
            {story.subtitle}
          </p>
          <p className="text-sm text-muted mt-3 leading-relaxed">
            {story.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <SectionWrapper id="about" className="!max-w-none !px-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
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
            Swipe through the chapters of my journey — from who I am to where I'm heading
          </motion.p>
        </div>

        <div className="flex justify-end gap-2 mb-6 px-6">
          <motion.button
            onClick={() => scroll("left")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              canScrollLeft
                ? "bg-surface border-border text-white hover:border-primary/30 hover:text-primary"
                : "bg-surface/50 border-border/50 text-muted/30 cursor-not-allowed"
            }`}
            whileHover={canScrollLeft ? { scale: 1.05 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
          >
            <FiChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              canScrollRight
                ? "bg-surface border-border text-white hover:border-primary/30 hover:text-primary"
                : "bg-surface/50 border-border/50 text-muted/30 cursor-not-allowed"
            }`}
            whileHover={canScrollRight ? { scale: 1.05 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
          >
            <FiChevronRight size={18} />
          </motion.button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {stories.map((story, i) => (
          <StoryCard key={story.id} story={story} index={i} />
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-6">
        {stories.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted/30"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}