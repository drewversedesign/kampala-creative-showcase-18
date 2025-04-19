
import { BlogPost as StaticBlogPost } from '../data/types';
import { BlogPost as DBBlogPost } from '../types/database';

export type UnifiedBlogPost = StaticBlogPost | DBBlogPost;

// Helper functions to safely access properties regardless of blog post type
export const getPostImage = (post: UnifiedBlogPost): string => {
  if ('image' in post) {
    return post.image;
  }
  return post.image_url || '/placeholder.svg';
};

export const getPostDate = (post: UnifiedBlogPost): string => {
  if ('date' in post) {
    return post.date;
  }
  return post.published_at || post.created_at || new Date().toISOString();
};

export const getPostAuthor = (post: UnifiedBlogPost): string => {
  if ('author' in post) {
    return post.author;
  }
  return "DrewVerse Design"; // Default author if not specified
};

export const getPostContent = (post: UnifiedBlogPost) => {
  if ('content' in post && Array.isArray(post.content)) {
    // Static content structure
    return post.content;
  } else if ('content' in post && typeof post.content === 'string') {
    // Database content structure (convert to compatible format)
    return [
      { type: "introduction", text: post.excerpt || "" },
      { type: "section", title: "Article", content: post.content }
    ];
  }
  return [];
};
