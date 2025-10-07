import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import EMIOffersSection from "@/components/EMIOffersSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TechBanner />
      <ExpertiseSection />
      <GetInTouchSection />
      <EMIOffersSection />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
