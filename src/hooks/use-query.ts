
import { useQuery } from "@tanstack/react-query";
import { 
  getServices, 
  getPortfolioProjects, 
  getAchievements, 
  getBlogPosts, 
  getTestimonials 
} from "@/lib/db";

export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      console.log('Fetching services...');
      try {
        const result = await getServices();
        console.log('Services fetched:', result);
        return result;
      } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
      }
    }
  });
}

export function usePortfolioProjects() {
  return useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: async () => {
      console.log('Fetching portfolio projects...');
      try {
        const result = await getPortfolioProjects();
        console.log('Portfolio projects fetched:', result);
        return result;
      } catch (error) {
        console.error('Error fetching portfolio projects:', error);
        throw error;
      }
    }
  });
}

export function useAchievements() {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: async () => {
      console.log('Fetching achievements...');
      try {
        const result = await getAchievements();
        console.log('Achievements fetched:', result);
        return result;
      } catch (error) {
        console.error('Error fetching achievements:', error);
        throw error;
      }
    }
  });
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      console.log('Fetching blog posts...');
      try {
        const result = await getBlogPosts();
        console.log('Blog posts fetched:', result);
        return result;
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }
    }
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      console.log('Fetching testimonials...');
      try {
        const result = await getTestimonials();
        console.log('Testimonials fetched:', result);
        return result;
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
      }
    }
  });
}
