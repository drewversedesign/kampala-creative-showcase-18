
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTopOnMount from '@/components/ScrollToTopOnMount';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { usePortfolioProjects } from '@/hooks/use-query';

const ProjectsPage = () => {
  const { data: projects, isLoading, error } = usePortfolioProjects();
  const { id } = useParams();

  if (isLoading) return <div>Loading project...</div>;
  if (error) return <div>Error loading project</div>;
  if (!projects?.length) return <div>No projects found</div>;

  // Find the project with the matching ID, or default to the first project if ID not found
  const currentProject = id 
    ? projects.find(p => p.id === id) || projects[0]
    : projects[0];
    
  const currentIndex = projects.findIndex(p => p.id === currentProject.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

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
            src={currentProject.image_url || '/placeholder.svg'}
            alt={currentProject.title}
            className="w-full rounded-lg shadow-xl object-cover h-[400px]"
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-6">{currentProject.description}</p>
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600">{currentProject.description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Client</h2>
            <p className="text-gray-600 mb-6">{currentProject.client_name || 'Not specified'}</p>
            <h2 className="text-2xl font-bold mb-4">Completion Date</h2>
            <p className="text-gray-600">{currentProject.completion_date || 'Not specified'}</p>
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
