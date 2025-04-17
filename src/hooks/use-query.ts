
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
    queryFn: getServices
  });
}

export function usePortfolioProjects() {
  return useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: getPortfolioProjects
  });
}

export function useAchievements() {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: getAchievements
  });
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials
  });
}
