
import React from 'react';
import { buttonVariants } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Digital Solutions for Growing Brands
          </h1>
          <p className="text-xl text-gray-600 max-w-[600px]">
            At DrewVerse Design, we transform your digital vision into powerful, engaging experiences that drive business growth.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/services" 
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/14ba41e3-b481-459c-918b-b18bcc20ac7c.png" 
              alt="DrewVerse Design Digital Innovation" 
              className="w-full max-w-[600px] h-auto rounded-lg shadow-lg object-cover relative z-10"
            />
            <div className="absolute inset-0 border-4 border-orange-500 rounded-lg z-0" style={{animation: 'border-pulse 3s ease-in-out infinite'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
