import AboutSection from "@/_components/_homepage/AboutSection";
import ContactSection from "@/_components/_homepage/ContactSection";
import HeroSection from "@/_components/_homepage/HeroSection";
import IdeaSection from "@/_components/_homepage/IdeaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdeaSection />
      <AboutSection/>
      <ContactSection/>
    </>
  );
}
