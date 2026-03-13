import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TechSection from "@/components/technologies/TechSection";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import AboutSection from "@/components/about/AboutSection";
import CertificateSection from "@/components/certificates/CertificateSection";
import ContactSection from "@/components/contact/ContactSection";
import { Certificate } from "crypto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechSection />
        <ProjectShowcase />
        <AboutSection />
        <CertificateSection />
        <ContactSection />
      </main>
    </>
  );
}