import React from 'react';
import '/style.css';

const Home = ({ isOpen, transitioning, onToggle }) => {

  
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={onToggle}
        className={`custom-button ${isOpen ? 'open' : ''}`}
        style={{ pointerEvents: 'auto' }}
      >
        Home
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            height: '100vh',
            width: '150px',
            overflowY: 'auto',
            padding: '50px',
          }}
          className={transitioning ? 'fade-out' : 'fade-in'}
        >
          <p className="home-text">I am a third-year Computer Science student at the University of Turku, currently working on my bachelor's thesis. I intend to pursue a master's degree in Data Analytics. I am currently searching for a summer job</p>
          <img 
            src="/resources/UTU_logo_EN_RGB2.png" 
            alt="UTU logo" 
            style={{ 
              position: 'absolute',
              bottom: '130px',
              right: '30px',
              width: '200px', 
              height: '80px',
              filter: isOpen ? (getComputedStyle(document.documentElement).getPropertyValue('--logo-color') === '#FFFFFF' ? 'invert(100%)' : 'none') : 'none'
            }} 
            />
        </div>
      )}
    </div>
  );
};

export default Home;
