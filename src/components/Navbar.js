import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/mk-logo.png'; // ✅ your logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const navRef = useRef();
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
  <div className="navbar-left">
    <Link to="/" className="logo-only-link" onClick={() => setIsOpen(false)}>
      <img src={logo} alt="MK Logo" className="logo-img" />
    </Link>
    <Link to="/" className="logo-text-link" onClick={() => setIsOpen(false)}>
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
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Me</Link>
        <Link to="/work" onClick={toggleMenu}>Work Experience</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Me</Link>
        <Link to="/resume" onClick={toggleMenu}>Resume</Link>
      </div>
    </nav>
  );
}

export default Navbar;
