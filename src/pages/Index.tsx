
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ExperienceSection from '../components/ExperienceSection';
import BlogCardStack from '../components/BlogCardStack'; // Import the new component
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PortfolioSection from '../components/PortfolioSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

const Index: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <BlogCardStack /> {/* Replace the old BlogSection with our new BlogCardStack */}
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
