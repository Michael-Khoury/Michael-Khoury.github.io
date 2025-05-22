import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isAltBackground = location.pathname === '/contact' || location.pathname === '/resume';

  return (
    <div className={`App ${isAltBackground ? 'alt-background' : ''}`}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
