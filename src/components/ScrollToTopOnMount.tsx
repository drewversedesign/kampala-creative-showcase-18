
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTopOnMount component
 * Automatically scrolls to the top of the page when the route changes or when the component mounts
 */
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately when component mounts or route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Using 'auto' instead of 'smooth' for immediate effect
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
