
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-commerce Platform */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/81439078-5641-41e3-ab47-9bd3397ff27b.png"
              alt="E-commerce Platform"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">A full-featured online shopping platform with modern UI/UX</p>
              <Link 
                to="/projects/ecommerce-platform" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Healthcare Portal */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/9776f2e4-f20a-43ea-a3b6-b4b7d8623c16.png"
              alt="Healthcare Portal"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Healthcare Portal</h3>
              <p className="text-gray-600 mb-4">Secure and intuitive healthcare management system</p>
              <Link 
                to="/projects/healthcare-portal" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Mobile Banking App */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/acad048e-c7de-4e77-ab8f-ac345aef960f.png"
              alt="Mobile Banking App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mobile Banking App</h3>
              <p className="text-gray-600 mb-4">Modern and secure mobile banking solution</p>
              <Link 
                to="/projects/mobile-banking" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
