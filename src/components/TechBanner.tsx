const TechBanner = () => {
  const technologies = [
    { name: "SIEMENS NX", icon: "NX" },
    { name: "C++", icon: "C++" },
    { name: "Automation", icon: "⚙️" },
    { name: "VB.net", icon: "VB" },
    { name: "Python", icon: "🐍" },
  ];

  return (
    <section className="relative bg-accent py-12 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary/20 to-accent opacity-50" />
      
      <div className="relative container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center text-white group cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 transform group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-sm md:text-base font-semibold opacity-90">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Contact Button */}
      <button className="fixed bottom-8 right-8 z-50 bg-white text-accent px-6 py-3 rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 font-semibold flex items-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
        Contact us
      </button>
    </section>
  );
};

export default TechBanner;
