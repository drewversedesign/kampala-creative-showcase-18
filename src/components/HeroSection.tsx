
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 bg-white relative overflow-hidden">
      <div className="absolute -top-60 -right-60 w-96 h-96 bg-drewverse-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-drewverse-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="heading-xl mb-6">
            We Are <span className="text-gradient">DrewVerse Design</span>
          </h1>
          <p className="text-xl text-drewverse-text/80 mb-8 max-w-xl">
            Crafting Beautiful & Functional Digital Experiences for brands that want to make a lasting impression.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
              className="btn-primary flex items-center gap-2 group"
            >
              Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
              className="btn-outline"
            >
              Let's Talk
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-drewverse-primary">5+</p>
              <p className="text-sm text-drewverse-text/70">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-drewverse-primary">60+</p>
              <p className="text-sm text-drewverse-text/70">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-drewverse-primary">40+</p>
              <p className="text-sm text-drewverse-text/70">Happy Clients</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative z-10 animate-scale-in">
            <img 
              src="/public/lovable-uploads/b01057c4-3c82-4aa4-abc6-f0e575e97190.png" 
              alt="DrewVerse Design Team" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-fade-in-right" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Always Delivering</p>
                  <p className="text-sm text-drewverse-text/70">Quality Results</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -left-10 -z-10 w-60 h-60 bg-drewverse-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -top-10 -right-10 -z-10 w-60 h-60 bg-drewverse-primary/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
