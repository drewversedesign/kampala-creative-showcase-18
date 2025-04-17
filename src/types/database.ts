
export interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  category: string;
  client_name: string | null;
  project_url: string | null;
  completion_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: string;
  icon_name: string | null;
  description: string | null;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author_id: string;
  image_url: string | null;
  category: string;
  slug: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company: string | null;
  image_url: string | null;
  testimonial: string;
  rating: number;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  project_type: string | null;
  budget_range: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}
