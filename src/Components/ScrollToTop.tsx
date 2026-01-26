import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop Component
export const ScrollToTop = () => {
  const location = useLocation();  // Access the current route location

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page on route change
  }, [location]);  // Trigger scroll whenever the location changes

  return null;  // This component doesn't render anything visible
};

