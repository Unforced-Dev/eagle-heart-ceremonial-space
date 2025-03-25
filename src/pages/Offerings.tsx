
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Offerings = () => {
  // Ceremonial offerings data
  const offerings = [
    {
      id: "community",
      title: "Community Healing Ceremonies",
      description: "These group ceremonies focus on collective healing and connection. Incorporating song, movement, and shared intention, these ceremonies help participants experience the power of community while addressing personal healing needs.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      benefits: [
        "Experience healing in a supportive community context",
        "Connect with like-minded individuals on similar paths",
        "Learn practices you can incorporate into daily life",
        "Access the amplified energy of group intention"
      ]
    },
    {
      id: "journey",
      title: "Journey Ceremonies",
      description: "Drawing from Amazonian and other indigenous traditions, these ceremonies facilitate deep inner journeying for insight, healing, and transformation. These ceremonies are conducted with the utmost respect for traditional protocols while being accessible to modern participants.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      benefits: [
        "Access deep layers of consciousness and understanding",
        "Release limiting patterns and beliefs",
        "Connect with inner wisdom and guidance",
        "Experience profound healing on multiple levels"
      ]
    },
    {
      id: "transformation",
      title: "Personal Transformation Rituals",
      description: "Designed for significant life transitions, these ceremonies mark important passages and help anchor new beginnings. These can be customized for individuals or small groups sharing similar intentions.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      benefits: [
        "Mark important life transitions with intention",
        "Create closure with the past and welcome new beginnings",
        "Anchor your intentions with powerful ceremonial support",
        "Receive guidance for your unique path forward"
      ]
    },
    {
      id: "seasonal",
      title: "Seasonal Celebrations",
      description: "Honoring the natural cycles of the year, these ceremonies connect participants with the rhythms of nature and the wisdom available in each season.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      benefits: [
        "Attune to natural cycles and earth wisdom",
        "Celebrate seasonal transitions with intention",
        "Connect with ancient traditions honoring nature's rhythms",
        "Build community through shared celebration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-eagle-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
              Ceremonial Offerings
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-eagle-blue-900 mb-6">
              Sacred Experiences for Transformation
            </h1>
            <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
              At Eagle Heart Retreats, I offer several types of ceremonial experiences, each designed 
              to facilitate specific aspects of healing, connection, and transformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sacred Container Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-fade-in">
              <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
                The Sacred Container
              </h2>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-6">
                All ceremonies begin with the creation of a sacred container—a safe, intentional space 
                that supports deep work while maintaining appropriate boundaries. Safety—physical, emotional, 
                and spiritual—remains my highest priority in all ceremonial settings.
              </p>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
                Each ceremony incorporates elements from various traditions, including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Song and sacred sound
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Periods of intentional silence
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Mantra and prayer
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Opportunities for personal expression
                </li>
                <li className="flex items-center text-eagle-blue-700">
                  <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3"></span>
                  Connection with natural elements
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                  alt="Sacred ceremonial space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eagle-blue-900/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white text-xl font-serif">
                      "The container is as important as the ceremony itself."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ceremonial Offerings */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Our Services"
            title="Ceremonial Offerings"
            description="Each ceremony is thoughtfully designed to support specific aspects of healing and transformation."
          />
          
          <div className="space-y-24 mt-16">
            {offerings.map((offering, index) => (
              <div 
                key={offering.id}
                id={offering.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2 animate-fade-in">
                  <div className="relative overflow-hidden rounded-2xl shadow-soft">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 animate-fade-in">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-eagle-blue-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-eagle-blue-700 text-lg leading-relaxed mb-6">
                    {offering.description}
                  </p>
                  <h4 className="text-lg font-medium text-eagle-blue-900 mb-4">
                    Benefits:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {offering.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-eagle-blue-700">
                        <span className="h-2 w-2 rounded-full bg-eagle-gold-500 mr-3 mt-2"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/events">
                    <Button className="group">
                      View Upcoming {offering.title.split(' ')[0]} Ceremonies
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Ceremonies */}
      <section className="py-20 md:py-24 bg-eagle-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block animate-fade-in text-eagle-gold-400 font-medium uppercase tracking-wider text-sm mb-3">
              Personalized Experiences
            </span>
            <h2 className="animate-fade-in text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Custom Ceremonial Experiences
            </h2>
            <p className="animate-fade-in text-eagle-blue-100 text-lg leading-relaxed mb-8">
              Looking for something specific? I also create custom ceremonies for individuals 
              and groups with particular intentions or needs. These can be designed for life 
              transitions, healing goals, or community-building purposes.
            </p>
            <Link to="/events">
              <Button
                className="group bg-eagle-gold-500 text-eagle-blue-900 hover:bg-eagle-gold-400"
                size="lg"
              >
                Contact for Custom Ceremonies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-eagle-blue-50/50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
            <span className="inline-block animate-fade-in text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
              Next Steps
            </span>
            <h2 className="animate-fade-in text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
              Ready to Experience Ceremony?
            </h2>
            <p className="animate-fade-in text-eagle-blue-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Browse upcoming ceremonies and reserve your spot, or learn more about how to prepare for your ceremonial experience.
            </p>
            <div className="animate-fade-in flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/events">
                <Button size="lg" className="w-full sm:w-auto group">
                  View Upcoming Ceremonies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/preparation">
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  Learn About Preparation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Offerings;
