import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

type Direction = "top" | "right" | "bottom" | "left";

const offsetMap: Record<Direction, { x: number; y: number }> = {
  top: { x: 0, y: -120 },
  right: { x: 120, y: 0 },
  bottom: { x: 0, y: 120 },
  left: { x: -120, y: 0 }
};

const previewVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
  },
  hidden: (direction: Direction) => ({
    opacity: 0,
    x: offsetMap[direction].x * 0.25,
    y: offsetMap[direction].y * 0.25,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  })
};

const overlayVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
  hidden: (direction: Direction) => ({
    opacity: 0,
    x: offsetMap[direction].x,
    y: offsetMap[direction].y,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] }
  })
};

const contentVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }
  },
  hidden: (direction: Direction) => ({
    opacity: 0,
    x: offsetMap[direction].x * 0.35,
    y: offsetMap[direction].y * 0.35,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
  })
};

function computeDirection(
  event: ReactMouseEvent<HTMLDivElement>,
  element: HTMLDivElement | null
): Direction {
  if (!element) {
    return "top";
  }

  const rect = element.getBoundingClientRect();
  const position = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };

  const distances: Array<{ direction: Direction; value: number }> = [
    { direction: "left", value: position.x },
    { direction: "right", value: rect.width - position.x },
    { direction: "top", value: position.y },
    { direction: "bottom", value: rect.height - position.y }
  ];

  return distances.reduce((closest, current) =>
    current.value < closest.value ? current : closest
  ).direction;
}

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
  colorScheme: "primary" | "secondary" | "accent" | "orange";
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverDirection, setHoverDirection] = useState<Direction>("top");

  const handleMouseEnter = (event: ReactMouseEvent<HTMLDivElement>) => {
    setHoverDirection(computeDirection(event, cardRef.current));
    setIsHovered(true);
  };

  const handleMouseLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    setHoverDirection(computeDirection(event, cardRef.current));
    setIsHovered(false);
  };

  const colorClasses = {
    primary: "from-primary to-primary/90",
    secondary: "from-secondary to-secondary/90",
    accent: "from-accent to-accent/90",
    orange: "from-orange-500 to-orange-600"
  } as const;

  const bgGradient = colorClasses[colorScheme];

  return (
    <Card
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_30px_80px_rgba(8,12,30,0.4)]"
    >
      <img
        src={image}
        alt={title}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms]",
          isHovered ? "scale-110" : "scale-100"
        )}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <motion.div
        className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-white"
        variants={previewVariants}
        custom={hoverDirection}
        animate={isHovered ? "hidden" : "visible"}
        initial="visible"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
          {category}
        </div>
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>Delivery: {startDate}</span>
          <span className="text-xl font-bold text-white">{price}</span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">GST included</p>
      </motion.div>

      <motion.div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br",
          bgGradient
        )}
        variants={overlayVariants}
        custom={hoverDirection}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20"
        variants={overlayVariants}
        custom={hoverDirection}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      />

      <motion.div
        className="absolute inset-0 flex h-full flex-col justify-between p-6 text-white"
        variants={contentVariants}
        custom={hoverDirection}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            {category}
          </div>
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>

        <div className="space-y-4">
          {priceDetails.length > 0 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {priceDetails.map((detail, index) => (
                <div
                  key={`${detail.label}-${index}`}
                  className={cn(
                    "flex items-center justify-between rounded-xl border border-white/20 px-3 py-2 text-sm",
                    detail.highlight
                      ? "bg-white/25 text-white"
                      : "bg-black/30 text-white/85"
                  )}
                >
                  <span>{detail.label}</span>
                  <span className="font-semibold text-white">{detail.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Delivery: {startDate}</span>
            <span className="text-xl font-bold text-white">{price}</span>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-full bg-white text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              asChild
            >
              <Link to="/courses">Learn More</Link>
            </Button>
            <Button
              variant="secondary"
              className="flex-1 rounded-full border border-white/70 bg-transparent text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link to="/contact">Buy Now</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default CourseCard;
