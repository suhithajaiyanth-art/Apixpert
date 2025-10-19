import { motion } from "framer-motion";
import { ArrowRight, Code2, UserCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import aiBrainImage from "@/assets/ai-brain.jpg";
import codingIllustration from "@/assets/coding-illustration.png";
import instructorsImage from "@/assets/instructors.jpg";

const AITrainingSection = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - AI Brain with Floating Cards */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Main AI Brain Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
              >
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={aiBrainImage}
                    alt="AI neural network brain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating "Get Paid" Card */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-8 right-0 md:right-12 bg-white rounded-2xl shadow-xl p-4 z-10"
            >
              <p className="text-sm font-semibold text-gray-700 mb-2">Get Paid</p>
              <div className="flex items-end gap-1 h-16">
                <div className="w-6 bg-gray-400 rounded" style={{ height: '40%' }}></div>
                <div className="w-6 bg-cyan-500 rounded" style={{ height: '60%' }}></div>
                <div className="w-6 bg-green-500 rounded" style={{ height: '70%' }}></div>
                <div className="w-6 bg-red-500 rounded" style={{ height: '50%' }}></div>
                <div className="w-6 bg-yellow-500 rounded" style={{ height: '55%' }}></div>
                <div className="w-6 bg-purple-500 rounded" style={{ height: '85%' }}></div>
              </div>
            </motion.div>

            {/* JOIN US Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-8 left-0 md:left-8 bg-white rounded-2xl shadow-xl p-6 z-10"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">JOIN US</h3>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={instructorsImage} alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={instructorsImage} alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={instructorsImage} alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={instructorsImage} alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
                <div className="ml-2">
                  <p className="text-2xl font-bold text-primary">200+</p>
                  <p className="text-xs text-gray-600">Instructors</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Help Us Train Our AI & Get Paid!
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Are you an automation engineer working with SolidWorks API, NX Open API,
              CATIA, AutoCAD, CREO, or Inventor Automation/Customization? Contribute to
              our AI training by uploading your code, and get paid for it!
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-8 py-6 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              asChild
            >
              <Link to="/cadgpt">Submit Code<ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>

            {/* Coding Illustration and Features */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center justify-center">
                <img
                  src={codingIllustration}
                  alt="Coding illustration"
                  className="w-full max-w-[300px] h-auto"
                />
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-base md:text-lg font-medium">
                      Submit code in any programming language – VBA, VB.NET, C#, Python,
                      or C++.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-base md:text-lg font-medium">
                      Follow our submission instructions for approval.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AITrainingSection;
