import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import ExpertiseSection from "@/components/ExpertiseSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TechBanner />
      <ExpertiseSection />
    </div>
  );
};

export default Index;
