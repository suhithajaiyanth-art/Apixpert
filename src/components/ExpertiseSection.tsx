import { Play, Clock, Target, Rocket, Pencil } from "lucide-react";
import { useState } from "react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

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

            {/* Video Container with Blob Shape */}
            <div className="relative w-full max-w-[500px]">
              <div 
                className="relative overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                  aspectRatio: "1/1"
                }}
              >
                {/* Video Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-110"
                  style={{ backgroundImage: `url(${videoThumbnail})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-800/40" />

                {/* Play Button - Centered */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-xl scale-150" />
                    
                    {/* Pulse ring */}
                    <div className="absolute inset-0 bg-white rounded-full opacity-30 animate-ping" />
                    
                    {/* Main Play Button */}
                    <div className="relative bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/50">
                      <Play className="w-8 h-8 text-slate-900 fill-slate-900 ml-1" />
                    </div>
                  </div>
                </button>
              </div>

              {/* Glow effect behind blob */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
