
// Contact.jsx responsible for displaying the contact information sidebar in the portfolio application.

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
          className={`contact-sidebar ${transitioning ? 'fade-out' : 'fade-in'}`}
        >
          <h1 className="info-text">Contact Information</h1>
          <p className="info-text">aarni.i.kivela@gmail.com</p>
          <p className="info-text">+358 40 964 3044</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
