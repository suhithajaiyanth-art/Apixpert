import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

interface PriceDetail {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  startDate: string;
  price: string;
  image: string;
  colorScheme: 'primary' | 'secondary' | 'accent' | 'orange';
  priceDetails?: PriceDetail[];
}
const CourseCard = ({ 
  title, 
  description, 
  category, 
  startDate, 
  price,
  image,
  colorScheme,
  priceDetails = []
}: CourseCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20
  });

  const colorClasses = {
    primary: 'from-primary to-primary/90',
    secondary: 'from-secondary to-secondary/90',
    accent: 'from-accent to-accent/90',
    orange: 'from-orange-500 to-orange-600'
  };

  const bgGradient = colorClasses[colorScheme];
  const dynamicHeight = priceDetails.length >= 3 ? 560 : priceDetails.length === 2 ? 520 : 480;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsFlipped(false);
  };

  return (
    <div
      ref={cardRef}
      className="perspective-1000"
      style={{ height: dynamicHeight }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsFlipped(true)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card className="relative overflow-hidden rounded-2xl border-none shadow-2xl h-full group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full">
                {category}
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                {title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/80">Delivery: {startDate}</p>
                <p className="text-2xl font-bold">{price}</p>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/70">GST INCLUDED</p>
            </div>
          </Card>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Card className={`relative overflow-hidden rounded-2xl border-none shadow-2xl h-full bg-gradient-to-br ${bgGradient}`}>
            <div className="absolute inset-0 backdrop-blur-3xl bg-white/10" />
            
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-white/30 backdrop-blur-sm rounded-full">
                  {category}
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-4">
                  {title}
                </h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Delivery mode</span>
                  <span className="font-semibold">{startDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{price}</span>
                </div>
                {priceDetails.length > 0 && (
                  <div className="space-y-2 pt-2">
                    {priceDetails.map((detail, index) => (
                      <div
                        key={`${detail.label}-${index}`}
                        className={`flex items-center justify-between rounded-xl border border-white/15 px-3 py-2 text-sm ${detail.highlight ? "bg-white/25 text-white" : "bg-black/20 text-white/85"}`}
                      >
                        <span>{detail.label}</span>
                        <span className="font-semibold text-white">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="secondary" 
                    className="flex-1 bg-white text-gray-900 hover:bg-white/90 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    LEARN MORE
                  </Button>
                  <Button 
                    variant="secondary"
                    className="flex-1 bg-white/20 text-white border-2 border-white hover:bg-white hover:text-gray-900 font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    BUY NOW
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CourseCard;
