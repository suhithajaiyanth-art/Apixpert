import { Flame, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const POPULAR_COURSES = [
  {
    title: "SolidWorks API Automation (Full Version)",
    badge: "Full Version",
    description: "Master advanced automation in SolidWorks with hands-on projects and expert support.",
    price: "₹47,200 incl. GST",
    color: "from-primary to-blue-600"
  },
  {
    title: "SolidWorks API Automation (Trial Version)",
    badge: "Trial Version",
    description: "Get a taste of SolidWorks API automation with our exclusive trial course.",
    price: "₹2,360 incl. GST",
    color: "from-accent to-orange-500"
  },
  {
    title: "CATIA API (Automation / Customization) Trial Version",
    badge: "Trial Version",
    description: "Explore CATIA automation and customization with this focused trial program.",
    price: "₹2,360 incl. GST",
    color: "from-secondary to-primary"
  }
];

const MostPopularCourses = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <Flame className="inline-block w-8 h-8 text-accent -mt-2 mr-2 animate-pulse" />
            Most Popular Courses
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our top-rated programs, trusted by hundreds of engineers and automation specialists.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_COURSES.map((course, idx) => (
            <motion.div
              key={course.title}
              className={`relative rounded-3xl border border-white/10 bg-gradient-to-br ${course.color} p-8 shadow-xl flex flex-col items-start justify-between min-h-[340px]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="mb-4 inline-block rounded-full bg-black/70 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                {course.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {course.title}
              </h3>
              <p className="text-white/80 mb-6 flex-1">{course.description}</p>
              <Button
                className="bg-black text-white hover:bg-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                View Details
              </Button>
              {openIdx === idx && (
                <div className="absolute left-0 right-0 top-full mt-3 z-30 rounded-2xl border border-white/15 bg-background shadow-2xl p-6 animate-fade-in flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                    <Button className="bg-primary text-white hover:bg-blue-700 font-semibold px-5 py-2 rounded-xl flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                  <a
                    href="/courses"
                    className="text-sm text-blue-400 underline hover:text-blue-300 transition-colors"
                  >
                    Go to all courses
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularCourses;
