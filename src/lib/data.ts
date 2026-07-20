import { Project, TimelineEntry, Certificate, Skill } from "@/types";

export const projects: Project[] = [
 {
    id: 1,
    title: "🍄 FungiFinder — Wild Mushroom Identification & Toxicity Detection System",
    description: "AI-powered web application for wild mushroom identification and toxicity detection with record management, statistical analytics, and emergency guidance — built for Sri Lanka.",
    image: "/projects/mushroom-ai.jpg",
    tags: ["Python", "TensorFlow", "CNN", "Flask", "chart.js","mongoDB","Google collab"],
    githubUrl: "https://github.com/Viyathmaranlini/Fungi-finder",
    category: "ml",
  },
  
  {
    id: 2,
    title: "Sri Lanka Economic Analysis",
    description: "Interactive dashboard for visualizing and analyzing Sri Lanka's economic data with real-time charts.",
    image: "/projects/srilanka-eda.jpg",
    tags: ["Python", "pandas", "numpy", "matplotlib", "seaborn", "plotly", "scipy"],
    githubUrl: "https://github.com/Viyathmaranlini/Sri-Lanka-Economic-Analysis",
    category: "data",
  },
  {
    id: 3,
    title: "Haritha TV",
    description: "Full-stack e-commerce app with Stripe payments and admin dashboard.",
    image: "/projects/haritha-tv.jpg",
    tags: ["php", "html", "css", "javascript"],
    githubUrl: "https://github.com/Viyathmaranlini/Haritha-TV",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Pizza Heaven",
    description: "PizzaHeaven is a responsive and user-friendly pizza shop website designed to give customers an easy and delicious online experience. ",
    image: "/projects/pizza-heaven.jpg",
    tags: ["html", "css", "javascript", "mysql"],
    githubUrl: "https://github.com/Viyathmaranlini/PizzaHeaven",
    category: "fullstack",
  },
  {
    id: 5,
    title: "News Sentiment Analysis",
    description: "A machine learning project that analyzes news articles to determine sentiment using NLP techniques.",
    image: "/projects/news-sentiment.jpg",
    tags: ["Python", "NLP", "TensorFlow", "Pandas"],
    githubUrl: "https://github.com/Viyathmaranlini/News-Sentiment-Analysis",
    category: "data",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    date: "2025",
    image: "/certificates/cert1.jpg",
    skills: ["Python", "Machine Learning"],
    credentialUrl: "https://coursera.org/verify/xxx",
  },
  {
    id: 2,
    title: "Angular",
    issuer: "Sololearn",
    date: "2023",
    image: "/certificates/cert2.jpg",
    skills: ["React", "Next.js"],
    credentialUrl: "https://udemy.com/certificate/xxx",  
  },

  {
    id: 3,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2026",
    image: "/certificates/cert3.jpg",
    skills: ["python"],
    credentialUrl: "",  
  },

  {
    id: 4,
    title: "Postman API Fundamentals",
    issuer: "postman",
    date: "2024",
    image: "/certificates/cert4.jpg",
    skills: ["React", "Next.js"],
    credentialUrl: "https://udemy.com/certificate/xxx",  
  },

  {
    id: 5,
    title: "Business Analysis",
    issuer: "Alison",
    date: "2026",
    image: "/certificates/cert5.jpg",
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
  { name: "VS Code", icon: "\u{1F4BB}", level: 90, category: "tools" },
  { name: "Figma", icon: "\u{1F3AF}", level: 60, category: "tools" },
  { name: "Postman", icon: "\u{1F4E8}", level: 70, category: "tools" },

  // Cloud / DevOps
  { name: "Git/GitHub", icon: "\u{1F4E6}", level: 82, category: "cloud" },
  { name: "Docker", icon: "\u{1F433}", level: 55, category: "cloud" },
  { name: "Cloud Computing", icon: "\u2601\uFE0F", level: 55, category: "cloud" },
  { name: "CI/CD", icon: "\u{1F504}", level: 45, category: "cloud" },
  { name: "Linux", icon: "\u{1F427}", level: 60, category: "cloud" },

  // AI / Data
  { name: "Machine Learning", icon: "\u{1F916}", level: 70, category: "other" },
  { name: "Data Analysis", icon: "\u{1F4CA}", level: 75, category: "other" },
  { name: "TensorFlow", icon: "\u{1F9E0}", level: 60, category: "other" },
  { name: "Pandas", icon: "\u{1F43C}", level: 78, category: "other" },
  { name: "Jupyter", icon: "\u{1F4D3}", level: 78, category: "other" },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your@email.com",
};