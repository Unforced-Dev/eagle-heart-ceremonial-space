
import Button from "./Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: HeroProps) => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(16, 42, 67, 0.7), rgba(16, 42, 67, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-eagle-blue-900/40 to-eagle-blue-900/60" />
      
      <div className="container mx-auto px-6 py-12 relative z-10 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fade-in text-eagle-gold-400 text-sm uppercase tracking-wider font-medium mb-4 py-1 px-3 rounded-full bg-eagle-blue-900/30 backdrop-blur-sm">
            Sacred Ceremonial Spaces
          </span>
          
          <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-shadow">
            {title}
          </h1>
          
          <p className="animate-slide-up animation-delay-300 text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow-sm">
            {subtitle}
          </p>
          
          <div className="animate-slide-up animation-delay-500 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to={buttonLink}>
              <Button size="lg" className="w-full sm:w-auto group">
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-eagle-blue-900/30 backdrop-blur-sm text-white border-white/30 hover:bg-eagle-blue-800/50 hover:text-white hover:border-white/50">
                Learn About Garrett
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce flex items-center justify-center rounded-full p-1.5 bg-white/10 backdrop-blur-md border border-white/30">
          <span className="sr-only">Scroll down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
