// pages/Resume.js
import React from 'react';
import './Resume.css';
import resumePDF from '../assets/michaelkhouryresume.pdf'; 

function Resume() {
  return (
    <div className="page-container no-padding">
      <div className="projects-header">
        <h1 className="greeting">Resume</h1>
        <p className="typed-subline">
          Please find below my resume, up to date as of May 2025.
        </p>
      </div>

      <div className="resume-container">
        <iframe
          src={resumePDF}
          title="Michael Khoury Resume"
          className="resume-viewer"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
