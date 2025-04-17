
import React from 'react';
import { servicesData } from '../data/servicesData';
import { ServicesSectionTitle } from './service/ServicesSectionTitle';
import { ServicesCarousel } from './service/ServicesCarousel';
import { ServicesCta } from './service/ServicesCta';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-drewverse-gray relative">
      <div className="container-wide">
        <ServicesSectionTitle />
        <ServicesCarousel services={servicesData} />
        <ServicesCta />
      </div>
    </section>
  );
};

export default ServicesSection;
