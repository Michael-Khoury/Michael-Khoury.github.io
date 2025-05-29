import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/mk-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeScrollSection, setActiveScrollSection] = useState('home');
  const navRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
  if (location.pathname === '/' && location.state?.scrollTo === 'about') {
    setActiveScrollSection('about');
  }
}, [location]);

  // Track scroll position to toggle between Home and About Me
  useEffect(() => {
  const aboutSection = document.getElementById('about');

  if (!aboutSection || location.pathname !== '/') return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setActiveScrollSection('about');
      } else {
        setActiveScrollSection('home');
      }
    },
    { threshold: 0.6 }
  );

  observer.observe(aboutSection);

  return () => {
    observer.disconnect();
  };
}, [location.pathname]);

  const handleLinkClick = (e, path) => {
    setIsOpen(false);
    const targetHash = path === '/' ? '#/' : `#${path}`;
    const currentHash = window.location.hash;
    if (currentHash === targetHash) {
      e.preventDefault();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        <Link to="/" className="logo-only-link" onClick={(e) => handleLinkClick(e, '/')}>
          <img src={logo} alt="MK Logo" className="logo-img" />
        </Link>
        <Link to="/" className="logo-text-link" onClick={(e) => handleLinkClick(e, '/')}>
          <div className="logo-text">
            Michael Khoury<br />
            <span className="subtitle">Senior Computer Engineering Student</span>
          </div>
        </Link>
      </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === '/' && activeScrollSection === 'home' ? 'active-link' : ''}
          onClick={(e) => handleLinkClick(e, '/')}
        >
          Home
        </Link>

        <Link
          to="/"
          className={location.pathname === '/' && activeScrollSection === 'about' ? 'active-link' : ''}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            if (location.hash !== '#/') {
              navigate('/', { state: { scrollTo: 'about' } });
            } else {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
        >
          About Me
        </Link>

        <Link
          to="/projects"
          className={location.pathname === '/projects' ? 'active-link' : ''}
          onClick={(e) => handleLinkClick(e, '/projects')}
        >
          Projects
        </Link>

        <Link
          to="/work"
          className={location.pathname === '/work' ? 'active-link' : ''}
          onClick={(e) => handleLinkClick(e, '/work')}
        >
          Work Experience
        </Link>

        <Link
          to="/resume"
          className={location.pathname === '/resume' ? 'active-link' : ''}
          onClick={(e) => handleLinkClick(e, '/resume')}
        >
          Resume
        </Link>

        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active-link' : ''}
          onClick={(e) => handleLinkClick(e, '/contact')}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
