import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>DrewVerse Design | Premium Digital Agency in Uganda</title>
        <meta name="description" content="Transform your digital presence with Uganda's leading digital agency. Expert web design, branding, and UI/UX solutions for forward-thinking businesses." />
        <meta name="keywords" content="digital agency Uganda, web design Kampala, UI/UX design, branding agency" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="DrewVerse Design | Premium Digital Agency in Uganda" />
        <meta property="og:description" content="Transform your digital presence with Uganda's leading digital agency. Expert web design, branding, and UI/UX solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drewversedesign.online" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DrewVerse Design | Premium Digital Agency in Uganda" />
        <meta name="twitter:description" content="Transform your digital presence with Uganda's leading digital agency." />
      </Helmet>

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
