"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactForm from "./ContactForm";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { socialLinks } from "@/lib/data";

const socials = [
  { icon: FiGithub, href: socialLinks.github, label: "GitHub" },
  { icon: FiLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${socialLinks.email}`, label: "Email" },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className="text-muted mb-12 max-w-xl">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ContactForm />

        {/* Social links */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Find me elsewhere</h3>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 flex items-center justify-center rounded-lg
                           bg-surface border border-white/5
                           text-muted hover:text-primary hover:border-primary/30
                           transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-muted text-sm">
            Or email me directly at{" "}
            <a href={`mailto:${socialLinks.email}`} className="text-primary hover:underline">
              {socialLinks.email}
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}