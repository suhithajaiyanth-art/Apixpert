import { Play } from "lucide-react";

interface BlobVideoProps {
  poster: string;
  onPlay?: () => void;
  className?: string;
}

const BlobVideo = ({ poster, onPlay, className }: BlobVideoProps) => {
  // Path approximates the organic blob in the reference (concave top, bulged bottom)
  const d = "M100,380 C110,180 300,70 520,60 C600,55 680,55 760,60 C980,70 1090,180 1100,380 C1110,600 960,780 600,840 C240,780 90,600 100,380 Z";

  return (
    <div className={"relative w-full max-w-[600px] " + (className ?? "") }>
      <svg viewBox="0 0 1200 900" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
            <path d={d} />
          </clipPath>
        </defs>

        {/* Image masked by blob */}
        <g clipPath="url(#blobClip)">
          <image href={poster} width="1200" height="900" preserveAspectRatio="xMidYMid slice" />
          <rect width="1200" height="900" fill="url(#overlay)" opacity="0.15" />
        </g>

        {/* Outline */}
        <path d={d} fill="none" stroke={`hsl(var(--card))`} strokeOpacity={0.7} strokeWidth={12} />
        <path d={d} fill="none" stroke={`hsl(var(--background))`} strokeOpacity={0.3} strokeWidth={26} />
      </svg>

      {/* Centered Play Button */}
      <button
        aria-label="Play video"
        onClick={() => onPlay?.()}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
      >
        <span className="absolute inset-0 -m-6 rounded-full bg-primary/30 blur-xl opacity-60" />
        <span className="absolute inset-0 -m-2 rounded-full bg-primary/30 animate-ping" />
        <span className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-4 border-white/60 shadow-2xl group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-foreground fill-foreground ml-1" />
        </span>
      </button>
    </div>
  );
};

export default BlobVideo;
