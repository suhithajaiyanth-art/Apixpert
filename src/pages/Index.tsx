import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import TrialCourseSection from "@/components/TrialCourseSection";
import EMIOffersSection from "@/components/EMIOffersSection";
import AITrainingSection from "@/components/AITrainingSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TechBanner />
      <ExpertiseSection />
      <GetInTouchSection />
      <TrialCourseSection />
      <EMIOffersSection />
      <AITrainingSection />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
