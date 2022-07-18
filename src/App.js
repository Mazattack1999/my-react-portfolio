import './App.css';
import {useState} from 'react';

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

// portfolio projects
const projects = [
  {
    name: 'Password Generator',
    tools: 'HTML, CSS, JavaScript',
    color: require('./assets/images/password-generator.png'),
    github: "https://github.com/Mazattack1999/password-generator",
    deploy: "https://mazattack1999.github.io/password-generator/"
  }
]

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const [currentProject, setCurrentProject] = useState(null);
  const [viewingProject, setViewingProject] = useState(false);


  return (
    <>
      {/* Navigation and header */}
      <Nav
      tabs={tabs}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      setViewingProject={setViewingProject}
      ></Nav>

      {/* Main body */}
      <main className="bg-secondary py-2">
        {/* About Me section */}
        {currentTab.name === "About Me" && <About />}

        {/* Portfolio section */}
        {currentTab.name === "Portfolio" && 
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
        )}

        {/* Contact section */}
        {currentTab.name === "Contact Me" && <Contact />}

        {/* Resume section */}
        {currentTab.name === "Resume" && <Resume />}
      </main>
      <Footer />
    </>
  );
}

export default App;
