import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/mk-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

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

  // Scroll to top if already on the target path 
  const handleLinkClick = (e, path) => {
    setIsOpen(false);
    if (location.pathname === path) {
      e.preventDefault(); // prevent re-navigation
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
    // else: allow <Link> to handle navigation normally
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
        <Link to="/" onClick={(e) => handleLinkClick(e, '/')}>Home</Link>
        <a
          href="/#about"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            if (location.pathname !== '/') {
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
        </a>
        <Link to="/work" onClick={(e) => handleLinkClick(e, '/work')}>Work Experience</Link>
        <Link to="/projects" onClick={(e) => handleLinkClick(e, '/projects')}>Projects</Link>
        <Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Contact Me</Link>
        <Link to="/resume" onClick={(e) => handleLinkClick(e, '/resume')}>Resume</Link>
      </div>
    </nav>
  );
}

export default Navbar;
