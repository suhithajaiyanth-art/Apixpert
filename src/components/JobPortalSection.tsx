
import { Link } from "react-router-dom";
import jobPortalImg from "@/assets/job-portal-person.png";

const JobPortalSection = () => (
  <section className="relative bg-[#2176ff] py-12 px-4 md:px-0 rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-12 shadow-lg">
    {/* Left: Text Content */}
    <div className="z-10 w-full md:w-1/2 pl-2 md:pl-8">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 bg-gray-100/70 inline-block px-2 rounded mb-6">Get Featured in Our Job Portal!</h2>
      <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
        We have tie-ups with leading engineering companies, helping you connect with top employers. To get featured in our job portal, you must:
      </p>
      <ul className="mb-6 space-y-4">
        <li className="flex items-center gap-3 text-white text-xl font-bold">
          <span className="inline-block bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-2xl">✔</span>
          Complete training with us
        </li>
        <li className="flex items-center gap-3 text-white text-xl font-bold">
          <span className="inline-block bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-2xl">✔</span>
          Pass a screening test
        </li>
        <li className="flex items-center gap-3 text-white text-xl font-bold">
          <span className="inline-block bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-2xl">✔</span>
          Complete an internship
        </li>
      </ul>
      <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
        This validates your skills and enhances your credibility, making it easier for employers to hire you quickly! <span className="inline-block">🚀</span>
      </p>
      <Link to="/jobs#top">
        <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition text-lg">
          Learn More
        </button>
      </Link>
    </div>
    {/* Right: Image */}
    <div className="hidden md:block absolute right-0 bottom-0 h-full z-0">
      <img
        src={jobPortalImg}
        alt="Job Portal Person"
        className="h-[420px] object-contain select-none pointer-events-none"
        draggable="false"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))', marginRight: '2rem' }}
      />
      {/* Decorative doodles */}
      <div className="absolute top-10 left-[-40px] text-white/60 text-4xl select-none">(</div>
      <div className="absolute bottom-10 left-[-40px] text-white/60 text-4xl select-none">)</div>
      <div className="absolute top-10 right-[-40px] text-white/60 text-4xl select-none">)</div>
      <div className="absolute bottom-10 right-[-40px] text-white/60 text-4xl select-none">(</div>
    </div>
    {/* Dotted background pattern */}
    <div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px'}} />
  </section>
);

export default JobPortalSection;
