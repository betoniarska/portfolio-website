import React, { useState } from 'react';
import Load from './Load';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';
import { updateSceneTheme } from '../threejs/main';

const UI = () => {
  const [activeSidebar, setActiveSidebar] = useState('home');
  const [sidebarTransitioning, setSidebarTransitioning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeTransitioning, setThemeTransitioning] = useState(false);

  const toggleSidebar = (sidebarName) => {
    if (activeSidebar === sidebarName) return;
    setSidebarTransitioning(true);
    setTimeout(() => {
      setActiveSidebar(sidebarName);
      setSidebarTransitioning(false);
    }, 500);
  };

  const handleFinishLoading = () => {
    setLoading(false);
  };

  const toggleTheme = () => {
    if (themeTransitioning) return;

    setThemeTransitioning(true);

    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    const htmlElement = document.documentElement;
    htmlElement.classList.add('fade-transition');
    htmlElement.setAttribute('data-theme', newMode ? 'dark' : 'light');

    updateSceneTheme(newMode);

    setTimeout(() => {
      htmlElement.classList.remove('fade-transition');
      setThemeTransitioning(false);
    }, 1000);
  };

  return (
    <>
      {loading && <Load onFinish={handleFinishLoading} />}
      {!loading && (
        <div className="ui-container">
          <div className="ui-inner">
            <div className="ui-header">
              <h1 className="header">Aarni Kivelä</h1>
            </div>

            <Home
              isOpen={activeSidebar === 'home'}
              transitioning={sidebarTransitioning}
              onToggle={() => toggleSidebar('home')}
            />
            <Info
              isOpen={activeSidebar === 'info'}
              transitioning={sidebarTransitioning}
              onToggle={() => toggleSidebar('info')}
            />
            <Projects
              isOpen={activeSidebar === 'projects'}
              transitioning={sidebarTransitioning}
              onToggle={() => toggleSidebar('projects')}
            />
            <Contact
              isOpen={activeSidebar === 'contact'}
              transitioning={sidebarTransitioning}
              onToggle={() => toggleSidebar('contact')}
            />

            
            <div className="social-buttons">
              <button
                className="custom-button2"
                onClick={() =>
                  window.open(
                    "https://fi.linkedin.com/in/aarni-kivel%C3%A4-425353253",
                    "_blank"
                  )
                }
              >
                <img
                  src="/resources/icon-linkedin-omg.svg"
                  alt="LinkedIn Icon"
                  className="social-icon"
                />
              </button>
              <button
                className="custom-button3"
                onClick={() => window.open("https://github.com/betoniarska/", "_blank")}
              >
                <img
                  src="/resources/icon-github-omg.svg"
                  alt="GitHub Icon"
                  className="social-icon"
                />
              </button>
            </div>

            
            <button className="theme-button" onClick={toggleTheme}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UI;
