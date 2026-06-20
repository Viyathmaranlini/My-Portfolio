"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Left - Profile */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors">
            <Image
              src="/profile.jpg"
              alt="Viyathma"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white leading-tight">Viyathma</p>
            <p className="text-xs text-muted leading-tight">Developer & Problem Solver</p>
          </div>
        </a>

        {/* Center - Nav Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-4 py-2 text-sm text-muted hover:text-primary font-medium rounded-lg hover:bg-surface-light transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-light text-muted hover:text-primary hover:bg-surface border border-border transition-all"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-light text-muted hover:text-primary hover:bg-surface border border-border transition-all"
          >
            <FiLinkedin size={16} />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-surface border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className="p-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-muted hover:text-primary font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}