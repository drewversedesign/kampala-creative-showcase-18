
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ExperienceSection from '../components/ExperienceSection';
import BlogCardStack from '../components/BlogCardStack';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';
import { scrollToSection } from '../utils/smoothScroll';

const Index: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if we need to scroll to a specific section
    const urlParams = new URLSearchParams(location.search);
    const section = urlParams.get('section');
    
    if (section) {
      // Slight delay to ensure the page has fully loaded
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <BlogCardStack />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
