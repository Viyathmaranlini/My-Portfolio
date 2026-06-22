import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import TechSection from "@/components/technologies/TechSection";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import CertificateSection from "@/components/certificates/CertificateSection";
import ContactSection from "@/components/contact/ContactSection";
import ParticleBackground from "@/components/effects/ParticleBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import PageLoader from "@/components/effects/PageLoader";
import MouseTrail from "@/components/effects/MouseTrail";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ParticleBackground />
      <CursorGlow />
      <MouseTrail />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectShowcase /> 
        <CertificateSection />
        <ContactSection />
      </main>
    </>
  );
}