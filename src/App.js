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
    name: 'Book Bits',
    tools: 'HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, MySQL',
    color: require('./assets/images/book-bits.png'),
    github: "https://github.com/Mazattack1999/book-bits",
    deploy: "https://book-bits-blog.herokuapp.com/"
  },
  {
    name: 'Meditation Buddy',
    tools: 'HTML, CSS, JavaScript, Bulma.io',
    color: require('./assets/images/meditation-buddy.png'),
    github: "https://github.com/Mazattack1999/meditation-buddy",
    deploy: "https://mazattack1999.github.io/meditation-buddy/"
  },
  {
    name: 'Tech Blog',
    tools: 'CSS, JavaScript, Node.js, MySQL',
    color: require('./assets/images/tech-blog.png'),
    github: "https://github.com/Mazattack1999/tech-blog",
    deploy: "https://safe-meadow-45436.herokuapp.com/"
  },
  {
    name: 'Weather Dashboard',
    tools: 'HTML, CSS, JavaScript, Moment.js',
    color: require('./assets/images/weather-dashboard.png'),
    github: "https://github.com/Mazattack1999/weather-dashboard",
    deploy: "https://mazattack1999.github.io/weather-dashboard/"
  },
  {
    name: 'Work Day Scheduler',
    tools: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, Font Awesome',
    color: require('./assets/images/calendar.png'),
    github: "https://github.com/Mazattack1999/calendar",
    deploy: "https://mazattack1999.github.io/calendar/"
  },
  {
    name: 'Code Quiz',
    tools: 'HTML, CSS, JavaScript',
    color: require('./assets/images/code-quiz.png'),
    github: "https://github.com/Mazattack1999/code-quiz",
    deploy: "https://mazattack1999.github.io/code-quiz/"
  },
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
