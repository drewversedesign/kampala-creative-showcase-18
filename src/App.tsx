
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
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
  
  // useLayoutEffect runs synchronously after DOM mutations but before browser paint
  useLayoutEffect(() => {
    console.log('App-level useLayoutEffect scroll reset for path:', location.pathname);
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);
  
  // Regular useEffect for additional attempts
  useEffect(() => {
    console.log('App-level scroll reset for path:', location.pathname);
    
    // Force scroll to top immediately at app level
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Multiple delayed attempts
    const timeoutIds = [50, 100, 200].map(delay => 
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        console.log(`App-level scroll reset executed after ${delay}ms`);
      }, delay)
    );
    
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
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
