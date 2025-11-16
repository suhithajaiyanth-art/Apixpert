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
        backgroundImage: `linear-gradient(to right, #2563eb 0%, #1e40af 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex justify-center overflow-hidden py-3">
        <div
          className="relative w-full max-w-5xl mx-auto"
        >
          <div
            ref={marqueeRef}
            className="flex items-center gap-8 marquee-motion group w-[200%] min-w-max"
            tabIndex={0}
            role="list"
            aria-label="Scrolling technology logos"
            onMouseEnter={() => { marqueeRef.current && (marqueeRef.current.style.animationPlayState = 'paused'); }}
            onMouseLeave={() => { marqueeRef.current && (marqueeRef.current.style.animationPlayState = 'running'); }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 lg:h-24 px-6"
                role="listitem"
                tabIndex={-1}
                aria-hidden={index >= logoData.length}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full object-contain"
                  style={{height: '100%'}}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .marquee-motion {
          animation: marquee 28s linear infinite;
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
