import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Themetoggle } from "../components/Themetoggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectSection } from "../components/ProjectSection";
export const Home = () => {
  return (
    <div className="min-h-screen ">
      {/*Theme Toggle */}
      <Themetoggle />
      {/** background Effects */}
      <StarBackground />
      {/** Navbar */}
      <Navbar />
      {/** Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/** Footer */}
    </div>
  );
};
