
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    console.log('ScrollToTopOnMount triggered for path:', pathname);
    
    // Force scroll reset using multiple methods for cross-browser compatibility
    const scrollToTop = () => {
      // Method 1: Using scrollTo with auto behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Using 'auto' instead of 'smooth' for immediate effect
      });
      
      // Method 2: Direct assignment to scrollTop properties
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Using scroll function
      window.scroll(0, 0);
      
      console.log('Scroll top executed with multiple methods');
    };

    // Execute scroll on both initial mount and route changes
    if (isInitialMount.current) {
      // On initial page load
      isInitialMount.current = false;
      // Use timeout to ensure DOM is fully loaded
      setTimeout(scrollToTop, 0);
    } else {
      // On subsequent navigation
      scrollToTop();
    }
    
    // Add an additional delayed scroll for problematic cases
    setTimeout(scrollToTop, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
