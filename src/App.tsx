
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';

function App() {
  const location = useLocation();
  
  // Add a root-level scroll reset
  useEffect(() => {
    console.log('App-level scroll reset for path:', location.pathname);
    
    // Force scroll to top immediately at app level
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional delayed attempt
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log('App-level delayed scroll reset executed');
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/projects/:id?" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
