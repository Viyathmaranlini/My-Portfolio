"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
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
      className={`fixed top-0 w-full z-50 transition-colors duration-300
                  ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary">
         VA<span className="text-white">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted hover:text-primary font-mono transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-surface border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className="p-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-muted hover:text-primary font-mono"
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