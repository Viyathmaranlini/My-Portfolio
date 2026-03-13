export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;       
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  type?: "work" | "volunteer";
  image?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
  credentialUrl?: string;
  issuerLogo?: string;
}
export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}