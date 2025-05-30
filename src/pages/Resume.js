// pages/Resume.js
import React, { useEffect, useState } from 'react';
import './Resume.css';
import resumePDF from '../assets/michaelkhouryresume.pdf';

function Resume() {
  const [pdfSrc, setPdfSrc] = useState(resumePDF);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setPdfSrc(resumePDF + '#view=FitH');
    } else {
      setPdfSrc(resumePDF);
    }
  }, []);

  return (
    <div className="page-container no-padding">
      <div className="projects-header">
        <h1 className="greeting">Resume</h1>
        <p className="typed-subline">
          Please find below my resume, up to date as of June 2025.
        </p>
      </div>

      <div className="resume-container">
        <iframe
          src={pdfSrc}
          title="Michael Khoury Resume"
          className="resume-viewer"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
