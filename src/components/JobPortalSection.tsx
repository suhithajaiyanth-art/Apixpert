
import { Link } from "react-router-dom";
import jobPortalImg from "@/assets/job-portal-person.png";


const checklist = [
  "Complete training with us",
  "Pass a screening test",
  "Complete an internship"
];

const JobPortalSection = () => (
  <section
    className="relative bg-[#2176ff] py-8 px-2 md:px-0 rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-7xl w-full mx-auto mt-8 mb-16 shadow-2xl min-h-[360px] border-4 border-blue-400"
    style={{
      background: 'linear-gradient(120deg, #2176ff 80%, #fff0 100%)',
      boxShadow: '0 8px 32px 0 rgba(33, 118, 255, 0.18)',
    }}
  >
    {/* Left: Text Content */}
    <div className="z-10 w-full md:w-1/2 pl-2 md:pl-8 flex flex-col gap-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg animate-bounce-slow">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M8 12.5l2.5 2.5L16 9" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight animate-fade-in">Get Featured in Our Job Portal!</h2>
      </div>
      <p className="text-white text-base md:text-lg mb-2 max-w-xl animate-fade-in delay-100">
        We have tie-ups with leading engineering companies, helping you connect with top employers. To get featured in our job portal, you must:
      </p>
      <ul className="mb-4 space-y-3">
        {checklist.map((item, idx) => (
          <li
            key={item}
            className={`flex items-center gap-3 text-white text-base md:text-lg font-bold animate-fade-in`}
            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
          >
            <span className="inline-block bg-white text-blue-600 rounded-full w-7 h-7 flex items-center justify-center text-xl shadow-md">✔</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-white text-base md:text-lg mb-4 max-w-xl animate-fade-in delay-200">
        This validates your skills and enhances your credibility, making it easier for employers to hire you quickly! <span className="inline-block">🚀</span>
      </p>
      <Link to="/jobs#top">
        <button className="bg-gradient-to-r from-sky-400 to-fuchsia-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all text-lg animate-pulse-slow">
          Learn More
        </button>
      </Link>
    </div>
    {/* Right: Image */}
    <div className="hidden md:block absolute right-0 bottom-0 h-full z-0 animate-float">
      <img
        src={jobPortalImg}
        alt="Job Portal Person"
        className="h-[280px] object-contain select-none pointer-events-none drop-shadow-2xl"
        draggable="false"
        style={{ marginRight: '2rem' }}
      />
      {/* Decorative doodles */}
      <div className="absolute top-6 left-[-30px] text-white/60 text-3xl select-none">(</div>
      <div className="absolute bottom-6 left-[-30px] text-white/60 text-3xl select-none">)</div>
      <div className="absolute top-6 right-[-30px] text-white/60 text-3xl select-none">)</div>
      <div className="absolute bottom-6 right-[-30px] text-white/60 text-3xl select-none">(</div>
    </div>
    {/* Dotted background pattern */}
    <div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px'}} />
    {/* Animation keyframes for fade, pulse, bounce, float */}
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fade-in {
        animation: fadeIn 0.7s cubic-bezier(.19,1,.22,1) both;
      }
      @keyframes pulseSlow {
        0%, 100% { box-shadow: 0 0 0 0 #38bdf880; }
        50% { box-shadow: 0 0 0 8px #38bdf820; }
      }
      .animate-pulse-slow {
        animation: pulseSlow 2s infinite;
      }
      @keyframes bounceSlow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce-slow {
        animation: bounceSlow 2.2s infinite;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .animate-float {
        animation: float 3.5s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default JobPortalSection;
