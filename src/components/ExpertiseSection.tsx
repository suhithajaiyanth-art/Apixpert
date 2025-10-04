import { Play, Clock, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
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

          {/* Right Side - Video Player */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              {/* Video Thumbnail/Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
                {/* Simulated CAD Software Interface */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyMzI3MmYiLz48L3N2Zz4=')] opacity-50" />
                
                {/* Demo Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg">
                  API Extensive Demo
                </div>

                {/* Profile Circle */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-4 border-white/20 mt-16" />

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <div className="relative">
                    {/* Outer Pulse Ring */}
                    <div className="absolute inset-0 bg-red-500 rounded-full opacity-30 animate-ping" />
                    
                    {/* Main Play Button */}
                    <div className="relative bg-gradient-to-br from-red-600 to-red-500 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                </button>

                {/* Bottom Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Watch CAD Automation /
                        </p>
                        <p className="text-sm text-slate-600">
                          Customization Demo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
