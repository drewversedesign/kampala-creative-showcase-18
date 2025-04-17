
export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: BlogContent[];
  slug?: string;
}

export type BlogContent = 
  | { type: "introduction"; text: string }
  | { type: "section"; title: string; content: string }
  | { type: "conclusion"; text: string }
  | { type: "cta"; text: string };

// This is for the blog card in the BlogCardStack component
export interface BlogCardData {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}
