// components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on any route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.key]); // location.key updates on *every* navigation

  return null;
}

export default ScrollToTop;
