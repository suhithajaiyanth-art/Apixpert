import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import geometricImage from "@/assets/geometric-illustration.png";

const TrialCourseSection = () => {
  const technologies = [
    { name: "AutoCAD", top: "15%", left: "5%" },
    { name: "NX Open", top: "55%", left: "10%" },
    { name: "SolidWorks API", top: "60%", left: "50%" },
    { name: "CATIA Automation", top: "10%", left: "45%" },
    { name: "Customization", top: "35%", left: "35%" },
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Illustration with Draggable Cards */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={geometricImage}
                alt="CAD automation illustration"
                className="w-3/4 h-auto object-contain"
              />
            </div>

            {/* Draggable Technology Cards */}
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                drag="y"
                dragConstraints={{ top: -100, bottom: 100 }}
                dragElastic={0.1}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{ scale: 1.05 }}
                whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                className="absolute cursor-grab"
                style={{ top: tech.top, left: tech.left }}
              >
                <div className="bg-white rounded-full px-6 py-3 shadow-lg">
                  <span className="font-bold text-black whitespace-nowrap text-sm md:text-base">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Decorative Stars */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 text-amber-500 text-2xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-20 text-amber-500 text-xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-32 left-16 text-amber-500 text-lg"
            >
              ✦
            </motion.div>
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
