import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "./ui/button";
import consultationImage from "@/assets/consultation-image.jpg";

const GetInTouchSection = () => {
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Convert scroll position to rotation (rotates continuously as you scroll)
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const benefits = [
    "Clear your doubts",
    "Get personalized recommendations",
    "Make informed decisions",
    "Business collaboration",
    "Service Requirements"
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <motion.div 
              className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40"
              style={{ rotate }}
            >
              <div className="relative w-full h-full">
                {/* Gear/Cog Shape */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                  {/* Gear teeth */}
                  <path
                    d="M100,20 L110,35 L120,20 L125,40 L135,30 L135,50 L150,45 L145,65 L160,65 L150,80 L165,90 L145,95 L150,110 L135,110 L135,125 L125,115 L120,135 L110,120 L100,135 L90,120 L85,135 L75,115 L65,125 L65,110 L50,110 L55,95 L35,90 L50,80 L40,65 L55,65 L50,45 L65,50 L65,30 L75,40 L80,20 L90,35 Z"
                    fill="url(#gearGradient)"
                    stroke="hsl(var(--background))"
                    strokeWidth="3"
                  />
                  {/* Center circle */}
                  <circle cx="100" cy="100" r="45" fill="hsl(var(--background))" />
                </svg>

                {/* Centered Text - Counter-rotates to stay readable */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ rotate: useTransform(rotate, (r) => -r) }}
                >
                  <div className="text-center px-2">
                    <p className="text-[10px] md:text-xs font-bold text-foreground leading-tight">
                      Need Help?
                    </p>
                    <Phone className="w-4 h-4 md:w-5 md:h-5 mx-auto my-1 text-primary" />
                    <p className="text-[8px] md:text-[10px] font-semibold text-muted-foreground leading-tight">
                      Book a free<br/>consultation
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Get in Touch with Us!
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg">
              Have questions about our training programs, software selection, or services?
            </p>
            
            <p className="text-muted-foreground text-base md:text-lg font-medium">
              Schedule a <span className="text-primary font-bold">FREE 1-on-1</span> call with our expert and get the guidance you need.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 py-4">
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                variant="gradient"
                className="text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Book Appointment
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
