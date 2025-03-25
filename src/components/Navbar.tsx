
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Offerings", path: "/offerings" },
    { title: "Preparation", path: "/preparation" },
    { title: "Events", path: "/events" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-padding mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-eagle-blue-900">
            Eagle Heart
          </span>
          <span className="text-xl ml-2 font-serif text-eagle-gold-600">
            Retreats
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium relative transition-colors",
                location.pathname === link.path
                  ? "text-eagle-blue-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-eagle-gold-500"
                  : "text-eagle-blue-700 hover:text-eagle-blue-900"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-eagle-blue-900" />
          ) : (
            <Menu className="h-6 w-6 text-eagle-blue-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white flex flex-col pt-24 pb-8 px-6 transform transition-transform duration-300 ease-in-out md:hidden z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-2 text-xl font-medium border-b border-eagle-blue-100 transition-colors",
                location.pathname === link.path
                  ? "text-eagle-blue-900 border-eagle-gold-500"
                  : "text-eagle-blue-700 hover:text-eagle-blue-900"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
