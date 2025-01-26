import React from 'react';
import '/style.css';

const Info = ({ isOpen, transitioning, onToggle }) => {
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={onToggle}
        className={`custom-button ${isOpen ? 'open' : ''}`}
        style={{ pointerEvents: 'auto' }}
      >
        CV
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            height: '100vh',
            width: '500px',
            overflowY: 'auto',
            color: '#EBF5EE',
            pointerEvents: 'auto',
            padding: '20px',
            zIndex: 10,
            marginTop: "30px",
            marginRight: "30px",
            
            boxSizing: 'border-box',
          }}
          className={transitioning ? 'fade-out' : 'fade-in'}
        >
          
          <h1 style={{ marginTop: '20px', color: 'var(--text-color)', fontFamily: "Space Grotesk"}}>Education</h1>
          <ul className="info-text" style={{ marginLeft: '-25px' }}>
            <li>Computer Science, University of Turku (from autumn 2022)</li>
            <li>Military Service (spring 2022)</li>
            <li>Matriculation Examination, Helsinki Upper Secondary School of Natural Sciences (spring 2021)</li>
          </ul>
          
          <h1 style={{ marginTop: '20px', color: 'var(--text-color)', fontFamily: "Space Grotesk" }}>Skills</h1>
          <ul className="info-text" style={{ marginLeft: '-25px' }}>
            <li>Java: Proficient++</li>
            <li>Python: Proficient</li>
            <li>JavaScript: Proficient</li>
            <li>Unix/Linux usage/administration</li>
            <li>Server management & maintenance</li>
            <li>Others: React, CSS, SQL, R, GIS systems</li>
          </ul>
          
          <h1 style={{ marginTop: '20px', color: 'var(--text-color)', fontFamily: "Space Grotesk" }}>Languages</h1>
          <ul className="info-text" style={{ marginLeft: '-25px' }}>
            <li>Finnish: Native</li>
            <li>English: Excellent</li>
            <li>Swedish: Satisfactory</li>
          </ul>
          
          <h1 style={{ marginTop: '20px', color: 'var(--text-color)', fontFamily: "Space Grotesk" }}>Other Information</h1>
            <ul className="info-text" style={{ marginLeft: '-25px' }}>
              <li>
                Asteriski ry, Server Administrator (2023–2025)
                <img 
                  src="/resources/icon-asteriski-omg.svg" 
                  alt="Asteriski logo" 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    filter: 'invert(var(--logo-color))',
                    verticalAlign: 'middle',
                    marginLeft: '10px', 
                  }} 
                />
              </li>
            </ul>


          
          
          
        </div>
      )}
    </div>
  );
};

export default Info;
