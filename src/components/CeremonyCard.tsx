
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CeremonyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const CeremonyCard = ({ title, description, imageSrc, link }: CeremonyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl hover-lift bg-white shadow-soft">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eagle-blue-900/90 opacity-70 transition-opacity group-hover:opacity-90 z-10" />
      
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-80 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-eagle-gold-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-white/90 text-sm mb-4 line-clamp-3 max-w-sm">
          {description}
        </p>
        
        <Link to={link}>
          <Button
            variant="ghost"
            className="w-fit text-white group-hover:text-eagle-gold-400 transition-colors px-0"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CeremonyCard;
