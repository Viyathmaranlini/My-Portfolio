"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/effects/MagneticButton";
import Typewriter from "@/components/effects/Typewriter";

const cardStats = [
  { label: "Projects", value: "5+", color: "from-primary to-accent" },
  { label: "Technologies", value: "10+", color: "from-accent to-secondary" },
  { label: "Certificates", value: "4+", color: "from-secondary to-primary" },
];

const techBadges = ["Python", "JavaScript", "React", "Next.js", "C#", "AI/ML"];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <div>
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-surface-light border border-border text-sm text-muted mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Interested in Data Analysis, Machine Learning & Cloud Computing
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
              Viyathma
            </span>
            <br />
            Arukgoda
          </motion.h1>

          <motion.div
            className="text-xl text-primary font-medium mb-4 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typewriter
              words={[
                   "I build Data-Driven Solutions",
                   "I create ML Models",
                   "I develop Full Stack Apps",
                   "I explore Cloud Computing",
                     ]}
            />
          </motion.div>

          <motion.p
            className="text-muted max-w-lg text-base mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Passionate about exploring AI/ML applications in data-driven systems. Currently building real-world projects in data analytics, machine learning, and full-stack development. Driven by curiosity and a love for turning data into actionable insights.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MagneticButton>
              <a href="#projects" className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity">
                View Projects
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="inline-block px-6 py-3 border border-border text-white rounded-lg hover:bg-surface-light transition-colors">
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right - Glowing 3D Profile Card */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GlowingProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

function GlowingProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { damping: 20, stiffness: 150 });

  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), { damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), { damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  return (
    <div className="relative">
      {/* Ambient glow behind card */}
      <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -inset-4 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[360px]"
      >
        {/* Animated gradient border */}
        <div className="absolute -inset-[2px] rounded-3xl bg-linear-to-r from-primary via-accent to-secondary opacity-60 blur-sm animate-spin-slow" />
        <div className="absolute -inset-[1px] rounded-3xl bg-linear-to-r from-primary via-accent to-secondary opacity-80" />

        {/* Card content */}
        <div className="relative bg-surface rounded-3xl p-6 overflow-hidden">
          {/* Hover glow effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(6, 214, 160, 0.08), transparent 50%)`,
              }}
            />
          )}

          {/* Profile Photo */}
          <motion.div
            className="relative w-28 h-28 mx-auto mb-5"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary via-accent to-secondary opacity-70 blur-sm" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-surface">
              <Image
                src="/profile.jpg"
                alt="Viyathma Arukgoda"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-surface" />
          </motion.div>

          {/* Name & Title */}
          <motion.div className="text-center mb-5" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-xl font-bold text-white mb-1">Viyathma Arukgoda</h3>
            <p className="text-sm text-primary font-mono">ML & Full Stack Developer</p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-3 gap-2 mb-5"
            style={{ transform: "translateZ(25px)" }}
          >
            {cardStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 rounded-xl bg-surface-light border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(6, 214, 160, 0.3)" }}
              >
                <p className={`text-lg font-bold text-transparent bg-clip-text bg-linear-to-r ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-5"
            style={{ transform: "translateZ(20px)" }}
          >
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-surface-light border border-border text-muted hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.08 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-2"
            style={{ transform: "translateZ(15px)" }}
          >
            <a
              href="#contact"
              className="flex-1 text-center py-2.5 rounded-xl bg-primary text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
            <a
           href="/Viyathma-Arukgoda-CV-Resume.pdf"
  download
  className="flex-1 text-center py-2.5 rounded-xl bg-surface-light border border-border text-white text-sm font-medium hover:border-primary/30 transition-colors"
>
  Download CV
</a>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}