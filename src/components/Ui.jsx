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
        <div
          style={{
            position: 'fixed',
            zIndex: 1000,
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none',
            border: "30px solid var(--border-color)"
          }}
        >
          <div
            style={{
              position: 'relative',
              color: 'var(--text-color)',
              border: '1px solid #333333',
              padding: '30px',
              flex: 1,
              pointerEvents: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 className="header">Aarni Kivelä</h1>
              <div>
                <button 
                  className="custom-button2" 
                  onClick={toggleTheme}
                  style={{
                    position: 'fixed',
                    bottom: '40px',
                    left: '40px',
                    zIndex: 1050,
                    backgroundColor: 'transparent',
                  }}
                >
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
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
            <div
  style={{
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  }}
>
  <button
    className="custom-button"
    onClick={() =>
      window.open(
        "https://fi.linkedin.com/in/aarni-kivel%C3%A4-425353253",
        "_blank"
      )
    }
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <img
      src="/resources/icon-linkedin-omg.svg"
      alt="LinkedIn Icon"
      style={{
        width: "30px",
        height: "30px",
        filter: "invert(var(--logo-color))",
      }}
    />
  </button>

  <button
    className="custom-button"
    onClick={() =>
      window.open("https://github.com/betoniarska/", "_blank")
    }
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <img
      src="/resources/icon-github-omg.svg"
      alt="GitHub Icon"
      style={{
        width: "30px",
        height: "30px",
        filter: "invert(var(--logo-color))",
      }}
    />
  </button>
</div>

            
          </div>
          
        </div>
      )}
    </>
  );
};

export default UI;
