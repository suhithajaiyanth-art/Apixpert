import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight max-w-6xl mx-auto">
          Unlock Your Skills With Expert Training&nbsp;& <br />Hands On Internship In CAD Design & Automation
        </h1>
        <Link to="/courses">
          <Button variant="gradient" size="sm" className="text-base px-8 py-4 h-auto rounded-full mt-2">
            Explore Course
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
