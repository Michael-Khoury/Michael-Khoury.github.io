// components/Footer.js
import React from 'react';
import githubIcon from '../assets/icons/github.png';
import gmailIcon from '../assets/icons/gmail.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import './Footer.css'; // We'll style it here

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        © {new Date().getFullYear()} Michael Khoury. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="https://github.com/Michael-Khoury" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="footer-icon" title=" My GitHub"/>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=mkhoury@mun.ca"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://mail.google.com/mail/?view=cm&to=mkhoury@mun.ca',
              'gmailWindow',
              'width=600,height=600,scrollbars=yes,resizable=yes'
            );
          }}
        >
          <img
            src={gmailIcon}
            alt="Gmail"
            className="footer-icon"
            title="My Gmail"
          />
        </a>
        <a href="https://www.linkedin.com/in/-khoury/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" title="My LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
