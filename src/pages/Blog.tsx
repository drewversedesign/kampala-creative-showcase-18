
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../components/BlogSection';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog | DrewVerse Design</title>
        <meta name="description" content="Explore our latest insights on design, development, and digital transformation" />
        <meta name="keywords" content="design blog, UX insights, web development blog, Uganda tech blog" />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="heading-lg mb-4">Our Blog</h1>
            <p className="text-gray-600">
              Insights, stories and technical guides from our team of experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      width="800"
                      height="500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 text-drewverse-primary text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={14} />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    
                    <h2 className="heading-sm mb-3 group-hover:text-drewverse-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1 text-drewverse-primary font-medium">
                      Read More <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Blog;
