
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTopOnMount from '@/components/ScrollToTopOnMount';

// Mock data for projects (you can move this to a separate file later)
const projectsData = [
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
  const currentProject = projectsData.find(p => p.id === id) || projectsData[0];
  const currentIndex = projectsData.findIndex(p => p.id === currentProject.id);
  const prevProject = projectsData[currentIndex - 1];
  const nextProject = projectsData[currentIndex + 1];

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTopOnMount />
      
      <div className="container mx-auto px-4 py-16">
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
    </div>
  );
};

export default ProjectsPage;
