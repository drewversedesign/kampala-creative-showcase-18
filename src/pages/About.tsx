
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>About DrewVerse Design | Premium Digital Agency Uganda</title>
        <meta name="description" content="Learn about DrewVerse Design, Uganda's leading digital agency delivering exceptional branding, web development, and design solutions since 2023." />
        <meta name="keywords" content="digital agency Uganda, DrewVerse Design about, creative agency Kampala" />
      </Helmet>
      
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-lg mb-6">About DrewVerse Design</h1>
            <p className="text-drewverse-text/70 mb-8">
              Founded in 2023, DrewVerse Design is a premium digital agency specializing in creating exceptional digital experiences.
              Our team combines creativity with technical expertise to deliver solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </section>
        <WhyChooseUsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default About;
