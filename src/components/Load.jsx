import React, { useEffect, useState } from 'react';
import '/style.css';

const Load = ({ onFinish }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 3000);

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
        backgroundColor: '#121212',
        color: '#EBF5EE',
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
          className="custom-button"
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default Load;
