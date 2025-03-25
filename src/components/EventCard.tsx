
import Button from "./Button";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageSrc: string;
  description: string;
  price: string;
  availableSpots: number;
  onRegister: () => void;
}

const EventCard = ({
  title,
  date,
  location,
  imageSrc,
  description,
  price,
  availableSpots,
  onRegister,
}: EventCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-soft hover-lift">
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-eagle-blue-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {availableSpots > 0
            ? `${availableSpots} spots left`
            : "Fully booked"}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="flex items-center text-sm text-eagle-blue-600 mb-2">
              <span className="mr-3">{date}</span>
              <span className="w-1 h-1 rounded-full bg-eagle-blue-400 mr-3"></span>
              <span>{location}</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-eagle-blue-900 mb-2">
              {title}
            </h3>
            <p className="text-eagle-charcoal-600 text-sm line-clamp-3 mb-4">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-between border-t border-eagle-blue-100 pt-4">
            <div className="text-eagle-blue-900 font-medium">
              <span className="text-eagle-earth-600">{price}</span>
            </div>
            <Button
              onClick={onRegister}
              className="group"
              disabled={availableSpots === 0}
            >
              Register
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
