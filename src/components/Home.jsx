
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
            I am a Bachelor of Computer Science graduate from the University of Turku, currently pursuing a Master's degree in Data Analytics. I am exploring opportunities for internships and professional growth in the field.
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
