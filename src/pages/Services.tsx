
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <ServicesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Services;
