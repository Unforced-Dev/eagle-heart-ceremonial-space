
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Training data
  const trainingItems = [
    {
      title: "Bolivian Shamanic Practices",
      description: "Extensive work with a Bolivian shaman, learning traditional South American practices and healing techniques."
    },
    {
      title: "Shipibo Amazonian Lineage",
      description: "Current lineage in Shipibo Amazonian shamanism, working with plant medicines and traditional healing ceremonies."
    },
    {
      title: "Lakota Traditions",
      description: "Training in the Lakota way with respected elders, learning about sweat lodge ceremonies and vision quests."
    },
    {
      title: "Tibetan Buddhist Practices",
      description: "Integration of wisdom from Tibetan Buddhist traditions, incorporating meditation and mindfulness practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-eagle-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-fade-in">
              <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
                About Garrett
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-eagle-blue-900 mb-6">
                Facilitator & Guardian of Sacred Space
              </h1>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
                My journey with ceremonial work began 15 years ago as part of my own healing journey. 
                What started as personal exploration has evolved into a deep commitment to preserving 
                and sharing these sacred technologies in a respectful, ethical manner.
              </p>
              <Link to="/offerings">
                <Button className="group">
                  Explore Ceremonies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1532635249-8ec3694f83f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                  alt="Garrett facilitating a ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training & Lineage Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Training & Lineage"
            title="My Ceremonial Training"
            description="I honor the various traditions that have shaped my approach while maintaining the highest respect for their origins and cultural contexts."
            alignment="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {trainingItems.map((item, index) => (
              <div 
                key={index} 
                className="animate-slide-in bg-eagle-blue-50/50 rounded-xl p-6 hover:shadow-soft transition-all hover:bg-eagle-blue-50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-serif font-bold text-eagle-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-eagle-blue-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-20 md:py-24 bg-eagle-blue-50/50">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                  alt="Sacred ceremonial setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <span className="inline-block text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
                Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
                My Approach to Ceremonial Practice
              </h2>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-6">
                These diverse influences have shaped my unique approach to ceremony—one that honors 
                traditional practices while creating accessible experiences for contemporary seekers. 
                I view myself not as an owner of these traditions, but as a humble student and caretaker, 
                committed to sharing these practices with proper respect and acknowledgment of their origins.
              </p>
              <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
                My background in clinical counseling also informs my ceremonial work, particularly in 
                creating safe containers and supporting integration of ceremonial experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ethical Framework Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Ethics & Values"
            title="My Ethical Framework"
            description="Safety, respect, and cultural integrity form the foundation of all ceremonial work I facilitate."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-slide-in bg-eagle-blue-50/30 rounded-xl p-8 shadow-soft text-center hover:bg-eagle-blue-50 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-eagle-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eagle-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-eagle-blue-900 mb-3">
                Safety First
              </h3>
              <p className="text-eagle-blue-700">
                Physical, emotional, and spiritual safety are my highest priorities in all ceremonial settings.
              </p>
            </div>
            
            <div className="animate-slide-in bg-eagle-blue-50/30 rounded-xl p-8 shadow-soft text-center hover:bg-eagle-blue-50 transition-all" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-eagle-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eagle-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-eagle-blue-900 mb-3">
                Cultural Respect
              </h3>
              <p className="text-eagle-blue-700">
                I honor the origins of ceremonial practices and acknowledge the wisdom keepers who have preserved these traditions.
              </p>
            </div>
            
            <div className="animate-slide-in bg-eagle-blue-50/30 rounded-xl p-8 shadow-soft text-center hover:bg-eagle-blue-50 transition-all" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-eagle-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eagle-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-eagle-blue-900 mb-3">
                Integrity
              </h3>
              <p className="text-eagle-blue-700">
                I maintain clear boundaries and operate with transparency in all aspects of ceremonial facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
              Connect With Me
            </span>
            <h2 className="animate-fade-in text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Begin Your Ceremonial Journey
            </h2>
            <p className="animate-fade-in text-eagle-blue-100 text-lg leading-relaxed mb-8">
              I'm honored to walk alongside you on your path of healing and transformation. 
              Whether you're new to ceremonial work or continuing a well-established practice, 
              I invite you to explore the offerings at Eagle Heart Retreats.
            </p>
            <div className="animate-fade-in flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/offerings">
                <Button
                  className="w-full sm:w-auto bg-eagle-gold-500 text-eagle-blue-900 hover:bg-eagle-gold-400 group"
                  size="lg"
                >
                  Explore Ceremonies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/events">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 group"
                  size="lg"
                >
                  View Upcoming Events
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

export default About;
