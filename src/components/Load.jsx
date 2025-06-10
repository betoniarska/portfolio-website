
// load.jsx responsible for displaying the loading screen.

import React, { useEffect, useState } from 'react';
import '/style.css';

const Load = ({ onFinish }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark

  useEffect(() => {
    const storedTheme = localStorage.getItem('isDarkMode');
    if (storedTheme !== null) {
      setIsDarkMode(JSON.parse(storedTheme));
    }

    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleProceed = () => {
    setIsFadingOut(true); 
    setTimeout(() => {
      onFinish();
    }, 1000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: isDarkMode ? '#121212' : '#C9C9C9',
        color: isDarkMode ? '#C9C9C9' : '#121212',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 1s ease',
      }}
    >
      {!isTextVisible && <div className="loader" />}
      
      {isTextVisible && (
        <p
          style={{
            marginTop: '20px',
            fontFamily: 'Space Grotesk',
            fontSize: '18px',
            animation: 'fadeIn 2s ease-out forwards',
          }}
        >
          Aarni Kivelä - CV / Portfolio
        </p>
      )}
      
      {isTextVisible && (
        <button
          onClick={handleProceed}
          className="custom-button3"
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default Load;
