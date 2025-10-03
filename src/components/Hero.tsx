import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
          Unlock Your Skills With Expert Training & Hands On Internship In CAD Design & Automation
        </h1>
        
        <Link to="/courses">
          <Button variant="gradient" size="lg" className="text-lg px-12 py-6 h-auto rounded-full">
            Explore Course
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
