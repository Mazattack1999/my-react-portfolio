import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';

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
  
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const [currentProject, setCurrentProject] = useState(null);
  const [viewingProject, setViewingProject] = useState(false);


  return (
    <Router>
      {/* Navigation and header */}
      <Nav
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setViewingProject={setViewingProject}
      ></Nav>

      {/* Main body */}
      <main className="bg-secondary py-2">
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/portfolio">
            <Route path="" element={<Portfolio currentProject={currentProject} setCurrentProject={setCurrentProject}/>} />
            <Route path=":project" element= {<Project currentProject={currentProject}/>} /> 
          </Route>
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          
        </Routes>



        {/* About Me section */}
        {/* {currentTab.name === "About Me" && <About />} */}

        {/* Portfolio section */}
        {/* {currentTab.name === "Portfolio" && 
        (!viewingProject ? 
        <Portfolio
        setCurrentProject={setCurrentProject}
        setViewingProject={setViewingProject}
        projects={projects}
        /> 
        : 
        <Project 
        currentProject={currentProject}
        />
        )} */}

        {/* Contact section */}
        {/* {currentTab.name === "Contact Me" && <Contact />} */}

        {/* Resume section */}
        {/* {currentTab.name === "Resume" && <Resume />} */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
