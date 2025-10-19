import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import jobsPillImg from "@/assets/jobs-pill.png";
import { Link } from "react-router-dom";

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
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-8 py-12 shadow-[0_45px_120px_rgba(10,14,37,0.55)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.2),_transparent_60%)]" />
        <div className="relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-6 shadow-[0_25px_80px_rgba(6,8,20,0.45)] backdrop-blur-sm space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                Choose your path
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Red Pill or Blue Pill?
                </h1>
                <p className="text-base leading-relaxed text-white/85 md:text-lg">
                   The Red Pill is for specialists ready to get hired by apixpert. The Blue Pill is for teams who want to hire us to automate their CAD pipelines. Pick the track that matches your mission—both stay inside our ecosystem and share the same quality bar.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-rose-500/40 bg-rose-100/70 p-5 text-black shadow-[0_25px_50px_rgba(244,63,94,0.25)]">
                <p className="text-sm font-bold uppercase tracking-wide text-red-600 font-bold">Red Pill · Get Hired</p>
                <p className="mt-2 text-sm text-black">
                  Join our bench of automation engineers and respond to curated gigs from global manufacturers.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-500/40 bg-blue-100/80 p-5 text-black shadow-[0_25px_50px_rgba(37,99,235,0.25)]">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600 font-bold">Blue Pill · Hire Us</p>
                <p className="mt-2 text-sm text-black">
                   Onboard apixpert to deliver turnkey CAD automation squads tailored to your backlog.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-[0_18px_45px_rgba(244,63,94,0.35)] hover:from-rose-400 hover:to-red-400">
                <a href="#projects">Show me the open projects</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-blue-400/60 bg-blue-100 text-blue-900 hover:bg-blue-200">
                <Link to="/contact">I want to hire Apixpert</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 rounded-[50%] bg-gradient-to-r from-blue-500/35 via-purple-500/30 to-rose-500/35 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[28px] border border-white/10 bg-black/30 p-4 backdrop-blur">
              <img
                src={jobsPillImg}
                alt="Red and blue pill decision illustration"
                className="mx-auto h-full w-full max-w-md object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

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
