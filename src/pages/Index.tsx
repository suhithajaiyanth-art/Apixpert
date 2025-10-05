import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TechBanner />
      <ExpertiseSection />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
