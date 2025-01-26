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
            top: '30px',
            right: '0',
            height: '100vh',
            width: '500px',
            overflowY: 'auto',
            color: '#EBF5EE',
            pointerEvents: 'auto',
            padding: '20px',
            color: 'grey',
          }}
          className={transitioning ? 'fade-out' : 'fade-in'}
        >
          
          <h1 style={{ marginTop: '20px', color: 'var(--text-color)', fontFamily: "Space Grotesk" }}>Contact Information</h1>
          <p className='info-text'>aarni.i.kivela@gmail.com</p>
          <p className='info-text'>+358 40 964 3044</p>
          
          
        </div>
      )}
    </div>
  );
};

export default Contact;
