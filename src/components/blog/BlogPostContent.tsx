
import React from 'react';
import { UnifiedBlogPost } from '@/utils/blogHelpers';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getPostImage, getPostDate, getPostAuthor, getPostContent } from '@/utils/blogHelpers';

interface BlogPostContentProps {
  post: UnifiedBlogPost;
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  const navigate = useNavigate();
  
  return (
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
              src={getPostImage(post)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 text-drewverse-primary text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
              {post.category}
            </div>
          </div>
          
          <div className="p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={getPostDate(post)}>{getPostDate(post)}</time>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{getPostAuthor(post)}</span>
              </div>
            </div>
            
            <div className="prose prose-lg prose-gray max-w-none">
              {getPostContent(post).map((section, index) => {
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
                      <Button className="mt-4" onClick={() => navigate('/contact')}>Contact Us</Button>
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
  );
};
