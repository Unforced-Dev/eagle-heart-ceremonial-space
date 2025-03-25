
import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import CeremonyCard from "@/components/CeremonyCard";
import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Mock data for upcoming event
  const [upcomingEvent] = useState({
    title: "Summer Solstice Ceremony",
    date: "June 21, 2023",
    location: "Boulder, Colorado",
    imageSrc: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwc29sc3RpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description: "Join us for a powerful Summer Solstice ceremony to celebrate the longest day of the year and connect with the energies of light, growth, and abundance.",
    price: "$175",
    availableSpots: 8,
  });

  const handleRegister = () => {
    window.location.href = "/events";
  };

  // Testimonials data
  const testimonials = [
    {
      quote: "The ceremonial space Garrett created was both powerful and nurturing. I felt safe to explore deep parts of myself and emerged with profound insights.",
      author: "Sarah M.",
      location: "Denver, CO"
    },
    {
      quote: "This was my first ceremony experience, and I couldn't have asked for a better guide. Garrett's knowledge and compassion created a container where transformation felt natural.",
      author: "Michael T.",
      location: "Boulder, CO"
    },
    {
      quote: "The integration support after the ceremony was just as valuable as the experience itself. Garrett truly cares about the lasting impact of this work.",
      author: "Elena R.",
      location: "Fort Collins, CO"
    }
  ];

  // Ceremonial offerings data
  const ceremonies = [
    {
      title: "Community Healing Ceremonies",
      description: "Group ceremonies focusing on collective healing and connection, incorporating song, movement, and shared intention to help participants experience the power of community.",
      imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      link: "/offerings"
    },
    {
      title: "Journey Ceremonies",
      description: "Drawing from Amazonian and other indigenous traditions, these ceremonies facilitate deep inner journeying for insight, healing, and transformation.",
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      link: "/offerings"
    },
    {
      title: "Seasonal Celebrations",
      description: "Honoring the natural cycles of the year, these ceremonies connect participants with the rhythms of nature and the wisdom available in each season.",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      link: "/offerings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-eagle-blue-50 to-white">
      <Navbar />
      
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        title="Sacred Space for Transformation & Healing"
        subtitle="Experience authentic ceremonial practices guided by traditional wisdom and modern insight, creating a safe container for deep personal growth."
        buttonText="Explore Ceremonies"
        buttonLink="/offerings"
      />
      
      {/* Introduction Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-fade-in">
              <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
                Welcome to Eagle Heart Retreats
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
                Where Tradition Meets Modern Healing
              </h2>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-6">
                I'm Garrett Graham, facilitating sacred ceremonial spaces where transformation, 
                healing, and self-discovery naturally emerge. Drawing from multiple wisdom traditions, 
                I create powerful yet safe containers for deep personal and transpersonal work.
              </p>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
                Through ceremony, we access dimensions of ourselves often hidden in everyday life, 
                opening doorways to profound insight and authentic living.
              </p>
              <Link to="/about">
                <Button className="group">
                  Learn About Garrett
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative overflow-hidden rounded-xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                  alt="Sacred ceremony space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-eagle-blue-900/20 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-eagle-blue-900/80 to-transparent">
                  <p className="text-white font-serif italic">
                    "The journey of healing is a sacred path that connects us to our deepest selves."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ceremonial Offerings Section */}
      <section className="py-20 md:py-24 bg-eagle-blue-50/50">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Ceremonial Offerings"
            title="Sacred Experiences for Transformation"
            description="Each ceremony is thoughtfully designed to create a powerful container for healing, growth, and connection to something greater than ourselves."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ceremonies.map((ceremony, index) => (
              <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CeremonyCard
                  title={ceremony.title}
                  description={ceremony.description}
                  imageSrc={ceremony.imageSrc}
                  link={ceremony.link}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/offerings">
              <Button variant="outline" className="group">
                View All Offerings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Event Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Featured Ceremony"
            title="Join Our Upcoming Event"
            description="Experience the transformative power of ceremony in community."
          />
          
          <div className="max-w-4xl mx-auto animate-fade-in">
            <EventCard
              title={upcomingEvent.title}
              date={upcomingEvent.date}
              location={upcomingEvent.location}
              imageSrc={upcomingEvent.imageSrc}
              description={upcomingEvent.description}
              price={upcomingEvent.price}
              availableSpots={upcomingEvent.availableSpots}
              onRegister={handleRegister}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events">
              <Button variant="outline" className="group">
                View All Upcoming Ceremonies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-24 relative bg-eagle-blue-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>
        
        <div className="container mx-auto container-padding relative z-10">
          <SectionHeading
            subtitle="Testimonials"
            title="Voices of Transformation"
            description="Hear from those who have experienced the power of our ceremonial spaces."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-eagle-blue-50 to-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
            <span className="inline-block animate-fade-in text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
              Begin Your Journey
            </span>
            <h2 className="animate-fade-in text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
              Ready to Experience Transformation?
            </h2>
            <p className="animate-fade-in text-eagle-blue-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you're new to ceremonial work or continuing your journey, Eagle Heart Retreats offers a safe and supportive space for your growth and healing.
            </p>
            <div className="animate-fade-in flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/events">
                <Button size="lg" className="w-full sm:w-auto group">
                  Register for a Ceremony
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

export default Index;
