import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Project from './components/portfolio/Project';

function App() {
  // navigation tabs
  const tabs = [
    {
        name: "About Me",
        link: "/about-me",
    },
    {
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        name: "Contact Me",
        link: "/contact-me"
    },
    {
        name: "Resume",
        link: "/resume"
    }
]
  

  const [currentProject, setCurrentProject] = useState(null);


  return (
    <Router>
      {/* Navigation and header */}
      <Nav
        tabs={tabs}
      ></Nav>

      {/* Main body */}
      <main className="bg-secondary py-2">
        <Routes>
          <Route to="/my-react-portfolio">
            <Route path="" element={<About />} />
            <Route path="about-me" element={<About />} />
            <Route path="portfolio">
              <Route path="" element={<Portfolio currentProject={currentProject} setCurrentProject={setCurrentProject}/>} />
              <Route path=":project" element= {<Project currentProject={currentProject}/>} /> 
            </Route>
            <Route path="contact-me" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
