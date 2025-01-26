import React, { useState } from 'react';
import Load from './Load';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';
import { updateSceneTheme } from '../threejs/main';

const UI = () => {
  const [activeSidebar, setActiveSidebar] = useState('home');
  const [sidebarTransitioning, setSidebarTransitioning] = useState(false); // Sidebar-specific transition state
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeTransitioning, setThemeTransitioning] = useState(false); // Theme-specific transition state

  const toggleSidebar = (sidebarName) => {
    if (activeSidebar === sidebarName) return;
    setSidebarTransitioning(true); // Trigger the sidebar transition
    setTimeout(() => {
      setActiveSidebar(sidebarName);
      setSidebarTransitioning(false); // Reset the sidebar transition after delay
    }, 500);
  };

  const handleFinishLoading = () => {
    setLoading(false);
  };

  const toggleTheme = () => {
    if (themeTransitioning) return; // Prevent triggering theme toggle if already transitioning
    
    setThemeTransitioning(true); // Trigger the theme transition
    
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    const htmlElement = document.documentElement;
    htmlElement.classList.add('fade-transition');
    htmlElement.setAttribute('data-theme', newMode ? 'dark' : 'light');

    updateSceneTheme(newMode);

    setTimeout(() => {
      htmlElement.classList.remove('fade-transition');
      setThemeTransitioning(false); // Reset the theme transition after delay
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
              padding: '10px',
              flex: 1,
              pointerEvents: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 className="header">Aarni Kivelä</h1>
              <div>
                <button 
                  className="custom-button" 
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
              transitioning={sidebarTransitioning} // Pass sidebar-specific transitioning state
              onToggle={() => toggleSidebar('home')}
            />
            <Info
              isOpen={activeSidebar === 'info'}
              transitioning={sidebarTransitioning} // Pass sidebar-specific transitioning state
              onToggle={() => toggleSidebar('info')}
            />
            <Projects
              isOpen={activeSidebar === 'projects'}
              transitioning={sidebarTransitioning} // Pass sidebar-specific transitioning state
              onToggle={() => toggleSidebar('projects')}
            />
            <Contact
              isOpen={activeSidebar === 'contact'}
              transitioning={sidebarTransitioning} // Pass sidebar-specific transitioning state
              onToggle={() => toggleSidebar('contact')}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UI;
