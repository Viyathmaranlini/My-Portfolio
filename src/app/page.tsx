import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TechSection from "@/components/technologies/TechSection";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import AboutSection from "@/components/about/AboutSection";
import CertificateSection from "@/components/certificates/CertificateSection";
import ContactSection from "@/components/contact/ContactSection";
import { Certificate } from "crypto";
import ParticleBackground from "@/components/effects/ParticleBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import StatsSection from "@/components/effects/StatsSection";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <TechSection />
        <ProjectShowcase />
        <AboutSection />
        <CertificateSection />
        <ContactSection />
      </main>
    </>
  );
}