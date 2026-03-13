import { Project, TimelineEntry, Certificate, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Air Quality Monitoring",
    description: "🌍The Colombo Real-time Air Quality Monitoring Dashboard",
    image: "/projects/Air Quality.jpeg",
    tags: ["Blade, PHP, Javascripts, HTML, CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Viyathmaranlini/Air-Quality-Monitoring",
  },

  {
    id: 2,
    title: "Haritha TV",
    description: "Haritha TV is a newly launched platform dedicated to covering all the latest events and news at NSBM Green University.",
    image: "/projects/Haritha TV.jpeg",
    tags: ["PHP, Hack, CSS, Javascript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Viyathmaranlini/Haritha-TV",
  },
  
  {
    id: 3,
    title: "Organic Food",
    description: "🌿 Green Harvest - A fully responsive website for showcasing organic food products, designed with a clean and modern aesthetic.",
    image: "/projects/Green Harvest.jpeg",
    tags: ["CSS, HTML, Javascript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Viyathmaranlini/Organic-Food-Website",
  },

  {
    id: 4,
    title: "MoodFlix App",
    description: "MoodFlix is an innovative web application designed to enhance the digital entertainment experience by recommending movies and TV shows based on the user's emotional state.",
    image: "/projects/MoodFlix.jpeg",
    tags: ["Javascript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Viyathmaranlini/MoodFlix-App-main",
  },
  
  {
    id: 5,
    title: "Coming Soon",
    description: "Something exciting is in the works. Stay tuned!",
    image: "",
    tags: [],
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "Another project brewing. Watch this space!",
    image: "",
    tags: [],
  },
  
];

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Marketing Team Member — AlgoXplore 1.0",
    company: "Hackathon Hub NSBM",
    description: "Contributed to the marketing campaign for AlgoXplore 1.0, promoting the hackathon across social media and university channels to drive participant registrations.",
    type: "volunteer",
    image: "/volunteer/algoxplore.jpg",
  },
  {
    year: "2023",
    title: "Program Team Member — IEEE Day 2023",
    company: "IEEE Student Branch - NSBM Green University",
    description: "Helped organize and coordinate IEEE Day 2023 event activities, managing the program schedule and ensuring smooth execution of sessions.",
    type: "volunteer",
    image: "/volunteer/ieee-day.jpg",
  },
  {
    year: "2023",
    title: "Publicity Team Member - IEEE Day 2023",
    company: "IEEE Student Branch - NSBM Green University",
    description: "",
    type: "volunteer",
  },
  {
    year: "2023",
    title: "Member",
    company: "Mathematics and Statistics Circle - NSBM Green University",
    description: "Engaged in mathematical problem-solving sessions and statistical analysis workshops since July 2023, strengthening analytical thinking skills.",
    type: "volunteer",
  },

];

export const socialLinks = {
  github: "https://github.com/Viyathmaranlini",
  linkedin: "https://www.linkedin.com/in/viyathma-arukgoda/",
  email: "viyathmaawa@gmail.com",
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    image: "/certificates/cert1.jpg",
    skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence" ],
    credentialUrl: "https://coursera.org/verify/xxx",
    issuerLogo: "/logos/coursera.png",
  },
  {
    id: 2,
    title: "Angular",
    issuer: "Sololearn",
    date: "May 2025",
    image: "/certificates/cert2.jpg",
    skills: ["Angular"],
    credentialUrl: "https://udemy.com/certificate/xxx",
    issuerLogo: "/logos/udemy.png",
  },

  {
    id: 3,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Nov 2024",
    image: "/certificates/cert3.jpg",
    skills: ["Python"],
    credentialUrl: "https://udemy.com/certificate/xxx",
    issuerLogo: "/logos/udemy.png",
  },

  {
    id: 4,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Nov 2024",
    image: "/certificates/cert4.jpg",
    skills: ["Postman API"],
    credentialUrl: "https://udemy.com/certificate/xxx",
    issuerLogo: "/logos/udemy.png",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: "🌐", level: 90, category: "frontend" },
  { name: "CSS", icon: "🎨", level: 85, category: "frontend" },
  { name: "JavaScript", icon: "⚡", level: 85, category: "frontend" },
  { name: "TypeScript", icon: "📘", level: 70, category: "frontend" },
  { name: "React", icon: "⚛️", level: 80, category: "frontend" },
  { name: "Next.js", icon: "▲", level: 75, category: "frontend" },
  { name: "Tailwind CSS", icon: "💨", level: 80, category: "frontend" },

  // Backend
  { name: "Python", icon: "🐍", level: 85, category: "backend" },
  { name: "C#", icon: "🔷", level: 75, category: "backend" },
  { name: "Node.js", icon: "🟢", level: 70, category: "backend" },
  { name: "Java", icon: "☕", level: 65, category: "backend" },
  { name: "MySQL", icon: "🗄️", level: 70, category: "backend" },
  { name: "MongoDB", icon: "🍃", level: 65, category: "backend" },

  // Tools
  { name: "Git", icon: "📦", level: 80, category: "tools" },
  { name: "VS Code", icon: "💻", level: 90, category: "tools" },
  { name: "Figma", icon: "🎯", level: 60, category: "tools" },
  { name: "Docker", icon: "🐳", level: 55, category: "tools" },

  // Other
  { name: "Machine Learning", icon: "🤖", level: 65, category: "other" },
  { name: "TensorFlow", icon: "🧠", level: 60, category: "other" },
  { name: "Data Analysis", icon: "📊", level: 70, category: "other" },
];