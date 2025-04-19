
import React from 'react';
import Navbar from '../Navbar';
import FooterSection from '../FooterSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BlogPostNotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/blog')} variant="outline">
              <ArrowLeft className="mr-2" /> Back to Blog
            </Button>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};
