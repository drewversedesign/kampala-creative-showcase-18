
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

    // Execute scroll immediately and with delays to ensure it works
    scrollToTop(); // Immediate execution
    
    // Multiple delayed attempts with increasing timeouts
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 500);
    
    // For the initial page load only, add extra attempts
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Additional attempts specifically for first load
      setTimeout(scrollToTop, 1000);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
