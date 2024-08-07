import AboutSection from "@/_components/_homepage/AboutSection";
import ContactSection from "@/_components/_homepage/ContactSection";
import FoundationsSection from "@/_components/_homepage/FoundationsSection";
import HeroSection from "@/_components/_homepage/HeroSection";
import IdeaSection from "@/_components/_homepage/IdeaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdeaSection />
      <AboutSection/>
      <FoundationsSection/>
      <ContactSection/>
    </>
  );
}
