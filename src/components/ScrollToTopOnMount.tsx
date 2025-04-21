
import { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  // useLayoutEffect runs synchronously after DOM mutations but before browser paint
  // This ensures scroll resets happen before the user sees anything
  useLayoutEffect(() => {
    console.log('ScrollToTopOnMount useLayoutEffect triggered for path:', pathname);
    
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

    // Execute scroll immediately
    scrollToTop();
    
    // Return a cleanup function that also scrolls to top when unmounting
    return () => {
      scrollToTop();
    };
  }, [pathname]); // Only run when pathname changes

  // Also use regular useEffect for additional attempts with delays
  useEffect(() => {
    console.log('ScrollToTopOnMount regular useEffect triggered for path:', pathname);
    
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Multiple delayed attempts with increasing timeouts
    const timeouts = [10, 50, 100, 200, 500].map(delay => 
      setTimeout(scrollToTop, delay)
    );
    
    // For the initial page load only, add extra attempts
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Additional attempts specifically for first load
      timeouts.push(setTimeout(scrollToTop, 1000));
      timeouts.push(setTimeout(scrollToTop, 2000));
    }
    
    // Clean up all timeouts on unmount
    return () => {
      timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    };
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
