## 🌐 Personal Portfolio Website
📌 Overview

This project is my personal portfolio website, designed to showcase my background, technical skills, and projects as a Computer Science undergraduate and aspiring full-stack developer.

The website presents information about my education, skills, and featured projects in a clean and modern layout. It serves as a professional online presence where visitors can learn more about my work and connect with me.

## 2. Project Structure
 
```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Tailwind directives + custom styles
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navigation bar
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx  # Reusable scroll-animated wrapper
│   │
│   ├── hero/
│   │   ├── HeroSection.tsx     # Hero layout (text + canvas)
│   │   └── HeroScene.tsx       # Three.js 3D scene
│   │
│   ├── projects/
│   │   ├── ProjectShowcase.tsx # Grid/carousel of projects
│   │   └── ProjectCard.tsx     # Individual animated card
│   │
│   ├── about/
│   │   ├── AboutSection.tsx
│   │   └── TimelineItem.tsx    # Single timeline entry
│   │
│   └── contact/
│       ├── ContactSection.tsx
│       └── ContactForm.tsx
│
├── lib/
│   └── data.ts             # Projects array, timeline data, social links
│
└── types/
    └── index.ts            # Shared TypeScript interfaces
```
 
---
