import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ExpertiseSection from "@/components/ExpertiseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import TrialCourseSection from "@/components/TrialCourseSection";
import EMIOffersSection from "@/components/EMIOffersSection";
import AITrainingSection from "@/components/AITrainingSection";
import TopCompaniesSection from "@/components/TopCompaniesSection";
import JobPortalSection from "@/components/JobPortalSection";
import NewsletterPopup from "@/components/NewsletterPopup";
import Footer from "@/components/Footer";
import MostPopularCourses from "@/components/MostPopularCourses";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
  <Hero />
  <LogoCarousel />
  <ExpertiseSection />
  <GetInTouchSection />
  <TrialCourseSection />
  <MostPopularCourses />
  <EMIOffersSection />
  <AITrainingSection />
  <TopCompaniesSection />
  <JobPortalSection />
  <NewsletterPopup />
  <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
