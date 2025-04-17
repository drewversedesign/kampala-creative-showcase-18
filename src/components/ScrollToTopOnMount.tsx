
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTopOnMount component
 * Automatically scrolls to the top of the page when the route changes or when the component mounts
 */
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure scroll to top works consistently across different browsers
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    // Fallback method for browser compatibility
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
