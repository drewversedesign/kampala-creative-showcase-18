
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="heading-lg mb-6">Contact Us</h1>
            <p className="text-drewverse-text/70">
              Have a project in mind? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
        <FooterSection />
      </main>
    </div>
  );
};

export default Contact;
