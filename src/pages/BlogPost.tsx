
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the blog post from the imported blogPosts array
  const post = blogPosts.find((post) => post.id === slug);
  
  if (!post) {
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
  }

  // Generate structured data for the blog post
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "DrewVerse Design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drewversedesign.online/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | DrewVerse Design Blog</title>
        <meta name="description" content={post.excerpt} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide max-w-4xl">
          <Button 
            onClick={() => navigate('/blog')} 
            variant="outline"
            className="mb-8"
          >
            <ArrowLeft className="mr-2" /> Back to Blog
          </Button>
          
          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 text-drewverse-primary text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
                {post.category}
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="heading-lg mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <div className="prose prose-lg prose-gray max-w-none">
                {post.content.map((section, index) => {
                  if (section.type === "introduction") {
                    return (
                      <p key={`intro-${index}`} className="text-gray-600 leading-relaxed text-lg font-medium">
                        {section.text}
                      </p>
                    );
                  } else if (section.type === "section") {
                    return (
                      <div key={`section-${index}`} className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                        <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </div>
                      </div>
                    );
                  } else if (section.type === "conclusion") {
                    return (
                      <div key={`conclusion-${index}`} className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-drewverse-primary">
                        <h2 className="text-xl font-bold mb-2">Conclusion</h2>
                        <p className="text-gray-600">{section.text}</p>
                      </div>
                    );
                  } else if (section.type === "cta") {
                    return (
                      <div key={`cta-${index}`} className="mt-8 p-6 bg-drewverse-primary/10 rounded-xl text-center">
                        <p className="text-drewverse-primary font-medium">{section.text}</p>
                        <Button className="mt-4">Contact Us</Button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default BlogPost;
