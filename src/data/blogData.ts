
export interface BlogCardData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const blogData: BlogCardData[] = [
  {
    id: 1,
    title: "Web Design",
    category: "Design",
    image: "/lovable-uploads/57ad8728-a549-49bd-b575-6f0b556c02c2.png",
    description: "Creating responsive, beautiful web experiences that engage and convert visitors."
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "Design",
    image: "/lovable-uploads/81439078-5641-41e3-ab47-9bd3397ff27b.png",
    description: "Crafting intuitive user interfaces with focused attention to user experience."
  },
  {
    id: 3,
    title: "Landing Page",
    category: "Design",
    image: "/lovable-uploads/71afe6c7-556e-4ada-b77b-25668af67c5e.png",
    description: "Building high-converting landing pages that drive results and engagement."
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    image: "/lovable-uploads/9bb5f335-3cd6-4e63-8267-8ff59e757076.png",
    description: "Developing cohesive brand identities that resonate with target audiences."
  },
  {
    id: 5,
    title: "Mobile App Design",
    category: "Development",
    image: "/lovable-uploads/4855fe53-09dc-4c21-9e07-3ef21384d89f.png",
    description: "Designing intuitive mobile experiences that users love to engage with."
  }
];
