
// info.jsx responsible for displaying CV information in a sidebar.

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
      <li className="info-text">
        M.Sc. in Data Analytics, University of Turku (currently ongoing)
      </li>
      <li className="info-text">
        B.Sc. in Computer Science, University of Turku (2022–2025)
      </li>
      <li className="info-text">Military Service, Spring 2022</li>
      <li className="info-text">Matriculation Examination, Helsinki Upper Secondary School of Natural Sciences, Spring 2021</li>
    </ul>


    <h1 className="info-text">Skills</h1>

    <h3 className="info-text">Programming & Data</h3>
    <ul>
      
      <li className="info-text">Python – data analysis, scripting, ML libraries</li>
      <li className="info-text">Java – software development, algorithms</li>
      <li className="info-text">R – statistical modeling, data visualization</li>
      <li className="info-text">SQL – database querying & management</li>
    </ul>

    <h3 className="info-text">Web & DevOps</h3>
    <ul>
      <li className="info-text">JavaScript, React, CSS – front-end development</li>
      <li className="info-text">Unix/Linux – system administration, server maintenance</li>
      <li className="info-text">Git – version control</li>
    </ul>

    <h1 className="info-text">Other Information</h1>
    <ul>
      <li className="info-text">
        Asteriski ry, Server Administrator (2023–present)
        <img src="/resources/icon-asteriski-omg.svg" alt="Asteriski logo" />
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default Info;
