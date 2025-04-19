
import React from 'react';
import { Helmet } from 'react-helmet';
import { UnifiedBlogPost } from '@/utils/blogHelpers';
import { getPostImage, getPostAuthor, getPostDate } from '@/utils/blogHelpers';

interface BlogPostSEOProps {
  post: UnifiedBlogPost;
}

export const BlogPostSEO: React.FC<BlogPostSEOProps> = ({ post }) => {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": getPostImage(post),
    "author": {
      "@type": "Person",
      "name": getPostAuthor(post)
    },
    "datePublished": getPostDate(post),
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
    <Helmet>
      <title>{post.title} | DrewVerse Design Blog</title>
      <meta name="description" content={post.excerpt} />
      
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={getPostImage(post)} />
      <meta property="og:type" content="article" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={getPostImage(post)} />
      
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
    </Helmet>
  );
};
