
// home.jsx responsible for displaying the home page content.
// default scene for the portfolio

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
            width: '300px',
            overflowY: 'auto',
            padding: '50px',
          }}
          className={transitioning ? 'fade-out' : 'fade-in'}
        >
          <p className="home-text">
            I am a third-year Computer Science student at the University of Turku, 
            currently working on my bachelor's thesis. I intend to pursue a master's degree 
            in Data Analytics. I am currently searching for a summer job.
          </p>
            <img 
              src="/resources/logo-UTU-omg.svg" 
              alt="UTU logo" 
              className="utu-logo" 
            />
        </div>
      )}
    </div>
  );
};

export default Home;
