import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import consultationImage from "@/assets/consultation-image.jpg";
import rotatingBadge from "@/assets/rotating-badge.png";

const GetInTouchSection = () => {

  const benefits = [
    "Clear your doubts",
    "Get personalized recommendations",
    "Make informed decisions",
    "Business collaboration",
    "Service Requirements"
  ];

  // Scroll-based rotation for badge
  const [rotation, setRotation] = useState(0);
  const lastScroll = useRef(window.scrollY);
  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      const delta = current - lastScroll.current;
      setRotation((r) => r + delta * 1.2); // 1.2deg per px scrolled
      lastScroll.current = current;
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-8 px-2 md:py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side - Images with Rotating Badge */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={consultationImage} 
                alt="Consultation with expert showing CAD software"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            {/* Rotating Badge */}
            <div className="absolute -top-8 -left-8 w-36 h-36 md:w-44 md:h-44 drop-shadow-2xl select-none pointer-events-none">
              <img
                src={rotatingBadge}
                alt="Need Help? Book a Free Consultation"
                className="w-full h-full"
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s linear' }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Get in Touch with Us!
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base">
              Have questions about our training programs, software selection, or services?
            </p>
            
            <p className="text-muted-foreground text-sm md:text-base font-medium">
              Schedule a <span className="text-primary font-bold">FREE 1-on-1</span> call with our expert and get the guidance you need.
            </p>

            {/* Benefits List */}
            <div className="space-y-2 py-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground text-base md:text-lg font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                size="sm"
                variant="gradient"
                className="text-sm md:text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button 
                size="sm"
                variant="outline"
                className="text-sm md:text-base px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link to="/contact"><Phone className="w-5 h-5 mr-2" />Contact us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
