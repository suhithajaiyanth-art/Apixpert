import { motion } from "framer-motion";
import { Star, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const EMIOffersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Panel - EMI Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  EMI Options Available!
                </h2>
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent mb-4">
                  ₹1055
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Upgrade your skills without financial burden! Pay in smaller, manageable instalments make learning more affordable & stress-free.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <Button 
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                >
                  <CreditCard className="mr-2 w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  Debit Card / Credit Card EMI Available
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  className="w-full bg-black text-white hover:bg-gray-900 border-2 border-white/20 font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/courses">View Courses<ArrowRight className="ml-2 w-5 h-5 text-white" /></Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-2 pt-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">5/5 Stars in 100+ reviews!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Offers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hassle-Free Payments with EMI – Available Worldwide
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience flexible payment options designed to make your learning journey accessible. Choose from our exclusive offers and start your transformation today.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Students / Team Discount Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group/card overflow-hidden"
              >
                {/* Popular Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Popular
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground pr-20">
                    Students / Team Discount
                  </h3>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>Buy 3, Get 1 Free Offer!</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>Select any 2 software of your choice.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>Get C# / VBA / VB.NET programming for FREE!</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>Includes 1 to 6 months internship for all 4 users.</span>
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>

              {/* Bundle Offers Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group/card overflow-hidden"
              >
                {/* Popular Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Popular
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground pr-20">
                    Bundle Offers
                  </h3>
                  <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Limited Deal 60% Offer
                  </p>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>SolidWorks API + C# For Automation</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>NX Open + C# For Automation</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>CATIA Automation + C# For Automation</span>
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EMIOffersSection;