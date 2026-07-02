import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectSection } from "../components/ProjectSection";
import { ExperienceSection } from "../components/ExperienceSection";
export const Home = () => {
  return (
    <div className="min-h-screen ">
      {/** background Effects */}
      <StarBackground />
      {/** Navbar */}
      <Navbar />
      {/** Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/** Footer */}
    </div>
  );
};
