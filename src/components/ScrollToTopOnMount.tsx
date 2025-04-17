
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTopOnMount component
 * Automatically scrolls to the top of the page when the route changes or when the component mounts
 */
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
