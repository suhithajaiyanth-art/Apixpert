import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Filter, Search } from "lucide-react";
import autocadPng from "../assets/Autocad.png";
import vbdotnetPng from "../assets/vbdotnet.png";
import nxPng from "../assets/nx.png";
import creoPng from "../assets/creo.png";
import catiaPng from "../assets/catia.png";
import solidworksPng from "../assets/solidworks.png";
import pythonCoursePng from "../assets/python_course.png";
import csharpPng from "../assets/ccourses.png";

type Course = {
  id: number;
  name: string;
  type: "Single" | "Bundle Offer";
  actualPrice: number | null;
  offerPrice?: number | null;
  bundlePrice?: number | null;
};

export const COURSE_CATALOG: Course[] = [
  { id: 1, name: "C# for Automation (Live)", type: "Single", actualPrice: 47200, offerPrice: 23600 },
  { id: 2, name: "C# for Automation (Recorded with Live Support)", type: "Single", actualPrice: 23600, offerPrice: 11800, bundlePrice: 8260 },
  { id: 3, name: "VBA/VB.NET for Automation (Live)", type: "Single", actualPrice: 35400, offerPrice: 17700 },
  { id: 4, name: "Python for Automation (Live)", type: "Single", actualPrice: 35400, offerPrice: 17700 },
  { id: 5, name: "SolidWorks Design (Basic)", type: "Single", actualPrice: 23600, offerPrice: 11800, bundlePrice: 8260 },
  { id: 6, name: "SolidWorks Design (Advanced)", type: "Single", actualPrice: 70800, offerPrice: 35400, bundlePrice: 29500 },
  { id: 7, name: "SolidWorks API Automation / Customization (Live)", type: "Single", actualPrice: 82600, offerPrice: 41300 },
  { id: 8, name: "SolidWorks API Automation / Customization (Recorded with Live Support)", type: "Single", actualPrice: 59000, offerPrice: 29500, bundlePrice: 27140 },
  { id: 9, name: "SolidWorks API Automation (Live) + C# for Automation (Live)", type: "Bundle Offer", actualPrice: 129800, offerPrice: 64900, bundlePrice: 47200 },
  { id: 10, name: "SolidWorks API Automation (Recorded) + C# for Automation (Recorded)", type: "Bundle Offer", actualPrice: 82600, offerPrice: 41300, bundlePrice: 35400 },
  { id: 11, name: "SolidWorks API Automation (Rec) + C# for Automation (Rec) + SolidWorks Design (Basic - Live)", type: "Bundle Offer", actualPrice: 106200, offerPrice: 53100, bundlePrice: 43660 },
  { id: 12, name: "SolidWorks API Automation (Rec) + C# for Automation (Rec) + SolidWorks Design (Advanced - Live)", type: "Bundle Offer", actualPrice: 153400, offerPrice: 76700, bundlePrice: 64900 },
  { id: 13, name: "SolidWorks API Automation (Live) + C# for Automation (Live) + SolidWorks Design (Basic - Live)", type: "Bundle Offer", actualPrice: 153400, offerPrice: 76700, bundlePrice: 55460 },
  { id: 14, name: "SolidWorks API Automation (Live) + C# for Automation (Live) + SolidWorks Design (Advanced - Live)", type: "Bundle Offer", actualPrice: 200600, offerPrice: 100300, bundlePrice: 76700 },
  { id: 15, name: "UG NX Design (Advanced)", type: "Single", actualPrice: 70800, offerPrice: 35400, bundlePrice: 29500 },
  { id: 16, name: "UG NX Design (Basic)", type: "Single", actualPrice: 23600, offerPrice: 11800, bundlePrice: 8260 },
  { id: 17, name: "NX Open API Automation / Customization (Live)", type: "Single", actualPrice: 82600, offerPrice: 41300 },
  { id: 18, name: "NX Open API Automation (Live) + C# for Automation (Live)", type: "Bundle Offer", actualPrice: 129800, offerPrice: 64900, bundlePrice: 47200 },
  { id: 19, name: "NX Open API Automation (Live) + C# for Automation (Recorded)", type: "Bundle Offer", actualPrice: 106200, offerPrice: 53100, bundlePrice: 41300 },
  { id: 20, name: "NX Open API Automation (Live) + C# for Automation (Live) + UG NX Design (Advanced)", type: "Bundle Offer", actualPrice: 200600, offerPrice: 100300, bundlePrice: 76700 },
  { id: 21, name: "NX Open API Automation (Live) + C# for Automation (Recorded) + UG NX Design (Advanced)", type: "Bundle Offer", actualPrice: 177000, offerPrice: 88500, bundlePrice: 70800 },
  { id: 22, name: "NX Open API Automation (Live) + C# for Automation (Live) + UG NX Design (Basic)", type: "Bundle Offer", actualPrice: 153400, offerPrice: 76700, bundlePrice: 55460 },
  { id: 23, name: "NX Open API Automation (Live) + C# for Automation (Recorded) + UG NX Design (Basic)", type: "Bundle Offer", actualPrice: 129800, offerPrice: 64900, bundlePrice: 49560 },
  { id: 24, name: "CATIA Design (Advanced)", type: "Single", actualPrice: 70800, offerPrice: 35400, bundlePrice: 29500 },
  { id: 25, name: "CATIA Design (Basic)", type: "Single", actualPrice: 23600, offerPrice: 11800, bundlePrice: 8260 },
  { id: 26, name: "CATIA API Automation / Customization (Live)", type: "Single", actualPrice: 82600, offerPrice: 41300 },
  { id: 27, name: "CATIA Automation + VBA/VB.NET for Automation", type: "Bundle Offer", actualPrice: 118000, offerPrice: 59000, bundlePrice: 47200 },
  { id: 28, name: "CATIA Automation + VBA/VB.NET for Automation + CATIA Design (Advanced)", type: "Bundle Offer", actualPrice: 188800, offerPrice: 94400, bundlePrice: 76700 },
  { id: 29, name: "CATIA Automation + VBA/VB.NET for Automation + CATIA Design (Basic)", type: "Bundle Offer", actualPrice: 141600, offerPrice: 70800, bundlePrice: 55460 },
  { id: 30, name: "AutoCAD Inventor API Automation / Customization", type: "Single", actualPrice: 82600, offerPrice: 41300 },
  { id: 31, name: "CREO API Automation / Customization", type: "Single", actualPrice: 82600, offerPrice: 41300 },
  { id: 32, name: "AutoCAD Design (Advanced)", type: "Single", actualPrice: 70800, offerPrice: 35400, bundlePrice: 29500 },
  { id: 33, name: "AutoCAD Design (Basic)", type: "Single", actualPrice: 23600, offerPrice: 11800, bundlePrice: 8260 },
  { id: 34, name: "AutoCAD API Automation / Customization (Live)", type: "Single", actualPrice: 82600, offerPrice: 41300 },
  { id: 35, name: "AutoCAD API Automation + C# for Automation", type: "Bundle Offer", actualPrice: 129800, offerPrice: 64900, bundlePrice: 47200 },
  { id: 36, name: "AutoCAD API Automation + C# for Automation + AutoCAD Design (Advanced)", type: "Bundle Offer", actualPrice: 200600, offerPrice: 82600 },
  { id: 37, name: "AutoCAD API Automation + C# for Automation + AutoCAD Design (Basic)", type: "Bundle Offer", actualPrice: 153400, offerPrice: 76700, bundlePrice: 55460 }
];

const formatPrice = (value?: number | null) => {
  if (!value) return null;
  return `₹${value.toLocaleString("en-IN")}`;
};

const deriveModeLabel = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("recorded") && lower.includes("live")) {
    if (lower.includes("with live support")) {
      return "Recorded + Live Support";
    }
    return "Hybrid Delivery";
  }
  if (lower.includes("(live)")) {
    return "Live Cohort";
  }
  if (lower.includes("live")) {
    return "Live Cohort";
  }
  if (lower.includes("recorded")) {
    return "Recorded";
  }
  return null;
};

const deriveTrackLabel = (name: string) => {
  const primarySegment = name.split("+")[0];
  return primarySegment.split("(")[0].trim();
};

const SINGLE_IMAGES = [
  "https://images.unsplash.com/photo-1581090468382-22bebf06f2ad?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1537432376769-00aabc1cc0eb?w=900&h=600&fit=crop"
];

const BUNDLE_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop"
];

const COLOR_SEQUENCE: Array<"primary" | "secondary" | "accent" | "orange"> = [
  "secondary",
  "primary",
  "orange",
  "accent"
];

type CourseCardContent = {
  id: number;
  title: string;
  description: string;
  category: string;
  startDate: string;
  price: string;
  image: string;
  colorScheme: (typeof COLOR_SEQUENCE)[number];
  priceDetails: { label: string; value: string; highlight?: boolean }[];
};

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const courses = useMemo<CourseCardContent[]>(() => {
    return COURSE_CATALOG.map((course, index) => {
      const standardFee = formatPrice(course.actualPrice);
      const offerFee = formatPrice(course.offerPrice);
      const bundleFee = formatPrice(course.bundlePrice);
      const modeLabel = deriveModeLabel(course.name) ?? (course.type === "Bundle Offer" ? "Bundle Program" : "Single Program");
      const focus = deriveTrackLabel(course.name);

      const priceDetails = [] as { label: string; value: string; highlight?: boolean }[];

      if (offerFee) {
        priceDetails.push({ label: "Current Offer (incl. GST)", value: offerFee, highlight: true });
      }
      if (standardFee) {
        priceDetails.push({ label: "Standard Fee (incl. GST)", value: standardFee, highlight: !offerFee });
      }
      if (bundleFee) {
        priceDetails.push({ label: "Bundle Upgrade (incl. GST)", value: bundleFee });
      }

      const bestAvailable = offerFee ?? standardFee ?? bundleFee ?? "";

      const imagePool = course.type === "Bundle Offer" ? BUNDLE_IMAGES : SINGLE_IMAGES;
      let image = imagePool[index % imagePool.length];
      const colorScheme = COLOR_SEQUENCE[index % COLOR_SEQUENCE.length];

      const nameLower = course.name.toLowerCase();
      if (nameLower.includes("c#")) {
        image = csharpPng;
      } else if (nameLower.includes("solidworks")) {
        image = solidworksPng;
      } else if (nameLower.includes("catia")) {
        image = catiaPng;
      } else if (nameLower.includes("python")) {
        image = pythonCoursePng;
      } else if (nameLower.includes("creo")) {
        image = creoPng;
      }

      return {
        id: course.id,
        title: course.name,
        description:
          course.type === "Bundle Offer"
            ? `Bundle covering ${focus} and allied tracks with apixpert mentors guiding every module.`
            : `Deep-dive training focused on ${focus} delivered by apixpert automation specialists.`,
        category: course.type === "Bundle Offer" ? "Bundle Offer" : "Single Course",
        startDate: modeLabel,
        price: bestAvailable ? `${bestAvailable}` : "Contact for pricing",
        image,
        colorScheme,
        priceDetails: priceDetails.length ? priceDetails : []
      };
    });
  }, []);

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return courses.filter((course) => {
      let matchesType = false;
      switch (typeFilter) {
        case "all":
        case "nofilter":
          matchesType = true;
          break;
        case "single":
          matchesType = course.category === "Single Course";
          break;
        case "bundle":
        case "Bundle Offer":
          matchesType = course.category === "Bundle Offer";
          break;
        case "solidworks":
          matchesType = course.title.toLowerCase().includes("solidworks");
          break;
        case "ugnx":
        case "ug nx":
          matchesType = course.title.toLowerCase().includes("nx");
          break;
        case "catia":
          matchesType = course.title.toLowerCase().includes("catia");
          break;
        case "autocad":
          matchesType = course.title.toLowerCase().includes("autocad");
          break;
        case "design":
          matchesType = course.title.toLowerCase().includes("design");
          break;
        case "trial":
          matchesType = course.title.toLowerCase().includes("trial");
          break;
        case "automation":
          matchesType = course.title.toLowerCase().includes("automation");
          break;
        default:
          matchesType = true;
      }
      const matchesTerm =
        term.length === 0 ||
        course.title.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term);
      return matchesType && matchesTerm;
    });
  }, [courses, searchTerm, typeFilter]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.div
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
            Explore Our Programs
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            Every apixpert course and bundle from our current catalog is listed below. All pricing already
            includes GST so you can plan your investment with clarity.
          </motion.p>
          <motion.div
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-sm text-white/80 border border-white/10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            All fees shown are GST-inclusive. No hidden taxes.
          </motion.div>
        </div>

        {/* New Filter UI - two rows of gradient tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-6 justify-start mb-6">
            {[
              { label: "All Courses", value: "all" },
              { label: "SolidWorks", value: "solidworks" },
              { label: "UG NX", value: "ugnx" },
              { label: "CATIA", value: "catia" },
              { label: "AutoCAD", value: "autocad" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setTypeFilter(tab.value as any)}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all ${typeFilter === tab.value ? "bg-gradient-to-b from-fuchsia-500 to-sky-400 text-white" : "bg-gray-200 text-black"}`}
                style={{ minWidth: 170 }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <hr className="border-t border-black/70 mb-8" />
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "No Filter", value: "nofilter" },
              { label: "Design", value: "design" },
              { label: "Trial", value: "trial" },
              { label: "Automation", value: "automation" },
              { label: "Bundle Offer", value: "bundle" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setTypeFilter(tab.value as any)}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all ${typeFilter === tab.value ? "bg-gradient-to-b from-fuchsia-500 to-sky-400 text-white" : "bg-gray-200 text-black"}`}
                style={{ minWidth: 170 }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.05,
                ease: [0.19, 1, 0.22, 1]
              }}
            >
              <CourseCard
                title={course.title}
                description={course.description}
                category={course.category}
                startDate={course.startDate}
                price={course.price}
                image={course.image}
                colorScheme={course.colorScheme}
                priceDetails={course.priceDetails}
              />
            </motion.div>
          ))}
          {filteredCourses.length === 0 && (
            <motion.div
              className="col-span-full rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No courses matched your filters. Clear the search or adjust the course type to continue exploring the catalog.
            </motion.div>
          )}
        </motion.div>
      </motion.div>
  <Footer />
  <ScrollToTopButton />
    </div>
  );
};

export default Courses;
