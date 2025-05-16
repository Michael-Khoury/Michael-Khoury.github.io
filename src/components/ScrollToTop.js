// components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // optional
    });
  }, [hash]);

  return null;
}

export default ScrollToTop;
