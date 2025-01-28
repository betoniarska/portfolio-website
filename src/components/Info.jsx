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
  <div className={`cv-sidebar ${transitioning ? 'fade-out' : 'fade-in'}`}>
    <h1 className="info-text">Education</h1>
    <ul>
      <li className="info-text">Computer Science, University of Turku (from autumn 2022)</li>
      <li className="info-text">Military Service (spring 2022)</li>
      <li className="info-text">Matriculation Examination, Helsinki Upper Secondary School of Natural Sciences (spring 2021)</li>
    </ul>

    <h1 className="info-text">Skills</h1>
    <ul>
      <li className="info-text">Java: Proficient++</li>
      <li className="info-text">Python: Proficient</li>
      <li className="info-text">JavaScript: Proficient</li>
      <li className="info-text">Unix/Linux usage/administration</li>
      <li className="info-text">Server management & maintenance</li>
      <li className="info-text">Others: React, CSS, SQL, R, GIS systems</li>
    </ul>

    <h1 className="info-text">Languages</h1>
    <ul>
      <li className="info-text">Finnish: Native</li>
      <li className="info-text">English: Excellent</li>
      <li className="info-text">Swedish: Satisfactory</li>
    </ul>

    <h1 className="info-text">Other Information</h1>
    <ul>
      <li className="info-text">
        Asteriski ry, Server Administrator (2023–2025)
        <img src="/resources/icon-asteriski-omg.svg" alt="Asteriski logo" />
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default Info;
