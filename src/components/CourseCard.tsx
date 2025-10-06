import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  startDate: string;
  price: string;
  image: string;
  colorScheme: 'primary' | 'secondary' | 'accent' | 'orange';
}

const CourseCard = ({ 
  title, 
  description, 
  category, 
  startDate, 
  price,
  image,
  colorScheme 
}: CourseCardProps) => {
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    orange: 'bg-orange-500'
  };

  const bgClass = colorClasses[colorScheme];

  return (
    <Card className="group relative overflow-hidden rounded-lg border-none shadow-lg h-[400px] cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Colored Overlay with Title */}
      <div className={`absolute inset-x-0 bottom-0 ${bgClass} p-6 transition-all duration-500 ease-in-out group-hover:inset-0 group-hover:bg-opacity-95`}>
        <div className="relative h-full flex flex-col justify-between">
          {/* Title - Always visible */}
          <h3 className="text-2xl font-bold text-white leading-tight transition-all duration-500 ease-out group-hover:scale-105">
            {title}
          </h3>
          
          {/* Details - Visible on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out space-y-4 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-white/90 text-sm">
              {description}
            </p>
            
            <div className="space-y-2">
              <p className="text-white font-semibold text-lg">{category}</p>
              <p className="text-white/80 text-sm">Start date: {startDate}</p>
              <p className="text-white text-3xl font-bold">{price}</p>
            </div>
            
            <div className="flex gap-3 pt-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out">
              <Button 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-white/90 font-semibold transition-all duration-300 hover:scale-105"
              >
                LEARN MORE
              </Button>
              <Button 
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-white/90 font-semibold transition-all duration-300 hover:scale-105"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
