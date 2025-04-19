
import React from 'react';
import Navbar from '../Navbar';
import FooterSection from '../FooterSection';

export const BlogPostLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Loading...</h1>
            <p className="text-gray-600 mb-8">Please wait while we load the blog post.</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};
