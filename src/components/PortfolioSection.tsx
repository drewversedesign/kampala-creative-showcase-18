
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
          {/* Hamburg Card Project */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/897efdcc-660f-4a00-84cd-d5de39410e7c.png"
              alt="Hamburg Card Platform"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Hamburg Card Platform</h3>
              <p className="text-gray-600 mb-4">Modern fintech solution for digital card management</p>
              <Link 
                to="/projects/hamburg-card" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Analyx Social Media Manager */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/2db1f571-8a36-49be-a5e0-f1d0bfa9b4f1.png"
              alt="Analyx Social Media Manager"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Analyx Social Media Manager</h3>
              <p className="text-gray-600 mb-4">Comprehensive social media analytics and management platform</p>
              <Link 
                to="/projects/analyx-social" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* QuickStore E-commerce */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/d1f028e5-6629-4146-8077-d6f1572b23d7.png"
              alt="QuickStore E-commerce"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">QuickStore E-commerce</h3>
              <p className="text-gray-600 mb-4">Feature-rich e-commerce platform for electronics</p>
              <Link 
                to="/projects/quickstore" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Modern Furniture Store */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/7b7167b7-701e-48c0-852a-7e36a09c938d.png"
              alt="Modern Furniture Store"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Modern Furniture Store</h3>
              <p className="text-gray-600 mb-4">Elegant furniture e-commerce with virtual room planning</p>
              <Link 
                to="/projects/furniture-store" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Create Software Solutions */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/f2d11645-744f-4e98-9a1c-69261d0b2718.png"
              alt="Create Software Solutions"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Create Software Solutions</h3>
              <p className="text-gray-600 mb-4">Corporate software development company website</p>
              <Link 
                to="/projects/create-software" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Halo AI Studio */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/c72b53cf-2250-477a-b51e-5bf27640ee57.png"
              alt="Halo AI Studio"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Halo AI Studio</h3>
              <p className="text-gray-600 mb-4">Modern AI solutions platform with sleek design</p>
              <Link 
                to="/projects/halo-ai" 
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
