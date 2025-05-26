// pages/WorkExperience.js
import React from 'react';
import './WorkExperience.css';
import Valelogo from '../assets/vale-company-logo.jpg'; 
import SIphoto from '../assets/SI-work-photo.jpg'; 
import Ccorelogo from '../assets/c-core-logo.png';
import VACLablogo from '../assets/vac-lab-logo.jpg';
import NLEatslogo from '../assets/NL-Eats-logo.png';
function WorkExperience() {
  return (
    <div className="page-container no-padding">
      <div className="projects-header">
        <h1 className="greeting">Work Experience</h1>
        <p className="typed-subline">
          Below is the collection of internships / work terms and experiences where I contributed to real-world computer engineering problems, software development and AI/ML projects.
        </p>
      </div>

      {/* C-CORE */}
      <div className="experience-block color1">
        <div className="experience-left">
          <h2>C-CORE – Computer Engineering Intern</h2>
          <p className="date-range"><em>May 2025 – Present</em></p>

            <p>
          Currently working at C-CORE on advanced R&D projects involving machine learning, signal processing, and real-time system development. My contributions include designing and training machine learning models using Python and PyTorch, developing and optimizing signal processing algorithms using Python, C++, and VHDL for target detection in radar data, and building SDR-based workflows with tools like Gnuradio. I also work on hardware-software integration, including C++, VHDL module development, and system-level optimization to improve performance metrics such as range and signal-to-noise ratio. This role spans across embedded systems, algorithm design, and applied AI, giving me hands-on experience with both low-level and high-level engineering workflows.
        </p>


          <p className="tech-heading">Technologies used:</p>
          <div className="tech-chips">
            <span>Python</span>
            <span>PyTorch</span>
            <span>YOLOv8</span>
            <span>OpenCV</span>
            <span>NumPy</span>
            <span>pandas</span>
            <span>C++</span>
            <span>Bash / Shell</span>
            <span>VHDL</span>
            <span>Gnuradio</span>
            <span>Matplotlib</span>
            <span>Embedded Systems</span>
            <span>Hardware-software integration</span>
            <span>Real-time systems</span>
            <span>Algorithm design</span>
            <span>Image Processing</span>
            <span>Software Defined Radio</span>
            <span>Data pipeline scripting</span>
            <span>Data Analysis</span>
            <span>Machine Learning</span>
            <span>Google Colab</span>
            <span>Signal Processing</span>
            <span>System-level design</span>
            <span>Computer-aided design</span>
            
          </div>
        </div>
        <div className="experience-right">
          <img src={Ccorelogo} alt="C-CORE logo" className="experience-logo" />
          
        </div>
      </div>

      {/* SI Leader */}
      <div className="experience-block color2">
        <div className="experience-left">
          <h2>Memorial University of Newfoundland, Faculty of Engineering and Applied Science – SI Leader</h2>
<p className="date-range"><em>Sep 2024 – Dec 2024</em></p>

          <p>
           <p>
  During my time as an SI Leader, I facilitated structured peer sessions for 6 engineering courses, helping 40+ students weekly strengthen their skills in C++, Python, digital logic, circuits, and semiconductor physics. I created practice problems and review walkthroughs, and introduced a fully automated attendance tracking system using Python with pandas and openpyxl to eliminate manual Excel entry — saving 3+ hours per week. This initiative improved administrative accuracy and helped establish a replicable tool for future SI leaders.
</p>


          </p>
          <p className="tech-heading">Technologies used:</p>
          <div className="tech-chips">
            <span>Python</span>
            <span>C++</span>
            <span>pandas</span>
            <span>Matplotlib</span>
            <span>NumPy</span>
            <span>Digital Logic Design</span>
            <span>Circuit Analysis</span>
            <span>openpyxl</span>
            
          </div>
          
        </div>
        <div className="experience-right">
          <img src={SIphoto} alt="Teaching " className="experience-photo" />
          
          
        </div>
      </div>

      {/* VAC Lab */}
      <div className="experience-block color3">
        <div className="experience-left">
         <h2>VAC Lab – Machine Learning Software Developer</h2>
<p className="date-range"><em>Jun 2024 – Aug 2024</em></p>

          <p>
<p>
  Collaborated with researchers at the VAC Lab to develop machine learning pipelines for medical imaging using PyTorch. I used DVC for reproducible training workflows and YAML configuration files to define experiments. I tracked results using MLflow and worked remotely via PuTTY and Bash scripting, running jobs on departmental GPU servers. My role also involved using GitHub, Conda environments, and data formats like JSON to support reproducibility and model tuning in research-grade systems.
</p>


          </p>
          <p className="tech-heading">Technologies used:</p>
          <div className="tech-chips">
            <span>Python</span>
            <span>PyTorch</span>
            <span>MLflow</span>
            <span>YAML</span>
            <span>Git/Github</span>
            <span>Conda</span>
            <span>JSON</span>
            <span>Bash</span>
            <span>Shell Scripting</span>
            <span>PuTTY</span>
            <span>DVC</span>
          </div>
        </div>
        <div className="experience-right">
          <img src={VACLablogo} alt="VAC Lab logo" className="experience-logo" />
          
        </div>
      </div>

      {/* NL Eats */}
      <div className="experience-block color4">
        <div className="experience-left">
          <h2>NL Eats – AI Automation Developer / Project Coordinator</h2>
<p className="date-range"><em>Jan 2024 – Apr 2024</em></p>

          <p>
<p>
  At NL Eats, I led over five AI-powered workflow automation projects for a non-profit. I used Zapier to design integrations and OpenAI’s API to create intelligent Slack bots and email categorization tools. I managed deliverables using Notion and streamlined repetitive manual tasks through scalable low-code pipelines. These solutions were deployed with minimal supervision and significantly reduced admin overhead while making AI tools accessible to non-technical staff.
</p>


          </p>
          <p className="tech-heading">Technologies used:</p>
          <div className="tech-chips">
            <span>OpenAI API</span>
            <span>Zapier</span>
            <span>Notion</span>
          </div>
        </div>
        <div className="experience-right">
          <img src={NLEatslogo} alt="NL Eats logo" className="experience-logo" />
          
        </div>
      </div>

      {/* Vale */}
      <div className="experience-block color5">
        <div className="experience-left">
          <h2>Vale Canada Ltd. – Engineering Co-op Student (Data Analysis)</h2>
<p className="date-range"><em>May 2023 – Aug 2023</em></p>

          <p>
  <p>
  At Vale’s Long Harbour site, I created and maintained preventive maintenance plans for industrial machinery using SAP ECC. I analyzed operational performance data with Excel and delivered weekly insights via PowerPoint presentations. My recommendations on equipment upgrades, based on cost/benefit analysis and downtime records, helped reduce unnecessary spending and increased system uptime by 15%. This role strengthened my skills in technical documentation, scheduling, and industrial data analysis.
</p>


          </p>
          <p className="tech-heading">Technologies used:</p>
          <div className="tech-chips">
            <span>SAP</span>
            <span>Excel</span>
            <span>PowerPoint</span>
            <span>Data Analysis</span>
            <span>Preventive Maintenance</span>
            <span>Technical Writing</span>

          </div>
        </div>
        <div className="experience-right">
          <img src={Valelogo} alt="Vale logo" className="experience-logo" />
          
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
