
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";
import { initScrollAnimation } from "../utils/scrollAnimation";

const Index = () => {
  // Scroll to top on page load and initialize animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    initScrollAnimation();
    
    // Re-initialize animations when the window is resized
    window.addEventListener("resize", initScrollAnimation);
    
    return () => {
      window.removeEventListener("resize", initScrollAnimation);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <ExperienceSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CtaSection />
        <BlogSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
