
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const CADGPT = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-[#18181b] flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12">
        {/* Heading and subtitle only */}
        <div className="mb-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Meet CADGPT</h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl">
            CADGPT turns concepts into production-ready CAD automation, saving time and eliminating technical barriers.
          </p>
        </div>
        {/* Prompt Box */}
        <form className="w-full max-w-3xl flex flex-col items-center" onSubmit={e => { e.preventDefault(); /* handle prompt submit here */ }}>
          <div className="w-full">
            <textarea
              className="w-full h-32 md:h-24 bg-black/40 border-2 border-gray-500 rounded-2xl text-white text-lg p-6 focus:outline-none focus:border-blue-500 transition resize-none placeholder-gray-400"
              placeholder="Build me a clo..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="absolute right-8 bottom-8 md:static md:mt-6 flex items-center justify-center bg-white text-black font-bold text-xl rounded-full w-12 h-12 shadow-lg hover:bg-gray-200 transition md:w-auto md:px-10 md:py-4 md:rounded-full md:text-lg md:font-semibold md:shadow-xl md:bg-white md:hover:bg-gray-100"
            style={{marginTop: '1.5rem'}}
          >
            <span className="hidden md:inline-block mr-2">Start Building</span>
            <span className="inline-block md:hidden">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M12 7v7m0 0l3-3m-3 3l-3-3" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="md:hidden">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 5v6m0 0l2.5-2.5M10 11l-2.5-2.5" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
          <div className="mt-8 text-center w-full">
            <p className="text-lg text-white font-semibold">AI Training for Interview and Monk test related to Design</p>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CADGPT;
