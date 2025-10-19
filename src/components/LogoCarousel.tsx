import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

// Import logo images
import autocadLogo from "@/assets/autocad.webp";
import blocksLogo from "@/assets/blocks.png";
import cLogo from "@/assets/c.png";
import catiaLogo from "@/assets/catia.webp";
import pythonLogo from "@/assets/python.png";
import simensLogo from "@/assets/simenslogo.webp";
import solidworksLogo from "@/assets/solidworks.webp";
import vbnetLogo from "@/assets/vbnet.png";

const logoData = [
  { src: vbnetLogo, alt: "VB.NET" },
  { src: solidworksLogo, alt: "SolidWorks" },
  { src: cLogo, alt: "C Programming" },
  { src: catiaLogo, alt: "CATIA" },
  { src: autocadLogo, alt: "AutoCAD" },
  { src: pythonLogo, alt: "Python" },
  { src: simensLogo, alt: "Siemens" },
  { src: blocksLogo, alt: "Blocks" },
];

const LogoCarousel = () => {

  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logoData, ...logoData];

  return (
    <section
      className="relative py-0"
      aria-label="Technologies We Teach"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="w-full flex justify-center overflow-hidden" style={{background: "linear-gradient(to right, #2563eb 0%, #1e40af 100%)", padding: '0.75rem 0'}}>
          <div
            className="relative w-full max-w-[1200px] mx-auto"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0px, black 48px, black calc(100% - 48px), transparent 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0px, black 48px, black calc(100% - 48px), transparent 100%)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
            }}
          >
            <div
              ref={marqueeRef}
              className="flex items-center gap-4 md:gap-8 marquee-motion group w-[200%] min-w-max"
              tabIndex={0}
              role="list"
              aria-label="Scrolling technology logos"
              onMouseEnter={() => { marqueeRef.current && (marqueeRef.current.style.animationPlayState = 'paused'); }}
              onMouseLeave={() => { marqueeRef.current && (marqueeRef.current.style.animationPlayState = 'running'); }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 focus:outline focus:outline-2 focus:outline-primary"
                  role="listitem"
                  tabIndex={-1}
                  aria-hidden={index >= logoData.length}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .marquee-motion {
          animation: marquee 30s linear infinite;
        }
        .group:hover .marquee-motion {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
