
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useBlogPosts } from '@/hooks/use-query';
import { toast } from '@/components/ui/sonner';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { BlogPostLoading } from '@/components/blog/BlogPostLoading';
import { BlogPostNotFound } from '@/components/blog/BlogPostNotFound';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { BlogPostSEO } from '@/components/blog/BlogPostSEO';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dbPosts, isLoading, error } = useBlogPosts();
  
  // First try to find the post from the database
  const dbPost = dbPosts?.find((post) => post.slug === id);
  
  // If not found in database, fallback to static data
  const staticPost = blogPosts.find((post) => post.id === id || post.slug === id);
  
  // Use database post if available, otherwise use static post
  const post = dbPost || staticPost;
  
  useEffect(() => {
    if (error) {
      toast.error("Error loading blog posts");
      console.error("Error loading blog posts:", error);
    }
  }, [error]);
  
  if (isLoading) {
    return <BlogPostLoading />;
  }
  
  if (!post) {
    return <BlogPostNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogPostSEO post={post} />
      <Navbar />
      <BlogPostContent post={post} />
      <FooterSection />
    </div>
  );
};

export default BlogPost;
