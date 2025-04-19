
import React from 'react';
import { servicesData } from '../data/servicesData';
import { ServicesSectionTitle } from './service/ServicesSectionTitle';
import { ServicesCarousel } from './service/ServicesCarousel';
import { ServicesCta } from './service/ServicesCta';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-drewverse-gray relative">
      <div className="container-wide">
        <h2 className="heading-lg text-center mb-8">
          Comprehensive Digital Services Tailored for Your Success
        </h2>
        <h3 className="text-xl md:text-2xl text-center text-gray-600 mb-12">
          World-Class Web Design & Digital Marketing Services
        </h3>
        <ServicesCarousel services={servicesData} />
        <ServicesCta />
      </div>
    </section>
  );
};

export default ServicesSection;
