
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  imageSrc: string;
  description: string;
  price: string;
  availableSpots: number;
  duration: string;
}

const Events = () => {
  // Mock data for upcoming events
  const [events] = useState<Event[]>([
    {
      id: "summer-solstice-2023",
      title: "Summer Solstice Ceremony",
      type: "Seasonal Celebration",
      date: "June 21, 2023",
      duration: "6:00 PM - 9:00 PM",
      location: "Boulder, Colorado",
      imageSrc: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwc29sc3RpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      description: "Join us for a powerful Summer Solstice ceremony to celebrate the longest day of the year and connect with the energies of light, growth, and abundance. This ceremony includes fire ritual, community sharing, and intention setting for the coming season.",
      price: "$175",
      availableSpots: 8,
    },
    {
      id: "full-moon-july-2023",
      title: "Full Moon Journey Ceremony",
      type: "Journey Ceremony",
      date: "July 3, 2023",
      duration: "7:00 PM - 10:00 PM",
      location: "Denver, Colorado",
      imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      description: "A deep journey ceremony held during the powerful energies of the full moon. This ceremony focuses on release, renewal, and connecting with your inner guidance. Includes drumming, guided meditation, and sacred song.",
      price: "$225",
      availableSpots: 6,
    },
    {
      id: "healing-circle-july-2023",
      title: "Community Healing Circle",
      type: "Community Healing",
      date: "July 15, 2023",
      duration: "2:00 PM - 5:00 PM",
      location: "Boulder, Colorado",
      imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      description: "A supportive community gathering for collective healing and connection. This accessible ceremony is ideal for those new to ceremonial work as well as experienced practitioners seeking the power of community healing.",
      price: "$95",
      availableSpots: 12,
    },
    {
      id: "transformation-august-2023",
      title: "Personal Transformation Ritual",
      type: "Transformation Ritual",
      date: "August 12, 2023",
      duration: "9:00 AM - 4:00 PM",
      location: "Rocky Mountain National Park",
      imageSrc: "https://images.unsplash.com/photo-1532635249-8ec3694f83f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
      description: "A day-long intensive designed for those navigating significant life transitions. This ceremony provides powerful support for those ending relationships, changing careers, or stepping into new phases of life.",
      price: "$350",
      availableSpots: 5,
    },
    {
      id: "equinox-september-2023",
      title: "Fall Equinox Ceremony",
      type: "Seasonal Celebration",
      date: "September 23, 2023",
      duration: "5:00 PM - 8:00 PM",
      location: "Boulder, Colorado",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      description: "Honor the transition into fall with this balancing ceremony that embraces the equal day and night of the equinox. Focus on harmony, gratitude for the harvest, and preparing for the inward journey of winter.",
      price: "$175",
      availableSpots: 10,
    }
  ]);
  
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  
  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-eagle-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
              Calendar
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-eagle-blue-900 mb-6">
              Upcoming Ceremonies
            </h1>
            <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
              Browse and register for upcoming ceremonial events. Each ceremony is thoughtfully 
              designed to create a powerful container for healing, transformation, and connection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="mb-12">
        <div className="container mx-auto container-padding">
          <div className="bg-white rounded-xl shadow-soft p-6 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "all"
                  ? "bg-eagle-blue-900 text-white"
                  : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
              }`}
            >
              All Ceremonies
            </button>
            <button
              onClick={() => setFilter("seasonal")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "seasonal"
                  ? "bg-eagle-blue-900 text-white"
                  : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
              }`}
            >
              Seasonal Celebrations
            </button>
            <button
              onClick={() => setFilter("journey")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "journey"
                  ? "bg-eagle-blue-900 text-white"
                  : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
              }`}
            >
              Journey Ceremonies
            </button>
            <button
              onClick={() => setFilter("community")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "community"
                  ? "bg-eagle-blue-900 text-white"
                  : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
              }`}
            >
              Community Healing
            </button>
            <button
              onClick={() => setFilter("transformation")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "transformation"
                  ? "bg-eagle-blue-900 text-white"
                  : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
              }`}
            >
              Transformation Rituals
            </button>
          </div>
        </div>
      </section>
      
      {/* Events Listing */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto container-padding">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-4">
                No ceremonies found
              </h3>
              <p className="text-eagle-blue-700 mb-8">
                There are no upcoming ceremonies matching your filter criteria.
              </p>
              <Button onClick={() => setFilter("all")}>
                View All Ceremonies
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-soft hover-lift">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.imageSrc}
                        alt={event.title}
                        className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-eagle-blue-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.availableSpots > 0
                          ? `${event.availableSpots} spots left`
                          : "Fully booked"}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-eagle-blue-900/90 to-transparent py-3 px-4">
                        <span className="text-white/90 text-sm font-medium">
                          {event.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div>
                          <div className="flex items-center text-sm text-eagle-blue-600 mb-2">
                            <span className="mr-3">{event.date}</span>
                            <span className="w-1 h-1 rounded-full bg-eagle-blue-400 mr-3"></span>
                            <span>{event.location}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold text-eagle-blue-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-eagle-charcoal-600 text-sm line-clamp-3 mb-4">
                            {event.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between border-t border-eagle-blue-100 pt-4">
                          <div className="text-eagle-blue-900 font-medium">
                            <span className="text-eagle-earth-600">{event.price}</span>
                          </div>
                          <Button
                            onClick={() => handleRegister(event)}
                            className="group"
                            disabled={event.availableSpots === 0}
                          >
                            Register
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Registration Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-eagle-blue-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in">
            <div className="relative h-56 overflow-hidden">
              <img
                src={selectedEvent.imageSrc}
                alt={selectedEvent.title}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-eagle-blue-900/90 backdrop-blur-sm text-white p-2 rounded-full hover:bg-eagle-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-eagle-blue-900/90 to-transparent py-3 px-6">
                <span className="text-white/90 text-sm font-medium">
                  {selectedEvent.type}
                </span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-2">
                {selectedEvent.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-eagle-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eagle-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-eagle-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eagle-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{selectedEvent.duration}</span>
                </div>
                <div className="flex items-center text-eagle-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eagle-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center text-eagle-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-eagle-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span>{selectedEvent.price}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-eagle-blue-900 mb-2">
                  About This Ceremony
                </h4>
                <p className="text-eagle-blue-700 mb-4">
                  {selectedEvent.description}
                </p>
                <div className="bg-eagle-blue-50/50 rounded-lg p-4 mb-4">
                  <h5 className="font-medium text-eagle-blue-900 mb-2">What to Bring</h5>
                  <ul className="space-y-1 text-eagle-blue-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Comfortable clothing appropriate for the season</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Journal and pen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Water bottle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Any personal sacred objects you'd like to have with you</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-eagle-blue-600">
                  <strong>Note:</strong> Registration requires a preliminary conversation to ensure the ceremony is a good fit. 
                  After registering, you'll receive details on how to schedule this conversation.
                </p>
              </div>
              
              <div className="border-t border-eagle-blue-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-eagle-blue-900 font-medium">
                    {selectedEvent.availableSpots} {selectedEvent.availableSpots === 1 ? 'spot' : 'spots'} remaining
                  </span>
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                  <Button
                    disabled={selectedEvent.availableSpots === 0}
                  >
                    Complete Registration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom Ceremony Section */}
      <section className="py-20 md:py-24 bg-eagle-blue-50/50">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-fade-in">
              <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
                Custom Ceremonies
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
                Looking for Something Specific?
              </h2>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-6">
                In addition to scheduled ceremonies, I also create custom ceremonial experiences for 
                individuals and groups with particular intentions or needs.
              </p>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
                Custom ceremonies can be designed for:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Life transitions (career changes, moving, relationship shifts)
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Specific healing intentions
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Family or community healing
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Organizational or team building purposes
                </li>
              </ul>
              <Button className="group">
                Inquire About Custom Ceremonies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                  alt="Custom ceremony setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Preparation Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block animate-fade-in text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
              Before You Register
            </span>
            <h2 className="animate-fade-in text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-6">
              Prepare for Your Ceremonial Experience
            </h2>
            <p className="animate-fade-in text-eagle-blue-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Learn about proper preparation practices, what to expect during ceremony, and how to 
              integrate your experience afterward.
            </p>
            <Link to="/preparation">
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                View Preparation Guidelines
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
