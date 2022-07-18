import './App.css';
import {useState} from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

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


  return (
    <>
      {/* Navigation and header */}
      <Nav
      tabs={tabs}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      ></Nav>

      {/* Main body */}
      <main className="bg-secondary">
        {currentTab.name === "About Me" && <About></About>}
      </main>
      <Footer />
    </>
  );
}

export default App;
