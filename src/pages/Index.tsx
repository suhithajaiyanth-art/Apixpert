import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ExpertiseSection from "@/components/ExpertiseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import TrialCourseSection from "@/components/TrialCourseSection";
import EMIOffersSection from "@/components/EMIOffersSection";
import AITrainingSection from "@/components/AITrainingSection";
import TopCompaniesSection from "@/components/TopCompaniesSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoCarousel />
      <ExpertiseSection />
      <GetInTouchSection />
      <TrialCourseSection />
      <EMIOffersSection />
      <AITrainingSection />
  <TopCompaniesSection />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
