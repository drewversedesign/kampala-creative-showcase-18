
import { supabase } from "@/integrations/supabase/client";
import type { 
  Service, 
  PortfolioProject, 
  Achievement, 
  BlogPost, 
  Testimonial,
  ContactMessage 
} from "@/types/database";

export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: true });
    
  if (error) throw error;
  return data as Service[];
}

export async function getPortfolioProjects() {
  const { data, error } = await supabase
    .from('portfolio_projects')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) throw error;
  return data as PortfolioProject[];
}

export async function getAchievements() {
  const { data, error } = await supabase
    .from('achievements')
    .select('*')
    .order('created_at', { ascending: true });
    
  if (error) throw error;
  return data as Achievement[];
}

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false });
    
  if (error) throw error;
  return data as BlogPost[];
}

export async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) throw error;
  return data as Testimonial[];
}

export async function submitContactMessage(message: Omit<ContactMessage, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([{ ...message, status: 'new' }])
    .select()
    .single();
    
  if (error) throw error;
  return data as ContactMessage;
}
