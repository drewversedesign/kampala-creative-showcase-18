
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { useBlogPosts } from '@/hooks/use-query';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { Helmet } from 'react-helmet';
import { toast } from '@/components/ui/sonner';

const Blog = () => {
  const { data: dbPosts, isLoading, error } = useBlogPosts();
  
  // Combine database posts with static posts (prioritizing database posts)
  const allPosts = React.useMemo(() => {
    const combined = [...(dbPosts || [])];
    
    // Add static posts that don't exist in the database (by slug)
    blogPosts.forEach(staticPost => {
      const exists = combined.some(dbPost => 
        dbPost.slug === staticPost.id || dbPost.slug === staticPost.slug
      );
      
      if (!exists) {
        combined.push({
          id: staticPost.id,
          title: staticPost.title,
          excerpt: staticPost.excerpt,
          category: staticPost.category,
          image_url: staticPost.image,
          slug: staticPost.id,
          published_at: staticPost.date,
          content: '',
          author_id: '',
          created_at: '',
          updated_at: ''
        });
      }
    });
    
    // Sort by date (most recent first)
    return combined.sort((a, b) => {
      const dateA = new Date(a.published_at || a.created_at);
      const dateB = new Date(b.published_at || b.created_at);
      return dateB.getTime() - dateA.getTime();
    });
  }, [dbPosts]);
  
  useEffect(() => {
    if (error) {
      toast.error("Error loading blog posts");
      console.error("Error loading blog posts:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Digital Design Blog | DrewVerse Design Insights</title>
        <meta name="description" content="Expert insights on web design, digital marketing, and UI/UX trends from Uganda's leading digital agency. Stay updated with our latest articles." />
        <meta name="keywords" content="digital design blog, web development insights, UI/UX trends Uganda" />
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

          {isLoading ? (
            <div className="text-center py-12">
              <p>Loading blog posts...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug || post.id}`}>
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img 
                        src={post.image_url || '/placeholder.svg'}
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
                        <time dateTime={post.published_at || post.created_at}>
                          {post.published_at || post.created_at}
                        </time>
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
          )}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Blog;
