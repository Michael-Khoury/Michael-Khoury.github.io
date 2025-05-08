import { useEffect, useState } from 'react';
import myPhoto from '../assets/michael.jpg';
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

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-on-scroll');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // <-- ✨ allow repeated fade-ins
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach(section => observer.observe(section));
  
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <section className="home-section">
        <h1 className="greeting">
          {text1}
          {showLine1Cursor && <span className="cursor">|</span>}
        </h1>
        <p className="typed-subline">
          {text2}
          {showLine2 && <span className="cursor-black">|</span>}
        </p>

        {showImage && (
          <div className="profile-links-row">
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
          </div>
        )}
      </section>

      <section id="about" className="about-section fade-in-on-scroll">
  <div className="about-container">
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        I'm a Computer Engineering student with a deep passion for software development and AI/ML. <br />
        I enjoy crafting intuitive interfaces and solving real-world problems through code. <br />
        Outside of academics, I’ve worked on machine learning projects, Unity games, and full-stack web apps.
      </p>
    </div>

    <div className="about-skills">
      <h2>⚙️ Tech Stack</h2>
      <ul>
        <li>💻 JavaScript (React), HTML/CSS</li>
        <li>🧠 Python (NumPy, PyTorch, scikit-learn)</li>
        <li>🛠 C/C++ and C# (Unity)</li>
        <li>🗃 SQL & Firebase</li>
        <li>🔧 Git, GitHub, GitLab</li>
        <li>🚀 APIs, DVC, Docker (basics)</li>
      </ul>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;
