
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTopOnMount from '@/components/ScrollToTopOnMount';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

// Updated projects data to match the IDs used in PortfolioSection
const projectsData = [
  {
    id: 'hamburg-card',
    title: 'Hamburg Card Platform',
    description: 'Modern fintech solution for digital card management with secure payment processing and real-time transaction monitoring.',
    image: '/lovable-uploads/897efdcc-660f-4a00-84cd-d5de39410e7c.png',
    challenge: 'Building a secure, scalable card management system that integrates with multiple payment processors while maintaining strict security standards.',
    solution: 'Implemented a microservices architecture with end-to-end encryption and comprehensive audit logging for all transactions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Stripe API'],
    outcome: 'Successfully processed over 500,000 transactions in the first quarter with 99.99% uptime'
  },
  {
    id: 'analyx-social',
    title: 'Analyx Social Media Manager',
    description: 'Comprehensive social media analytics and management platform for monitoring engagement across multiple platforms.',
    image: '/lovable-uploads/2db1f571-8a36-49be-a5e0-f1d0bfa9b4f1.png',
    challenge: 'Creating a unified dashboard that pulls real-time data from multiple social media APIs with varying rate limits and data structures.',
    solution: 'Developed a robust data normalization layer and implemented intelligent caching to handle API limitations.',
    technologies: ['React', 'Redux', 'Express.js', 'PostgreSQL', 'GraphQL'],
    outcome: 'Helped clients increase engagement by an average of 37% within three months'
  },
  {
    id: 'quickstore',
    title: 'QuickStore E-commerce',
    description: 'Feature-rich e-commerce platform for electronics with advanced product filtering and recommendation engine.',
    image: '/lovable-uploads/d1f028e5-6629-4146-8077-d6f1572b23d7.png',
    challenge: 'Building a high-performance e-commerce system that could handle over 10,000 products with complex filtering options.',
    solution: 'Implemented Elasticsearch for lightning-fast product search and used machine learning for personalized recommendations.',
    technologies: ['Next.js', 'Elasticsearch', 'Python', 'TensorFlow', 'AWS'],
    outcome: 'Increased conversion rates by 24% and average order value by 15%'
  },
  {
    id: 'furniture-store',
    title: 'Modern Furniture Store',
    description: 'Elegant furniture e-commerce with virtual room planning and AR visualization capabilities.',
    image: '/lovable-uploads/7b7167b7-701e-48c0-852a-7e36a09c938d.png',
    challenge: 'Integrating 3D visualization and AR technology into a traditional e-commerce platform.',
    solution: 'Developed custom WebGL renderers and mobile AR experiences that work seamlessly with the product catalog.',
    technologies: ['React', 'Three.js', 'WebGL', 'ARKit', 'ARCore'],
    outcome: 'Reduced return rates by 45% and increased customer satisfaction scores by 30%'
  },
  {
    id: 'create-software',
    title: 'Create Software Solutions',
    description: 'Corporate software development company website with advanced case study visualization and customer portal.',
    image: '/lovable-uploads/f2d11645-744f-4e98-9a1c-69261d0b2718.png',
    challenge: 'Creating a high-performance, visually impressive website that also includes secure client access areas.',
    solution: 'Built a JAMstack architecture with serverless functions for the client portal and dynamic content.',
    technologies: ['Gatsby', 'Netlify', 'Serverless', 'Auth0', 'Contentful'],
    outcome: 'Increased lead generation by 80% while reducing hosting costs by 60%'
  },
  {
    id: 'halo-ai',
    title: 'Halo AI Studio',
    description: 'Modern AI solutions platform with beautiful UI/UX and interactive demos of AI capabilities.',
    image: '/lovable-uploads/c72b53cf-2250-477a-b51e-5bf27640ee57.png',
    challenge: 'Showcasing complex AI technology in an approachable, interactive way for non-technical users.',
    solution: 'Created interactive demos with real-time AI processing that users can try directly in the browser.',
    technologies: ['React', 'TensorFlow.js', 'WebAssembly', 'Node.js', 'WebGL'],
    outcome: 'Doubled conversion rate for enterprise AI solution inquiries within two months'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring secure payments, real-time inventory, and an intuitive admin dashboard.',
    image: '/lovable-uploads/81439078-5641-41e3-ab47-9bd3397ff27b.png',
    challenge: 'Creating a scalable and secure e-commerce solution that could handle high traffic and complex transactions.',
    solution: 'Implemented a microservices architecture with Redis caching and MongoDB for optimal performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
    outcome: 'Increased sales by 150% and reduced page load times by 60%'
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Portal',
    description: 'A secure healthcare portal allowing patients to schedule appointments, access medical records, and communicate with healthcare providers.',
    image: '/lovable-uploads/9776f2e4-f20a-43ea-a3b6-b4b7d8623c16.png',
    challenge: 'Building a HIPAA-compliant platform with real-time communication features.',
    solution: 'Developed a secure WebSocket system with end-to-end encryption for patient-doctor communication.',
    technologies: ['React', 'TypeScript', 'WebSocket', 'PostgreSQL'],
    outcome: 'Reduced appointment scheduling time by 75%'
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'A modern mobile banking application with features for transactions, investments, and financial planning.',
    image: '/lovable-uploads/acad048e-c7de-4e77-ab8f-ac345aef960f.png',
    challenge: 'Implementing secure banking features while maintaining a user-friendly interface.',
    solution: 'Created a biometric authentication system and intuitive UI for complex banking operations.',
    technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
    outcome: 'Achieved 4.8/5 rating on app stores with 100,000+ downloads'
  }
];

const ProjectsPage = () => {
  const { id } = useParams();
  // Find the project with the matching ID, or default to the first project if ID not found
  const currentProject = id 
    ? projectsData.find(p => p.id === id) || projectsData[0]
    : projectsData[0];
    
  const currentIndex = projectsData.findIndex(p => p.id === currentProject.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTopOnMount />
      
      <div className="container mx-auto px-4 py-24">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentProject.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {currentProject.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full rounded-lg shadow-xl object-cover h-[400px]"
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-6">{currentProject.challenge}</p>
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600">{currentProject.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">Outcome</h2>
            <p className="text-gray-600">{currentProject.outcome}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          {prevProject ? (
            <Link to={`/projects/${prevProject.id}`}>
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous Project
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link to={`/projects/${nextProject.id}`}>
              <Button variant="ghost" className="flex items-center gap-2">
                Next Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default ProjectsPage;
