
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { useParams } from 'react-router-dom';

const PortfolioDetails = () => {
  const { id } = useParams();

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-6">Our Portfolio</h1>
            <p className="text-drewverse-text/70">Coming soon! We're preparing to showcase our amazing work.</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PortfolioDetails;
