
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ExperienceSection from '../components/ExperienceSection';
import BlogCardStack from '../components/BlogCardStack';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PortfolioSection from '../components/PortfolioSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

const Index: React.FC = () => {
  // This ensures the page starts from the top with the navbar visible
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <BlogCardStack />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
