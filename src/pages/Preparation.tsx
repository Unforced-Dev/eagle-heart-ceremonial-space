
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Preparation = () => {
  const [activeTab, setActiveTab] = useState("preparation");
  
  // FAQ data
  const faqs = [
    {
      question: "Is ceremonial work right for me?",
      answer: "Ceremonial work can be beneficial for many individuals, but it's not for everyone at every time. Those with certain mental health conditions, those in crisis, or those taking specific medications may need to wait or explore other options. This is why a preliminary conversation is required before participating in any ceremony."
    },
    {
      question: "What should I bring to a ceremony?",
      answer: "For most ceremonies, you'll want to bring comfortable clothing, a journal, any sacred objects you'd like to have with you, and an open heart. Specific ceremonies may have additional suggested items, which will be shared in your preparation materials."
    },
    {
      question: "What if I've never participated in ceremony before?",
      answer: "Many participants are new to ceremonial work, and the experiences are designed to be accessible to beginners. Additional support is provided for first-time participants, and there's never any pressure to participate in any aspect of ceremony that doesn't feel right for you."
    },
    {
      question: "Will I be safe during the ceremony?",
      answer: "Safety is my highest priority. Physical, emotional, and spiritual safety measures are carefully implemented in all ceremonial spaces. You will never be pressured to do anything that doesn't feel right for you, and experienced support staff are present for all group ceremonies."
    },
    {
      question: "What can I expect after a ceremony?",
      answer: "After a ceremony, many participants experience a sense of openness, clarity, or transformation. Some may also feel emotional, tired, or need time for processing. This is why integration support is so important. You'll receive guidance on how to care for yourself following ceremony and how to integrate insights into your daily life."
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
              Preparation & Integration
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-eagle-blue-900 mb-6">
              Before & After Ceremony
            </h1>
            <p className="text-eagle-blue-700 text-lg leading-relaxed mb-8">
              The ceremonial experience extends far beyond the event itself. Thoughtful preparation 
              and intentional integration are essential components of the transformative process.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tabs */}
      <section className="mb-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={() => setActiveTab("preparation")}
                className={`py-4 px-6 text-lg font-medium transition-colors ${
                  activeTab === "preparation"
                    ? "bg-eagle-blue-900 text-white"
                    : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
                }`}
              >
                Preparation
              </button>
              <button
                onClick={() => setActiveTab("integration")}
                className={`py-4 px-6 text-lg font-medium transition-colors ${
                  activeTab === "integration"
                    ? "bg-eagle-blue-900 text-white"
                    : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
                }`}
              >
                Integration
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`py-4 px-6 text-lg font-medium transition-colors ${
                  activeTab === "faq"
                    ? "bg-eagle-blue-900 text-white"
                    : "bg-eagle-blue-100/50 text-eagle-blue-800 hover:bg-eagle-blue-100"
                }`}
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Preparation Tab */}
      {activeTab === "preparation" && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                subtitle="Before Ceremony"
                title="Preparation Guidelines"
                description="Proper preparation helps ensure a meaningful and transformative ceremonial experience."
                alignment="left"
              />
              
              <div className="space-y-16 mt-12">
                {/* Physical Preparation */}
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-4">
                    Physical Preparation
                  </h3>
                  <p className="text-eagle-blue-700 leading-relaxed mb-6">
                    Preparing your body creates a foundation for deeper ceremonial work.
                  </p>
                  <ul className="space-y-4">
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Dietary Considerations</h4>
                      <p className="text-eagle-blue-700">
                        In the days leading up to ceremony, consider eating lighter, cleaner meals. 
                        Reducing or eliminating processed foods, sugar, caffeine, and alcohol can help 
                        prepare your body. Specific dietary guidelines may be provided for certain ceremonies.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Rest and Self-Care</h4>
                      <p className="text-eagle-blue-700">
                        Prioritize adequate sleep and rest in the days before ceremony. Consider 
                        gentle practices like walks in nature, light yoga, or meditation to center yourself.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Substances and Medications</h4>
                      <p className="text-eagle-blue-700">
                        Some substances and medications may not be compatible with certain ceremonies. 
                        During our preliminary conversation, we'll discuss any medications you're taking 
                        and provide guidance. <em>Never discontinue prescribed medications without consulting 
                        your healthcare provider.</em>
                      </p>
                    </li>
                  </ul>
                </div>
                
                {/* Mental/Emotional Preparation */}
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-4">
                    Mental/Emotional Preparation
                  </h3>
                  <p className="text-eagle-blue-700 leading-relaxed mb-6">
                    Preparing your mind and heart allows for deeper ceremonial experiences.
                  </p>
                  <ul className="space-y-4">
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Setting Clear Intentions</h4>
                      <p className="text-eagle-blue-700">
                        Take time to reflect on why you're participating in ceremony and what you hope 
                        to receive or learn. Your intention doesn't need to be elaborate—simple, heartfelt 
                        intentions often guide powerful experiences.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Journaling Practices</h4>
                      <p className="text-eagle-blue-700">
                        In the days before ceremony, consider journaling about your current life 
                        circumstances, challenges, questions, and hopes. This creates a record of your 
                        pre-ceremony state and can help clarify your intentions.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Mindfulness Exercises</h4>
                      <p className="text-eagle-blue-700">
                        Simple mindfulness practices can help develop the present-moment awareness that 
                        supports ceremonial work. Try bringing full attention to your breath for 5-10 
                        minutes daily in the week before ceremony.
                      </p>
                    </li>
                  </ul>
                </div>
                
                {/* Spiritual Preparation */}
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-4">
                    Spiritual Preparation
                  </h3>
                  <p className="text-eagle-blue-700 leading-relaxed mb-6">
                    Opening yourself to the ceremonial experience through spiritual practices.
                  </p>
                  <ul className="space-y-4">
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Connect with Your Practice</h4>
                      <p className="text-eagle-blue-700">
                        If you have an existing spiritual practice, deepen your engagement with it in the 
                        days before ceremony. If you don't have a formal practice, spending quiet time in 
                        nature or in meditation can help prepare your spirit.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Opening to the Unknown</h4>
                      <p className="text-eagle-blue-700">
                        Ceremonial experiences often unfold in unexpected ways. Practice cultivating an 
                        attitude of openness, curiosity, and trust in the process, even when it differs 
                        from your expectations.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Honoring Your Path</h4>
                      <p className="text-eagle-blue-700">
                        Remember that you bring your unique spiritual background to the shared ceremonial 
                        space. There's no need to adopt beliefs that don't resonate with you—the ceremony 
                        will meet you where you are.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Integration Tab */}
      {activeTab === "integration" && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                subtitle="After Ceremony"
                title="Integration Support"
                description="The days and weeks following a ceremony offer rich opportunities for insight and transformation."
                alignment="left"
              />
              
              <div className="space-y-16 mt-12">
                {/* Integration Resources */}
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-4">
                    Integration Resources
                  </h3>
                  <p className="text-eagle-blue-700 leading-relaxed mb-6">
                    I provide various resources to support your integration process:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-eagle-blue-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eagle-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-eagle-blue-900 mb-2">One-on-One Integration Sessions</h4>
                      <p className="text-eagle-blue-700">
                        Personal integration sessions provide space to process your experience with guidance 
                        and support. These sessions can help you make meaning of your ceremony and apply 
                        insights to your daily life.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-eagle-blue-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eagle-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Integration Circles</h4>
                      <p className="text-eagle-blue-700">
                        For group ceremonies, integration circles provide an opportunity to reconnect with 
                        fellow participants, share experiences, and continue the collective healing process.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-eagle-blue-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eagle-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Journaling Prompts</h4>
                      <p className="text-eagle-blue-700">
                        Structured journaling prompts help you continue processing and integrating your ceremonial 
                        experience. Regular reflection supports the integration of insights into daily life.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-eagle-blue-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eagle-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Recommended Resources</h4>
                      <p className="text-eagle-blue-700">
                        Based on your specific experience, I may recommend books, practices, or additional 
                        modalities to support your continued growth and integration.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Integration Practices */}
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-serif font-bold text-eagle-blue-900 mb-4">
                    Integration Practices
                  </h3>
                  <p className="text-eagle-blue-700 leading-relaxed mb-6">
                    Simple practices to support your integration process:
                  </p>
                  <ul className="space-y-4">
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Gentle Self-Care</h4>
                      <p className="text-eagle-blue-700">
                        After ceremony, prioritize gentle self-care: adequate rest, nourishing food, time 
                        in nature, and minimal screen time. Allow yourself space to process without immediately 
                        returning to the usual pace of life.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Creative Expression</h4>
                      <p className="text-eagle-blue-700">
                        Many find that creative expression—through art, music, dance, or writing—helps 
                        process and integrate ceremonial experiences. Even if you don't consider yourself 
                        artistic, simple creative expression can access wisdom that might elude linear thinking.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Embodiment Practices</h4>
                      <p className="text-eagle-blue-700">
                        Gentle movement practices like yoga, qigong, or conscious walking help integrate 
                        insights at the physical level, bringing ceremony's benefits into your lived experience.
                      </p>
                    </li>
                    <li className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-medium text-eagle-blue-900 mb-2">Community Connection</h4>
                      <p className="text-eagle-blue-700">
                        Sharing your experience with supportive community members—whether fellow participants 
                        or trusted friends—can provide additional perspectives and support for your integration.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                subtitle="Common Questions"
                title="Frequently Asked Questions"
                description="Answers to common questions about ceremonial experiences."
                alignment="left"
              />
              
              <div className="mt-12 animate-fade-in">
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-eagle-blue-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-eagle-blue-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Safety First Section */}
      <section className="py-20 md:py-24 bg-eagle-blue-50/50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Safety Information"
              title="Safety First"
              description="While ceremonial work offers profound benefits, it's not appropriate for everyone at every time."
              alignment="center"
            />
            
            <div className="bg-white rounded-xl shadow-soft p-8 mt-12 animate-fade-in">
              <p className="text-eagle-blue-700 leading-relaxed mb-6">
                I require preliminary conversations with all participants to ensure ceremonies are a good 
                fit for your current needs and circumstances. During this conversation, we'll discuss:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-eagle-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="h-2 w-2 rounded-full bg-eagle-blue-900"></span>
                  </span>
                  <span className="text-eagle-blue-700">Your history with ceremonial work and what draws you to it now</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-eagle-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="h-2 w-2 rounded-full bg-eagle-blue-900"></span>
                  </span>
                  <span className="text-eagle-blue-700">Any physical or mental health considerations that may impact your ceremonial experience</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-eagle-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="h-2 w-2 rounded-full bg-eagle-blue-900"></span>
                  </span>
                  <span className="text-eagle-blue-700">Current medications and their potential interactions with ceremonial elements</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-eagle-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="h-2 w-2 rounded-full bg-eagle-blue-900"></span>
                  </span>
                  <span className="text-eagle-blue-700">Your questions and concerns about the ceremonial process</span>
                </li>
              </ul>
              <p className="text-eagle-blue-700 leading-relaxed">
                In some cases, I may recommend postponing ceremonial work or exploring alternative healing 
                modalities. This recommendation comes from a place of care and responsibility—certain 
                ceremonies may not be helpful or could potentially be harmful during specific life circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block animate-fade-in text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
              Begin Your Journey
            </span>
            <h2 className="animate-fade-in text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-6">
              Ready to Experience Ceremony?
            </h2>
            <p className="animate-fade-in text-eagle-blue-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Browse upcoming ceremonies and reserve your spot, or contact me with any additional questions.
            </p>
            <div className="animate-fade-in flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/events">
                <Button size="lg" className="w-full sm:w-auto group">
                  View Upcoming Ceremonies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Preparation;
