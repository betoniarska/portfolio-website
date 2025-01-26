import React from 'react';

import '/style.css';

const Contact = ({ isOpen, transitioning, onToggle }) => {
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={onToggle}
        className={`custom-button ${isOpen ? 'open' : ''}`}
        style={{ pointerEvents: 'auto' }}
      >
        Contact
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
            color: '#EBF5EE',
            pointerEvents: 'auto',
            padding: '20px',
            color: 'grey',
          }}
          className={transitioning ? 'fade-out' : 'fade-in'}
        >
          
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '30px',

              display: 'flex',
              gap: '10px',
            }}
          >
            <button
              className="custom-button"
              onClick={() => window.open('https://fi.linkedin.com/in/aarni-kivel%C3%A4-425353253', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img 
                src="/resources/linkedin-icon2.png" 
                alt="LinkedIn Icon" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  filter: 'invert(1)',
                }} 
              />
              LinkedIn
            </button>

            <button
              className="custom-button"
              onClick={() => window.open('https://github.com/betoniarska/', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img 
                src="/resources/github-icon-lg.png" 
                alt="GitHub Icon" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  filter: 'invert(1)',
                }} 
              />
              GitHub
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
