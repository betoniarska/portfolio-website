
// projects.jsx responsible for displaying different projects in a sidebar, allows to navigate to project links providing short descriptions for each project.

import React from 'react';
import '/style.css';
import { useNavigate } from 'react-router-dom';

const Projects = ({ isOpen, transitioning, onToggle }) => {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={onToggle}
        className={`custom-button ${isOpen ? 'open' : ''}`}
        style={{ pointerEvents: 'auto' }}
      >
        Projects
      </button>

      {isOpen && (
        <div
          className={`projects-sidebar ${transitioning ? 'fade-out' : 'fade-in'}`}
        >
          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/portfolio-website', '_blank')}
          >
            Portfolio Website
          </button>

          <p className="project-description">This space odyssey is made With Three.js & React.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Discord-chat-bot', '_blank')}
          >
            Discord Chatbot
          </button>
          <p className="project-description">A Discord chat bot that allows you to converse with the Jedi Grand Master Yoda. Powered by GPT-4.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Murmuration-demo', '_blank')}
          >
            Murmuration With Three.js
          </button>
          <p className="project-description">Murmuration is a term used to describe the flocking behavior in Starlings. The word murmuration stems from the word ‘murmur’, which is a continuous, low humming sound.  This project is my attempt to mimic murmuration and a for fun experimentation with Three.js and ChatGPT.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/hajo-harkkatyo', '_blank')}
          >
            Gartic Phone
          </button>
          <p className="project-description">Gartic Phone app which utilizes threads. Made as a course final project.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/fullstack-4', '_blank')}
          >
            Fullstack part 4
          </button>
          <p className="project-description">Part 4 app for the course: Fullstack open.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/part3-notes-backend', '_blank')}
          >
            Fullstack part 3 - backend
          </button>
          <p className="project-description">Part 3 backend app for the course: Fullstack open.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/olio-ohjelmoinnin_jatkokurssi', '_blank')}
          >
            OOJ
          </button>
          <p className="project-description">All the tasks for the course "Olio-ohjelmoinnin jatkokurssi 2022"</p>

          <button
            className="custom-button-big"
            onClick={() => navigate('/kandi')}
          >
            Bachelor's Thesis
          </button>
          <p className="project-description">View the thesis directly on this site.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/ecological-state-of-lakes', '_blank')}
          >
            Population Center Map
          </button>
          <p className="project-description">Coming soon</p>

        </div>
      )}
    </div>
  );
};

export default Projects;
