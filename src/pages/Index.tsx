
import React, { useEffect, useLayoutEffect } from 'react';
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
  
  // Use useLayoutEffect to ensure this runs synchronously before browser paint
  useLayoutEffect(() => {
    // Force scroll to top on homepage load - this runs synchronously
    console.log('Index component useLayoutEffect - forcing scroll to top');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  
  useEffect(() => {
    // Force scroll to top on homepage load
    console.log('Index component mounted, forcing scroll to top');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Check if we need to scroll to a specific section
    const urlParams = new URLSearchParams(location.search);
    const section = urlParams.get('section');
    
    if (section) {
      // Slight delay to ensure the page has fully loaded
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      // Additional delayed scroll attempts if not scrolling to a specific section
      const timeoutIds = [100, 300, 500].map(delay =>
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, delay)
      );
      
      return () => {
        timeoutIds.forEach(id => clearTimeout(id));
      };
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Best Web Design Company in Uganda | DrewVerse Design</title>
        <meta name="description" content="DrewVerse Design - Uganda's leading web design and digital agency. Professional web development, branding, and UI/UX solutions for forward-thinking businesses in East Africa." />
        <meta name="keywords" content="web design Uganda, web development Kampala, UI/UX design, digital agency Uganda, professional web design, business website development" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Web Design Company in Uganda | DrewVerse Design" />
        <meta property="og:description" content="Transform your digital presence with Uganda's leading web design agency. Expert web development, branding, and UI/UX solutions for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drewversedesign.online" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Design Company in Uganda | DrewVerse Design" />
        <meta name="twitter:description" content="Uganda's premier web design and digital agency delivering world-class solutions." />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="UG" />
        <meta name="geo.placename" content="Kampala" />
        <link rel="canonical" href="https://drewversedesign.online" />
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
