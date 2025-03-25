
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eagle-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-2xl font-serif font-bold">Eagle Heart</h3>
              <p className="text-eagle-gold-500 font-serif">Retreats</p>
            </div>
            <p className="text-sm text-eagle-blue-100 max-w-xs">
              Creating sacred ceremonial spaces where transformation, healing, and 
              self-discovery naturally emerge.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 font-serif">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  About Garrett
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  Ceremonial Offerings
                </Link>
              </li>
              <li>
                <Link to="/preparation" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  Preparation & Integration
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  Upcoming Ceremonies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 font-serif">Related Ventures</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  Heal Counseling
                </a>
              </li>
              <li>
                <a href="#" className="text-eagle-blue-200 hover:text-white transition-colors text-sm">
                  Blue Lotus Energetics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 font-serif">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eagle-blue-200 mr-2">Email:</span>
                <a href="mailto:info@eagleheartretreats.com" className="text-white hover:text-eagle-gold-400 transition-colors text-sm">
                  info@eagleheartretreats.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-eagle-blue-200 mr-2">Location:</span>
                <span className="text-white text-sm">Boulder, Colorado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-eagle-blue-800 text-center">
          <p className="text-xs text-eagle-blue-300">
            &copy; {currentYear} Eagle Heart Retreats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
