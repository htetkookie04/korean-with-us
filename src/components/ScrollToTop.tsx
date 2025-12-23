import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the page handle scrolling to that element
    // Otherwise, scroll to top when pathname changes
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // Instant scroll for immediate navigation
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

