import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ThrowableElements from "./ThrowableElements";

const TrialCourseSection = () => {
  const tags = [
    "SolidWorks API",
    "NX Open",
    "CATIA Automation",
    "AutoCAD",
    "Customization",
  ];

  return (
    <section className="py-8 px-2 md:py-12 bg-black">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Column - Throwable Interactive Elements */}
          <div className="relative h-[420px] md:h-[480px] overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10">
            <ThrowableElements tags={tags} />
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Get the trial course for the price of a coffee!
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Get exclusive access to a 30-minute recorded lesson (1st lesson) on SolidWorks
              API, NX Open API, CATIA, and AutoCAD Automation/Customization. Plus, enjoy
              trainer support and a 1-on-1 personal discussion to clear your doubts. This trial
              course gives you a glimpse of the teaching style and helps you decide the right
              learning path for you! Once you purchase the course, our support team will
              contact you to schedule a meeting with an expert, ensuring all your doubts are
              cleared.
            </p>

            <Button
              size="sm"
              className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-6 py-3 rounded-full text-sm md:text-base shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              asChild
            >
              <Link to="/courses">Explore Trial Course <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrialCourseSection;
