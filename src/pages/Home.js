import { useEffect, useState } from 'react';
import myPhoto from '../assets/michael.jpg';
import githubIcon from '../assets/icons/github.jpeg';
import linkedinIcon from '../assets/icons/linkedin.png';
import gmailIcon from '../assets/icons/gmail.png';
import { Link } from 'react-router-dom';
import pythonIcon from '../assets/icons/python.png';
import cppIcon from '../assets/icons/cpp.png';
import csharpIcon from '../assets/icons/csharp.png';
import jsIcon from '../assets/icons/javascript.png';
import htmlIcon from '../assets/icons/html.png';
import sqlIcon from '../assets/icons/sql.png';
import AssemblyIcon from '../assets/icons/assembly.png';
import vhdlIcon from '../assets/icons/vhdl.png';
import bashIcon from '../assets/icons/bash.png';
import jsonIcon from '../assets/icons/json.png';
import yamlIcon from '../assets/icons/yaml.png';
import xmlIcon from '../assets/icons/xml.png';
import markdownIcon from '../assets/icons/markdown.png';
import matlabIcon from '../assets/icons/matlab.jpeg';
import cssIcon from '../assets/icons/css.png';
import cIcon from '../assets/icons/c.png';
import reactIcon from '../assets/icons/react.png';
import unityIcon from '../assets/icons/unity.png';
import numpyIcon from '../assets/icons/numpy.png';
import matplotlibIcon from '../assets/icons/matplotlib.png';
import pandasIcon from '../assets/icons/pandas.png';
import openaiIcon from '../assets/icons/openai.png';
import mlflowIcon from '../assets/icons/mlflow.jpeg';
import condaIcon from '../assets/icons/conda.png';
import puttyIcon from '../assets/icons/putty.png';
import shIcon from '../assets/icons/sh.png';
import pytorchIcon from '../assets/icons/pytorch.png';
import dotnetIcon from '../assets/icons/dotnet.png';
import dsaIcon from '../assets/icons/dsa.png';
import openpyxlIcon from '../assets/icons/openpyxl.png';
import gitIcon from '../assets/icons/git.png';
import zapierIcon from '../assets/icons/zapier.png';
import msofficeIcon from '../assets/icons/msoffice.jpeg';
import notionIcon from '../assets/icons/notion.png';
import sapIcon from '../assets/icons/sap.png';
import quartusIcon from '../assets/icons/quartus.png';
import jiraIcon from '../assets/icons/jira.jpeg';
import pspiceIcon from '../assets/icons/pspice.png';
import vscodeIcon from '../assets/icons/vscode.jpeg';
import dvcIcon from '../assets/icons/dvc.jpeg';
import simulinkIcon from '../assets/icons/simulink.jpeg';
import quarcIcon from '../assets/icons/quarc.jpeg';
;



function Home() {
  const [activeTab, setActiveTab] = useState('languages');


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
      I’m a fourth-year Computer Engineering student (B.Eng) at Memorial University of Newfoundland (Class of 2027), based in St. John’s, NL.
  My experience spans a range of roles and sectors—from working at the multinational corporation Vale, to developing AI solutions for the non-profit NLEats, to supporting peers as a Supplemental Instruction (SI) Leader.
  Most recently, I’ve been working as a Computer Engineering Intern focused on AI/ML at C-CORE.
  <br /><br />
  My interest in AI and machine learning began during part-time research with the Department of Computer Science and has grown through hands-on development work.
  I’m also open to opportunities across the broader field of computer engineering, including software development, embedded systems, and FPGA design.

  Outside of work and academics, I enjoy going to the gym, listening to music, spending time with friends, playing football (soccer), hiking, and exploring new places.
  <br /><br />
  Feel free to use the menu at the top right to explore my site — enjoy!
      </p>
    </div>

  <div className="about-skills">
  <div className="about-skills tech-stack-box">
  <h2 className="tech-stack-title">💻 Tech Stack</h2>

  <div className="tech-stack-tabs">
    <div className="tab-buttons">
      <button
        className={activeTab === 'languages' ? 'active' : ''}
        onClick={() => setActiveTab('languages')}
      >
        Languages
      </button>
      <button
        className={activeTab === 'frameworks' ? 'active' : ''}
        onClick={() => setActiveTab('frameworks')}
      >
        Libraries/Frameworks
      </button>
      <button
        className={activeTab === 'software' ? 'active' : ''}
        onClick={() => setActiveTab('software')}
      >
        Software
      </button>
    </div>

    <div className="tab-content">
      {activeTab === 'languages' && (
        <ul className="tech-list">
        <li className="tech-item"><img src={pythonIcon} alt="Python" className="tech-icon" />Python</li>
        <li className="tech-item"><img src={cppIcon} alt="C++" className="tech-icon" />C++</li>
        <li className="tech-item"><img src={cIcon} alt="C" className="tech-icon" />C</li>
        <li className="tech-item"><img src={csharpIcon} alt="C#" className="tech-icon" />C#</li>
        <li className="tech-item"><img src={jsIcon} alt="JavaScript" className="tech-icon" />JavaScript</li>
        <li className="tech-item"><img src={htmlIcon} alt="HTML/CSS" className="tech-icon" />HTML</li>
        <li className="tech-item"><img src={cssIcon} alt="HTML/CSS" className="tech-icon" />CSS</li>
        <li className="tech-item"><img src={sqlIcon} alt="SQL" className="tech-icon" />SQL</li>
        <li className="tech-item"><img src={AssemblyIcon} alt="SQL" className="tech-icon" />Assembly</li>
        <li className="tech-item"><img src={vhdlIcon} alt="SQL" className="tech-icon" />VHDL</li>
        <li className="tech-item"><img src={matlabIcon} alt="HTML/CSS" className="tech-icon" />Matlab</li>
        <li className="tech-item"><img src={bashIcon} alt="SQL" className="tech-icon" />Bash</li>
        <li className="tech-item"><img src={markdownIcon} alt="SQL" className="tech-icon" />Markdown</li>
        <li className="tech-item"><img src={yamlIcon} alt="SQL" className="tech-icon" />YAML</li>
        <li className="tech-item"><img src={xmlIcon} alt="SQL" className="tech-icon" />XML/JSX</li>
        <li className="tech-item"><img src={jsonIcon} alt="SQL" className="tech-icon" />JSON</li>
        
        
        </ul>
      )}

      {activeTab === 'frameworks' && (
        <ul>
          <li className="tech-item"><img src={reactIcon} alt="Python" className="tech-icon" />React.js</li>
          <li className="tech-item"><img src={pytorchIcon} alt="Python" className="tech-icon" />Pytorch</li>

          <li className="tech-item"><img src={matplotlibIcon} alt="Python" className="tech-icon" />Matplotlib</li>
          <li className="tech-item"><img src={dotnetIcon} alt="Python" className="tech-icon" />.NET</li>
          <li className="tech-item"><img src={numpyIcon} alt="Python" className="tech-icon" />NumPy</li>
          <li className="tech-item"><img src={unityIcon} alt="Python" className="tech-icon" />Unity</li>
          <li className="tech-item"><img src={pandasIcon} alt="Python" className="tech-icon" />Pandas</li>
          <li className="tech-item"><img src={openpyxlIcon} alt="Python" className="tech-icon" />openpyxl</li>
          <li className="tech-item"><img src={shIcon} alt="Python" className="tech-icon" />Shell Scripting (sh)</li>
          <li className="tech-item"><img src={openaiIcon} alt="Python" className="tech-icon" />OpenAI API</li>
          <li className="tech-item"><img src={mlflowIcon} alt="Python" className="tech-icon" />MLflow</li>
          <li className="tech-item"><img src={condaIcon} alt="Python" className="tech-icon" />Conda</li>
          <li className="tech-item"><img src={puttyIcon} alt="Python" className="tech-icon" />PuTTy</li>
          <li className="tech-item"><img src={dsaIcon} alt="Python" className="tech-icon" />DSA/OOP</li>

        </ul>
      )}

      {activeTab === 'software' && (
        <ul>
          <li className="tech-item"><img src={gitIcon} alt="Python" className="tech-icon" />Git/GitHub</li>
          <li className="tech-item"><img src={dvcIcon} alt="Python" className="tech-icon" />Data Version Control</li>
          <li className="tech-item"><img src={vscodeIcon} alt="Python" className="tech-icon" />Visual Studio Code</li>
          <li className="tech-item"><img src={zapierIcon} alt="Python" className="tech-icon" />Zapier</li>
          <li className="tech-item"><img src={pspiceIcon} alt="Python" className="tech-icon" />Pspice</li>
          <li className="tech-item"><img src={simulinkIcon} alt="Python" className="tech-icon" />Simulink</li>
          <li className="tech-item"><img src={jiraIcon} alt="Python" className="tech-icon" />Jira/Bitbucket</li>
          <li className="tech-item"><img src={msofficeIcon} alt="Python" className="tech-icon" />Microsoft Office</li>
          <li className="tech-item"><img src={notionIcon} alt="Python" className="tech-icon" />Notion </li>
          <li className="tech-item"><img src={sapIcon} alt="Python" className="tech-icon" />SAP</li>
          <li className="tech-item"><img src={quartusIcon} alt="Python" className="tech-icon" />Quartus Modelsim</li>
          <li className="tech-item"><img src= {quarcIcon} alt="Python" className="tech-icon" />Quanser QUARC</li>
        </ul>
      )}
    </div>
  </div>
</div>
</div>

  </div>
</section>
    </>
  );
}

export default Home;
