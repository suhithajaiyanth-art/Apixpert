import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "./ui/button";
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
            <div className="absolute -top-8 -left-8 w-36 h-36 md:w-44 md:h-44 drop-shadow-2xl">
              <img 
                src={rotatingBadge} 
                alt="Need Help? Book a Free Consultation"
                className="w-full h-full animate-rotate-slow"
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
