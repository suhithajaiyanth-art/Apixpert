import { Play, Clock, Target, Rocket, Pencil } from "lucide-react";
import { useState } from "react";
import videoThumbnail from "@/assets/videolayout.png";
import BlobVideo from "@/components/BlobVideo";

const ExpertiseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: Clock,
      title: "Achieve More in Less Time",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Target,
      title: "Zero Errors, Maximum Accuracy",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Get Ahead in a Low-Competition Field",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <div className="text-[200px] font-bold text-primary">AI</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <Pencil className="w-48 h-48 text-secondary" strokeWidth={1} />
      </div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                Elevate Your Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Gain industry-ready skills with expert-led training in SolidWorks, 
                CATIA, AutoCAD, and Siemens NX.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Video Player with Blob Shape */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Decorative circles */}
            <div className="absolute top-10 right-20 w-20 h-20 border-2 border-muted rounded-full opacity-30" />
            <div className="absolute bottom-32 left-10 w-16 h-16 border-2 border-muted rounded-full opacity-30" />
            <div className="absolute top-40 left-0 w-12 h-12 border-2 border-muted rounded-full opacity-30" />

            {/* Video thumbnail with play button, swap to YouTube embed on click */}
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl scale-110" />
              {!isPlaying ? (
                <>
                  <img
                    src={videoThumbnail}
                    alt="Video thumbnail"
                    className="rounded-2xl shadow-xl w-full max-w-xl object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center z-10 group"
                    onClick={() => setIsPlaying(true)}
                  >
                    <span className="absolute inline-block w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-primary to-purple-500 opacity-60 blur-xl animate-pulse" />
                    <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        className="w-8 h-8 text-primary drop-shadow-lg"
                        aria-hidden="true"
                      >
                        <circle cx="24" cy="24" r="22" fill="none" stroke="#6366f1" strokeWidth="2" />
                        <polygon points="20,16 34,24 20,32" fill="#6366f1" />
                      </svg>
                    </span>
                  </button>
                </>
              ) : (
                <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/dXdcw0A2T_E?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
