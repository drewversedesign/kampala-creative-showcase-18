
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <article className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-6">From Our Latest Insights</h1>
            <p className="text-drewverse-text/70">Coming soon! We're working on bringing you amazing content.</p>
          </article>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default BlogPost;
