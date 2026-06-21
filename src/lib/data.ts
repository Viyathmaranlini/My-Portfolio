import { Project, TimelineEntry, Certificate, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Haritha TV",
    description: "Full-stack e-commerce app with Stripe payments and admin dashboard.",
    image: "https://placehold.co/600x400/0a0a2e/06d6a0?text=Haritha+TV",
    tags: ["Next.js", "Prisma", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/you/project",
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing and analyzing large datasets with real-time charts.",
    image: "https://placehold.co/600x400/0a0a2e/06d6a0?text=Analytics",
    tags: ["Python", "React", "D3.js", "FastAPI"],
    githubUrl: "https://github.com/you/project",
  },
  {
    id: 3,
    title: "ML Prediction Model",
    description: "Machine learning model for predicting student performance using classification algorithms.",
    image: "https://placehold.co/600x400/0a0a2e/06d6a0?text=ML+Model",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/you/project",
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Something exciting is in the works. Stay tuned!",
    image: "",
    tags: [],
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Another project brewing. Watch this space!",
    image: "",
    tags: [],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Marketing Team Member \u2014 AlgoXplore 1.0",
    company: "Hackathon Hub NSBM",
    description: "Contributed to the marketing campaign for AlgoXplore 1.0, promoting the hackathon across social media and university channels to drive participant registrations.",
    type: "volunteer",
    image: "/volunteer/algoxplore.jpg",
  },
  {
    year: "2023",
    title: "Program Team Member \u2014 IEEE Day 2023",
    company: "IEEE Student Branch - NSBM Green University",
    description: "Helped organize and coordinate IEEE Day 2023 event activities, managing the program schedule and ensuring smooth execution of sessions.",
    type: "volunteer",
    image: "/volunteer/ieee-day.jpg",
  },
  {
    year: "2023",
    title: "Member",
    company: "IEEE Student Branch - NSBM Green University",
    description: "Active member since June 2023, participating in tech workshops, networking events, and collaborative projects within the IEEE community.",
    type: "volunteer",
    image: "/volunteer/ieee-member.jpg",
  },
  {
    year: "2023",
    title: "Member",
    company: "Mathematics and Statistics Circle - NSBM Green University",
    description: "Engaged in mathematical problem-solving sessions and statistical analysis workshops since July 2023.",
    type: "volunteer",
    image: "/volunteer/math-circle.jpg",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Your Certificate Name",
    issuer: "Coursera",
    date: "2024",
    image: "/certificates/cert1.jpg",
    skills: ["Python", "Machine Learning"],
    credentialUrl: "https://coursera.org/verify/xxx",
  },
  {
    id: 2,
    title: "Another Certificate",
    issuer: "Udemy",
    date: "2023",
    image: "/certificates/cert2.jpg",
    skills: ["React", "Next.js"],
    credentialUrl: "https://udemy.com/certificate/xxx",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", icon: "\u{1F310}", level: 90, category: "frontend" },
  { name: "JavaScript", icon: "\u26A1", level: 85, category: "frontend" },
  { name: "TypeScript", icon: "\u{1F4D8}", level: 70, category: "frontend" },
  { name: "React", icon: "\u269B\uFE0F", level: 80, category: "frontend" },
  { name: "Next.js", icon: "\u25B2", level: 75, category: "frontend" },
  { name: "Tailwind CSS", icon: "\u{1F4A8}", level: 80, category: "frontend" },

  // Backend
  { name: "Python", icon: "\u{1F40D}", level: 88, category: "backend" },
  { name: "C#", icon: "\u{1F537}", level: 75, category: "backend" },
  { name: "Node.js", icon: "\u{1F7E2}", level: 70, category: "backend" },
  { name: "Java", icon: "\u2615", level: 65, category: "backend" },
  { name: "MySQL", icon: "\u{1F5C4}\uFE0F", level: 72, category: "backend" },
  { name: "MongoDB", icon: "\u{1F343}", level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: "\u{1F4E6}", level: 82, category: "tools" },
  { name: "VS Code", icon: "\u{1F4BB}", level: 90, category: "tools" },
  { name: "Docker", icon: "\u{1F433}", level: 55, category: "tools" },
  { name: "Figma", icon: "\u{1F3AF}", level: 60, category: "tools" },
  { name: "Jupyter", icon: "\u{1F4D3}", level: 78, category: "tools" },

  // AI / Data / Cloud
  { name: "Machine Learning", icon: "\u{1F916}", level: 70, category: "other" },
  { name: "Data Analysis", icon: "\u{1F4CA}", level: 75, category: "other" },
  { name: "TensorFlow", icon: "\u{1F9E0}", level: 60, category: "other" },
  { name: "Pandas", icon: "\u{1F43C}", level: 78, category: "other" },
  { name: "Cloud Computing", icon: "\u2601\uFE0F", level: 55, category: "other" },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your@email.com",
};