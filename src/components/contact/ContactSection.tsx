"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactForm from "./ContactForm";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { socialLinks } from "@/lib/data";

const socials = [
  { icon: FiGithub, href: "https://github.com/Viyathmaranlini", label: "GitHub", desc: "@Viyathmaranlini", color: "hover:border-white/30" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/viyathma-arukgoda/", label: "LinkedIn", desc: "Viyathma Arukgoda", color: "hover:border-blue-400/30" },
  { icon: FiMail, href: `mailto:${socialLinks.email}`, label: "Email", desc: "viyathmaawa@gmail.com", color: "hover:border-primary/30" },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <motion.p
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
            Connect
          </span>
        </motion.h2>
        <motion.p
          className="text-muted max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-surface rounded-2xl border border-border p-8 hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FiSend className="text-primary" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white">Send a Message</h3>
                <p className="text-xs text-muted">I'll get back to you soon</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </motion.div>

        {/* Right - Social Cards + Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Location Card */}
          <div className="bg-surface rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FiMapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white">Location</h3>
                <p className="text-sm text-muted">Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-surface rounded-2xl border border-border p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${social.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <social.icon
                  size={24}
                  className="text-muted group-hover:text-primary transition-colors mb-3"
                />
                <p className="text-sm font-bold text-white">{social.label}</p>
                <p className="text-xs text-muted mt-0.5 truncate">{social.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Availability Card */}
          <div className="bg-surface rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Available for opportunities</p>
                <p className="text-xs text-muted">Open to internships, freelance & collaborations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}