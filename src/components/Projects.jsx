import React from 'react';
import '/style.css';

const Projects = ({ isOpen, transitioning, onToggle }) => {
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
          style={{
            position: 'fixed',
            top: '30px',
            right: '30px',
            bottom: '30px',
            width: 'calc(100vw - 60px)',
            maxWidth: '500px',
            overflowY: 'scroll',
            pointerEvents: 'auto',
            padding: '0px',
            zIndex: 2000,
            boxSizing: 'border-box',
          }}
          className={`fade-container ${transitioning ? 'fade-out' : 'fade-in'}`}
        >

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Discord-chat-bot', '_blank')}
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
            onClick={() => window.open('https://github.com/betoniarska/Discord-chat-bot', '_blank')}
          >
            Murmuration With Three.js
          </button>
          <p className="project-description">Murmuration is a term used to describe the flocking behavior in Starlings. The word murmuration stems from the word ‘murmur’, which is a continuous, low humming sound.  This project is my attempt to mimic murmuration and a for fun experimentation with Three.js and ChatGPT.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Discord-chat-bot', '_blank')}
          >
            Gartic Phone
          </button>
          <p className="project-description">Gartic Phone app which utilizes threads.</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Discord-chat-bot', '_blank')}
          >
            Bachelor's Thesis
          </button>
          <p className="project-description">Coming soon</p>

          <button
            className="custom-button-big"
            onClick={() => window.open('https://github.com/betoniarska/Discord-chat-bot', '_blank')}
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
