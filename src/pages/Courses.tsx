import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "NX CAD Design Fundamentals",
      description: "Master the basics of SIEMENS NX CAD design and modeling.",
      category: "CAD Design",
      startDate: "January 15, 2025",
      price: "$299 / monthly",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      colorScheme: 'secondary' as const
    },
    {
      id: 2,
      title: "Advanced C++ Programming",
      description: "Deep dive into C++ for CAD automation and development.",
      category: "Programming",
      startDate: "February 1, 2025",
      price: "$349 / monthly",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
      colorScheme: 'primary' as const
    },
    {
      id: 3,
      title: "CAD Automation with Python",
      description: "Automate your CAD workflows using Python scripting.",
      category: "Automation",
      startDate: "March 10, 2025",
      price: "Free!",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      colorScheme: 'orange' as const
    },
    {
      id: 4,
      title: "VB.NET for CAD Development",
      description: "Build powerful CAD applications with VB.NET framework.",
      category: "Development",
      startDate: "February 20, 2025",
      price: "$275 / monthly",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      colorScheme: 'accent' as const
    },
    {
      id: 5,
      title: "Complete Automation Suite",
      description: "End-to-end automation solutions for manufacturing.",
      category: "Advanced Automation",
      startDate: "April 5, 2025",
      price: "$450 / monthly",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      colorScheme: 'primary' as const
    },
    {
      id: 6,
      title: "NX Open API Mastery",
      description: "Leverage NX Open API for custom tool development.",
      category: "API Development",
      startDate: "March 25, 2025",
      price: "$395 / monthly",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      colorScheme: 'secondary' as const
    }
  ];

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
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.div 
        ref={sectionRef}
        className="container mx-auto px-6 pt-32 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="mb-16 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            Explore Our Courses
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            Transform your skills with our comprehensive training programs in CAD Design & Automation
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.1,
                ease: [0.19, 1, 0.22, 1] 
              }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Courses;
