import React from 'react';
import '/style.css'; // Ensure styling for animations or custom classes

const Info = ({ isOpen, transitioning, onToggle }) => {
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={onToggle}
        className={`custom-button ${isOpen ? 'open' : ''}`}
        style={{ pointerEvents: 'auto' }}
      >
        Info
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
          className={transitioning ? 'fade-out' : 'fade-in'} // Apply animation class here
        >
          <p>
            placeholder infofofofofofofo
            <br />
            Computer Science
          </p>
        </div>
      )}
    </div>
  );
};

export default Info;
