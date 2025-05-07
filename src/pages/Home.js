import { useEffect, useState } from 'react';
import myPhoto from '../assets/michael.jpg'
import githubIcon from '../assets/icons/github.jpeg';
import linkedinIcon from '../assets/icons/linkedin.png';
import gmailIcon from '../assets/icons/gmail.png';
import { Link } from 'react-router-dom';



function Home() {
  const line1 = "Hi there, I'm Michael Khoury.";
  const line2 = "Welcome to my personal portfolio website!";

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showLine1Cursor, setShowLine1Cursor] = useState(true);
  const [showLine2, setShowLine2] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let index1 = 0;
    const typeLine1 = () => {
      if (index1 <= line1.length) {
        setText1(line1.slice(0, index1));
        index1++;
        setTimeout(typeLine1, 70);
      } else {
        setShowLine1Cursor(false);
        setShowLine2(true);
      }
    };
    typeLine1();
  }, []);

  useEffect(() => {
    if (!showLine2) return;

    let index2 = 0;
    const typeLine2 = () => {
      if (index2 <= line2.length) {
        setText2(line2.slice(0, index2));
        index2++;
        setTimeout(typeLine2, 50);
      } else {
        setTimeout(() => setShowImage(true), 300);
      }
    };
    typeLine2();
  }, [showLine2]);

  return (
    <div className="page-container">
      <h1 className="greeting">
        {text1}
        {showLine1Cursor && <span className="cursor">|</span>}
      </h1>
      <p className="typed-subline">
        {text2}
        {showLine2 && <span className="cursor-black">|</span>}
      </p>

      {showImage && (
        <>
          <img
            src={myPhoto}
            alt="Michael Khoury"
            className="profile-pic fade-in"
          />
          <div className="quick-links fade-in">
          <h2 className="quick-links-title">Quick Links</h2>  
            <a href="https://github.com/Michael-Khoury" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon-img" /> Visit my GitHub

            </a>
            <a href="https://www.linkedin.com/in/-khoury/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="icon-img" /> Connect with me on LinkedIn

            </a>
            <a href="/michaelkhouryresume.pdf" download>
            <span className="icon">📄</span> Download my resume
            </a>

            <a href="https://mail.google.com/mail/?view=cm&to=mkhoury@mun.ca" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Gmail" className="icon-img" /> Email me
            </a>


            <Link to="/projects">
            <span className="icon">💻</span> Explore my projects
            </Link>

          </div>
        </>
      )}
    </div>
    
  );
  
}

export default Home;