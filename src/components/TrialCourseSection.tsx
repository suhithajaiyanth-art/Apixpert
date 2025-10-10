import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
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
    <section className="py-16 px-4 md:py-24 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Throwable Interactive Elements */}
          <div className="relative h-[500px] md:h-[600px]">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get the trial course for the price of a coffee!
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Get exclusive access to a 30-minute recorded lesson (1st lesson) on SolidWorks
              API, NX Open API, CATIA, and AutoCAD Automation/Customization. Plus, enjoy
              trainer support and a 1-on-1 personal discussion to clear your doubts. This trial
              course gives you a glimpse of the teaching style and helps you decide the right
              learning path for you! Once you purchase the course, our support team will
              contact you to schedule a meeting with an expert, ensuring all your doubts are
              cleared.
            </p>

            <Button
              size="lg"
              className="mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-8 py-6 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Explore Trial Course
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrialCourseSection;
