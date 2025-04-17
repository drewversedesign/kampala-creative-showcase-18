
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Blog post data with enhanced SEO information
// Export the blogPosts array so it can be imported in other files
export const blogPosts = [
  {
    id: 1,
    title: "Design Unleashed: Behind the Scenes of Our Creative Process",
    excerpt: "Get an inside look at our creative process and how we approach each design challenge with innovative solutions.",
    date: "April 12, 2025",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Design",
    slug: "design-unleashed-creative-process",
    keywords: ["design process", "creative workflow", "UX design Uganda", "design innovation"],
    author: "Drew Smith"
  },
  {
    id: 2,
    title: "Beyond Aesthetics: Crafting Meaningful UX for Real Users",
    excerpt: "Learn how we prioritize user experience and create designs that not only look good but also solve real problems.",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "UX Design",
    slug: "beyond-aesthetics-meaningful-ux-design",
    keywords: ["UX design", "user research", "UX best practices", "UI/UX Uganda"],
    author: "Sarah Johnson"
  },
  {
    id: 3,
    title: "Pixels & Insights: Unveiling the Art of UI/UX Design",
    excerpt: "Discover the principles and techniques we use to create intuitive and engaging user interfaces.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    slug: "pixels-insights-ui-ux-design-art",
    keywords: ["UI design", "UX principles", "web development", "design thinking"],
    author: "Michael Owor"
  }
];

const BlogSection = () => {
  // Generate structured data for blog posts
  const generateBlogStructuredData = () => {
    const blogListItems = blogPosts.map((post, index) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image,
      "keywords": post.keywords.join(", "),
      "position": index + 1,
      "url": `https://drewversedesign.online/blog/${post.slug}`
    }));
    
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": blogListItems
    };
  };
  
  const blogStructuredData = generateBlogStructuredData();

  return (
    <section id="blog" className="section-padding bg-drewverse-gray">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogStructuredData)}
        </script>
      </Helmet>
      
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="heading-lg mb-4">From Our Blog</h2>
            <p className="text-drewverse-text/70 max-w-2xl">
              Insights, tips, and stories from our team of digital experts.
              Stay updated with the latest trends in design and development.
            </p>
          </div>
          <Link to="/blog" className="flex items-center gap-2 text-drewverse-primary font-semibold mt-4 md:mt-0 group">
            View All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="500"
                />
                <div className="absolute top-4 left-4 bg-white/90 text-drewverse-primary text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-drewverse-text/60 text-sm mb-3">
                  <Calendar size={14} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="heading-sm mb-3 group-hover:text-drewverse-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-drewverse-text/70 mb-4">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-drewverse-primary font-medium">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
