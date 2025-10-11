const marqueeRowStyles = "flex w-[200%] items-center gap-6";

const companiesRowOne = [
  "John Deere",
  "Dassault Aviation",
  "Bosch",
  "Apple (Hardware)",
  "SpaceX",
  "Ferrari",
  "Honda R&D",
  "Rolls-Royce (Aero)",
];

const companiesRowTwo = [
  "Bechtel",
  "AECOM",
  "Hyundai Motors",
  "Volvo Group",
  "Cisco Systems",
  "Philips",
  "Tesla",
  "BMW",
  "Ford",
  "Mercedes-Benz",
];

const renderTag = (label: string, direction: "ltr" | "rtl", key: number) => {
  const arrow = direction === "ltr" ? "▶" : "◀";
  return (
    <span
      key={`${label}-${key}`}
      className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-transform duration-300 md:text-base"
    >
      {direction === "rtl" && <span className="text-primary">{arrow}</span>}
      <span>{label}</span>
      {direction === "ltr" && <span className="text-primary">{arrow}</span>}
    </span>
  );
};

const TopCompaniesSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
          Top Companies Utilizing CAD Automation
        </h2>

        <div className="mt-12 space-y-10">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-white/0" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-white/0" />

            <div
              className={`${marqueeRowStyles} animate-marquee-ltr group-hover:[animation-play-state:paused]`}
            >
              {[...companiesRowOne, ...companiesRowOne].map((company, index) =>
                renderTag(company, "ltr", index)
              )}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-white/0" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-white/0" />

            <div
              className={`${marqueeRowStyles} animate-marquee-rtl group-hover:[animation-play-state:paused]`}
            >
              {[...companiesRowTwo, ...companiesRowTwo].map((company, index) =>
                renderTag(company, "rtl", index)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompaniesSection;
