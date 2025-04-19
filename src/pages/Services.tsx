
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import ServicesSection from '../components/ServicesSection';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Our Services | Web Design & Digital Solutions Uganda</title>
        <meta name="description" content="Explore our comprehensive digital services including web design, branding, UI/UX design, and digital marketing solutions tailored for businesses in Uganda." />
        <meta name="keywords" content="web design Uganda, digital services Kampala, UI/UX design East Africa" />
      </Helmet>
      
      <Navbar />
      <main className="pt-24">
        <ServicesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Services;
