# 🌌 Personal Portfolio Website

## 📌 Overview

A modern, interactive portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Features a stunning galaxy-themed design with twinkling stars, shooting star animations, and premium interactive effects.

Built as a professional online presence to showcase my education, technical skills, volunteering experience, certifications, and projects as a Computer Science undergraduate at NSBM Green University.

🔗 **Live Demo:** [Coming Soon]

## ✨ Features

- **Galaxy Theme** — Deep space background with twinkling stars, nebula gradients, and shooting star animations
- **Interactive Effects** — Cursor glow, magnetic buttons, scroll progress bar, and animated counters
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — Page transitions and scroll-based animations powered by Framer Motion
- **Dynamic Content** — Filterable technology grid, timeline with photo cards, and project showcase

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations and transitions |
| React Icons | Icon library |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout with fonts and metadata
│   ├── page.tsx                  # Home page — assembles all sections
│   └── globals.css               # Tailwind config and galaxy theme
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed navigation with mobile menu
│   │   └── SectionWrapper.tsx    # Reusable scroll-animated wrapper
│   │
│   ├── hero/
│   │   └── HeroSection.tsx       # Hero with profile photo and glow ring
│   │
│   ├── technologies/
│   │   └── TechSection.tsx       # Filterable skills grid with progress bars
│   │
│   ├── projects/
│   │   ├── ProjectShowcase.tsx   # Project grid with Coming Soon cards
│   │   └── ProjectCard.tsx       # Individual project card component
│   │
│   ├── about/
│   │   ├── AboutSection.tsx      # About section with volunteering timeline
│   │   └── TimelineItem.tsx      # Timeline card with photo support
│   │
│   ├── certificates/
│   │   ├── CertificateSection.tsx # Certificates grid
│   │   └── CertificateCard.tsx    # Certificate card with skills tags
│   │
│   ├── contact/
│   │   ├── ContactSection.tsx    # Contact section with social links
│   │   └── ContactForm.tsx       # Contact form with validation
│   │
│   └── effects/
│       ├── ParticleBackground.tsx # Galaxy stars and shooting stars
│       ├── CursorGlow.tsx         # Mouse-following glow effect
│       ├── ScrollProgress.tsx     # Top scroll progress bar
│       ├── AnimatedCounter.tsx    # Count-up animation component
│       ├── StatsSection.tsx       # Stats with animated counters
│       ├── TiltCard.tsx           # 3D tilt hover effect
│       └── MagneticButton.tsx     # Magnetic hover button effect
│
├── lib/
│   └── data.ts                   # Projects, skills, timeline, and certificates data
│
└── types/
    └── index.ts                  # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Viyathmaranlini/my-portfolio.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```


## 📸 Screenshots

### Hero Section
<img width="1600" height="746" alt="image" src="https://github.com/user-attachments/assets/3e567ecf-d5f4-4e5f-a14a-9ecc2a4b02bc" />


### Technologies
<img width="1506" height="855" alt="image" src="https://github.com/user-attachments/assets/00ad7c51-e483-4495-8782-446469dbbf49" />


### Projects
<img width="1474" height="819" alt="image" src="https://github.com/user-attachments/assets/e45393a3-b3d3-4ae6-98e7-21b9431d97aa" />


### About Me
<img width="1583" height="847" alt="image" src="https://github.com/user-attachments/assets/7db6ec08-39d9-4f4c-9741-8933f59be544" />


### Certificates
<img width="1600" height="712" alt="image" src="https://github.com/user-attachments/assets/c7d7650b-2a27-4e30-ad1c-d6cca63be916" />


### Contact
<img width="1600" height="745" alt="image" src="https://github.com/user-attachments/assets/beca60dc-eab3-4268-9be1-e980f4a4b09d" />


## 🎨 Sections

- **Hero** — Introduction with animated profile photo and galaxy glow ring
- **Technologies** — Interactive skill grid filterable by category (Frontend, Backend, Tools, AI/Other) with animated progress bars
- **Projects** — Showcase of completed projects with Coming Soon cards for upcoming work
- **About Me** — Volunteering timeline at NSBM Green University (IEEE, Hackathon Hub, Math Circle)
- **Certificates** — Professional certifications with issuer logos and verification links
- **Contact** — Contact form and social media links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Viyathma Arukgoda**

- GitHub: [@Viyathmaranlini](https://github.com/Viyathmaranlini)
- LinkedIn: [Viyathma Arukgoda](https://www.linkedin.com/in/viyathma-arukgoda/)
- Email: viyathmaawa@gmail.com

---

⭐ If you like this project, give it a star on GitHub!
