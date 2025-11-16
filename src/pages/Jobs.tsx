import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import jobsPillImg from "@/assets/jobs-pill.png";
import { Link } from "react-router-dom";
import learnImage from "@/assets/learn_image.png";
import teachImage from "@/assets/teach_image.png";

const jobs = [
  {
    id: "F6061",
    title: "Jib Crane Automation",
    description:
      "Complete automation of a Jib Crane design using SolidWorks API, including automated generation of parametric sketches, 3D part models, full assembly, 2D drawings with dimensions, and BOM. The system should take user-defined inputs such as crane height, boom length, load capacity, rotation angle, and mounting type, and automatically generate all necessary files and documentation for manufacturing, with minimal manual effort.",
    platform: "SolidWorks API, VBA / VB.net / C# / Python",
    duration: "20 Days",
    budget: "₹ 15,000",
    status: "Available",
  },
  {
    id: "F6062",
    title: "Heat Exchanger Design Automation",
    description:
      "Complete automation of a Heat Exchanger design using SolidWorks API, including automated generation of parametric sketches, 3D part models, full assembly, 2D drawings with dimensions, and BOM. The system should take user-defined inputs such as tube length, diameter, number of tubes, shell size, baffle spacing, and nozzle positions, and automatically generate all required models and manufacturing drawings with minimal manual intervention.",
    platform: "SolidWorks API, VBA / VB.net / C# / Python",
    duration: "20 Days",
    budget: "₹ 15,000",
    status: "Available",
  },
  {
    id: "F6063",
    title: "Elevator Design Automation",
    description:
      "Complete automation of an Elevator design using SolidWorks API, including automated generation of parametric sketches, 3D part models, full assembly, 2D drawings with dimensions, and BOM. The system should take user-defined inputs such as elevator height, cabin size, number of floors, load capacity, guide rail length, and door type, and automatically generate all necessary design files and documentation required for manufacturing and installation, with minimal manual effort.",
    platform: "SolidWorks API, VBA / VB.net / C# / Python",
    duration: "30 Days",
    budget: "₹ 15,000",
    status: "Available",
  },
  {
    id: "F6064",
    title: "Sheet Metal Electrical Enclosure Generator",
    description:
      "Complete automation of an Elevator design using SolidWorks API, including automated generation of parametric sketches, 3D part models, full assembly, 2D drawings with dimensions, and BOM. The system should take user-defined inputs such as elevator height, cabin size, number of floors, load capacity, guide rail length, and door type, and automatically generate all necessary design files and documentation required for manufacturing and installation, with minimal manual effort.",
    platform: "SolidWorks API, VBA / VB.net / C# / Python",
    duration: "30 Days",
    budget: "₹ 15,000",
    status: "Available",
  },
  {
    id: "F6065",
    title: "Pressure Vessel Design Automation",
    description:
      "Complete automation of a Pressure Vessel design using SolidWorks API, including automated generation of parametric sketches, 3D part models, full assembly, 2D drawings with dimensions, and BOM. The system should take user-defined inputs such as diameter, height, wall thickness, nozzle size and position, head type, and support type, and automatically generate all required design files, fabrication drawings, and documentation in compliance with manufacturing standards, with minimal manual effort.",
    platform: "SolidWorks API, VBA / VB.net / C# / Python",
    duration: "30 Days",
    budget: "₹ 25,000",
    status: "Closed",
  },
];

const Jobs = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="container mx-auto px-6 pt-32 pb-16 max-w-5xl flex-1">


      <div className="mt-16">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-400/80">
            What are you looking for?
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-blue-900">Learn with apixpert or teach with apixpert</h2>
          <p className="mt-2 text-base md:text-lg text-blue-900/70">
            Choose the track that fits your goals. Join as a mentor to contribute real-world automation expertise, or enroll to master enterprise-grade CAD automation and land production gigs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[36px] border border-blue-400/50 bg-blue-50/80 px-6 pb-12 pt-12 sm:px-8 sm:pt-16 shadow-[0_25px_80px_rgba(37,99,235,0.25)]">
              <div className="flex items-center justify-center mb-2">
                <div className="relative flex h-[120px] w-full items-center justify-center">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] h-[100px] rounded-t-[60px] border-t-[8px] border-x-[8px] border-b-0 border-blue-500/80 bg-white" />
                  <img src={teachImage} alt="Teach with apixpert" className="relative z-10 h-24 sm:h-28 lg:h-32 object-contain" style={{marginTop: '10px'}} loading="lazy" />
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center gap-5">
                <h3 className="text-3xl font-semibold text-blue-900">Do You Want To Teach Here?</h3>
                <p className="max-w-sm text-base leading-relaxed text-blue-900/80">
                  Become an apixpert mentor, share production-grade workflows, and earn by guiding engineers through live automation briefs.
                </p>
                <Button asChild className="rounded-full bg-blue-600 px-8 py-6 text-base text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] mt-8">
                  <Link to="/contact">Apply as Mentor</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[36px] border border-rose-400/50 bg-rose-50/80 px-6 pb-12 pt-12 sm:px-8 sm:pt-16 shadow-[0_25px_80px_rgba(244,63,94,0.25)]">
              <div className="flex items-center justify-center mb-2">
                <div className="relative flex h-[120px] w-full items-center justify-center">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] h-[100px] rounded-t-[60px] border-t-[8px] border-x-[8px] border-b-0 border-rose-500/80 bg-white" />
                  <img src={learnImage} alt="Learn with apixpert" className="relative z-10 h-24 sm:h-28 lg:h-32 object-contain" style={{marginTop: '10px'}} loading="lazy" />
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center gap-5">
                <h3 className="text-3xl font-semibold text-rose-900">Want To Learn Something New?</h3>
                <p className="max-w-sm text-base leading-relaxed text-rose-900/80">
                  Join our immersive automation cohorts, access internship tracks, and grow into production roles alongside our engineering teams.
                </p>
                <Button asChild className="rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-8 py-6 text-base text-white shadow-[0_18px_45px_rgba(244,63,94,0.35)]">
                  <Link to="/courses">Explore Learning Tracks</Link>
                </Button>
              </div>
            </div>

        </div>
      </div>
      {/* --- End of Learn/Teach section --- */}

      <section id="projects" className="mt-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">Live Job Openings & Freelance Projects</h2>
          <p className="text-sm text-white/60">
            Every brief reflects real automation workstreams sourced from Apixpert clients. Submit your bid or reach out for managed delivery.
          </p>
        </div>
        {jobs.map((job) => (
          <div key={job.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{job.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.status === "Available" ? "bg-green-500/20 text-green-700" : "bg-red-500/20 text-red-700"}`}>{job.status} Bid Project</span>
            </div>
            <h2 className="text-xl font-bold mb-2 text-foreground">{job.title}</h2>
            <p className="mb-3 text-sm text-muted-foreground">{job.description}</p>
            <div className="flex flex-wrap gap-4 text-sm mb-2">
              <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-700">Platform: {job.platform}</span>
              <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-700">Duration: {job.duration}</span>
              <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-700">Budget: {job.budget}</span>
            </div>
          </div>
        ))}
      </section>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Contact & Social</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Email: <a href="mailto:sales@apixpert.com" className="underline text-primary">sales@apixpert.com</a></li>
          <li>Phone/WhatsApp: <a href="tel:+918667311125" className="underline text-primary">+91 86673 11125</a></li>
        </ul>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php/?id=61567221713059&_rdr" target="_blank" rel="noreferrer" className="underline text-primary">Facebook</a>
          <a href="https://www.youtube.com/channel/ApiXpert" target="_blank" rel="noreferrer" className="underline text-primary">YouTube</a>
          <a href="https://www.instagram.com/apixpert/" target="_blank" rel="noreferrer" className="underline text-primary">Instagram</a>
          <a href="https://www.linkedin.com/company/apixpert/" target="_blank" rel="noreferrer" className="underline text-primary">LinkedIn</a>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Work Hours</h2>
        <p>Customer Support Available 24/7 for All Countries, based on availability. Contact your trainer directly or leave us a message.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Jobs;
