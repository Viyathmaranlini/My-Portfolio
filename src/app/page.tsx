import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TechSection from "@/components/technologies/TechSection";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import AboutSection from "@/components/about/AboutSection";
import CertificateSection from "@/components/certificates/CertificateSection";
import ContactSection from "@/components/contact/ContactSection";
import ParticleBackground from "@/components/effects/ParticleBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TechSection />
        <AboutSection />
        <ProjectShowcase />
        <CertificateSection />
        <ContactSection />
      </main>
    </>
  );
}