"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/effects/MagneticButton";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            className="text-primary font-mono text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, It is Me
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Viyathma Arukgoda
          </motion.h1>
          <motion.p
            className="text-muted max-w-xl text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I have experience in Python, JavaScript, C#, and full-stack web development, with a strong interest in AI and machine learning. I enjoy creating practical solutions for real-world problems and continuously learning new technologies to improve my skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <MagneticButton>
              <a href="#projects" className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-mono hover:bg-primary/10 transition-colors">
                View My Work
              </a>
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute -inset-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-400 to-blue-500 opacity-75 blur-md animate-spin-slow" />
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-indigo-500 via-purple-400 to-blue-500 opacity-50 blur-sm animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50">
              <Image src="/profile.jpg" alt="Viyathma Arukgoda" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
