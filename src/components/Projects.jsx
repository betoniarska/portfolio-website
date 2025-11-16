
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
            onClick={() => window.open('https://github.com/betoniarska/Chess-Data-analysis', '_blank')}
          >
            Data-Analysis on Chess Games
          </button>

          <p className="project-description">Descriptive analysis on chess data from games played on chess.com</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Habits-in-the-Finnish-population', '_blank')}
          >
            Data-Analysis on Habits in the Finnish Population
          </button>

          <p className="project-description">Descriptive and explorative analysis on the activities of Finnish population based on a sample</p>


      
          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Grid-approximations', '_blank')}
          >
            Grid Approximations for the course: Probabilistic Programming
          </button>

          <p className="project-description">Exercises for Bayesian Statistics</p>


          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Spinning-Cube', '_blank')}
          >
            ASCII Spinning Cube
          </button>

          <p className="project-description">For fun</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Statistical-Data-Analysis', '_blank')}
          >
            Exrcises of the course: Statistical Data-analysis
          </button>

          <p className="project-description">Jupyter notebooks and data included</p>

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
            onClick={() => window.open('https://urn.fi/URN:NBN:fi-fe2025072979931')}
          >
            Bachelor's Thesis
          </button>
          <p className="project-description">Bachelor's Thesis on the use of Large Language Models for automated program repair and fault localization</p>

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
