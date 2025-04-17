
import React from 'react';
import { buttonVariants } from './ui/button';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white pt-24 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-drewverse-primary to-orange-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>{' '}
            <div className="inline-flex items-center gap-2">
              for 
              <Sparkles className="text-drewverse-primary w-8 h-8 animate-pulse" />
            </div>{' '}
            <span className="block md:inline text-gray-900">Growing Brands</span>
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
              src="/lovable-uploads/f3a7c8f8-4cc6-4005-ac9c-347d76a16bdf.png" 
              alt="DrewVerse Design Team Collaboration" 
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
