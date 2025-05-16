// pages/Projects.js;
import './Projects.css';



function Projects() {

  return (
  <div className="page-container no-padding">
  <div className="projects-header ">
  <h1 className="greeting">Projects</h1>
  <p className="typed-subline">
    A collection of projects I’ve built, designed, or contributed to during university, work terms, and personal time.
  </p>
</div>


      <div className="project-block color1 ">
        <h2>UNITY TOWER DEFENSE GAME</h2>
        <p>
          Developed a polished 2D tower defense game in Unity with two teammates as part of a software design course during my fifth of eight academic semesters in my computer engineering degree.
          Features include an endless wave system, diverse enemy types with unique behaviors, and several strategically distinct towers with powerful abilities (e.g., splash damage, burn effects, curses).
          Includes a boss wave, main menu system, and smooth launch flow with multiple completed releases to date.
          Recognized as one of the top 2 projects in the course in the Winter 2025 semester for its functionality, gameplay depth, and clean architecture.  <br /><br />

          Note: This github repository is private to protect ongoing development, with plans to continue improving and potentially market the game. A demo or walkthrough is available upon request.
        </p>
        <p className="tech-heading">Skills or Technologies I used:</p>
        <div className="tech-chips">
          <span>C#</span>
          <span>Unity</span>
          <span>Git/GitHub</span>
          <span>.NET Development</span>
        </div>
                <img 
  src={require('../assets/tower-defense.png')} 
  alt="Tower Defense Screenshot" 
  className="project-screenshot"
/>
      </div>
      

      <div className="project-block color2 ">
        <h2>PORTFOLIO WEBSITE</h2>
        <p>
          This very website! Built from scratch with animations, typewriter effects, responsive sections, and a clean scroll-linked navigation bar using React.
        </p>
        <p className="tech-heading">Skills or Technologies I used:</p>
        <div className="tech-chips">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>REST API</span>
          <span>MongoDB</span>
          <span> JSX</span>
          <span> XML</span>
          <span>CSS</span>
          <span>React Router</span>
        </div>
        <a
  href="https://github.com/Michael-Khoury/my-portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="github-button"
>
  
 🔗 Check out the GitHub repository! 
</a>

      </div>

      <div className="project-block color3">
        <h2>PYTHON ATTENDANCE TRACKER</h2>
        <p>
          Self-initiated during a work term to streamline attendance tracking for myself, my supervisor, and future SI Leaders.
          Automated tracking for over 50 students per session using Python with pandas and openpyxl.
          Saved approximately 3–4 hours per week by eliminating manual Excel entry, reducing overall admin workload by 80%.
          Enabled dynamic session logging and error-proof Excel output, leading to more consistent and reliable record-keeping across the semester.
        </p>
        <p className="tech-heading">Skills or Technologies I used:</p>
        <div className="tech-chips">
          <span>Python</span>
          <span>pandas</span>
          <span>openpyxl</span>
        </div>
        <a
  href="https://github.com/Michael-Khoury/Python-Attendance-Tracker"
  target="_blank"
  rel="noopener noreferrer"
  className="github-button"
>
  🔗 Check out the GitHub repository! 
</a>

      </div>

      <div className="project-block color4 ">
        <h2>ML EXPERIMENT TRACKER</h2>
        <p>
          Developed a Python script for integrating data version control (DVC) into machine learning workflows during my part time work as a Machine Learning Software Developer at VAC Lab.
          Achieved reproducible and efficient ML experiments using YAML configurations and MLflow.
          Collaborated with a research team to improve accuracy for medical imaging datasets.  <br /><br />
          Note: This project is based on professional work and thus the GitHub repository cannot be shared publicly due to confidentiality.
        </p>
        <p className="tech-heading">Skills or Technologies I used:</p>
        <div className="tech-chips">
          <span>Python</span>
          <span>PyTorch</span>
          <span>DVC</span>
          <span>MLflow</span>
          <span>YAML</span>
          <span> Git/ github</span>
          <span>Conda</span>
          <span>JSON</span>
          <span>Bash</span>
          <span>Shell Scripting</span>
        </div>
      </div>

      <div className="project-block color5 ">
        <h2>CAR UI AND PROXIMITY SENSOR</h2>
        <p>
          Designed a Python-based UI mimicking modern car features with an advanced proximity sensor system using Arduino as part of a first-year introduction to python programming course.
          Enhanced driver safety by integrating real-time sensor data visualization.
        </p>
        <p className="tech-heading">Skills or Technologies I used:</p>
        <div className="tech-chips">
          <span>Python</span>
          <span>Arduino</span>
        </div>

              <a
  href="https://github.com/Michael-Khoury/Car-UI-and-Proximity-Sensor"
  target="_blank"
  rel="noopener noreferrer"
  className="github-button"
>
  🔗 Check out the GitHub repository! 
</a>
      </div>


    </div>
  );
}

export default Projects;
