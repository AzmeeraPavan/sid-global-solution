
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (): null => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the browser handle scrolling to the element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Otherwise, scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
