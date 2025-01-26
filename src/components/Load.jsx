import React, { useEffect, useState } from 'react';
import '/style.css';

const Load = ({ onFinish }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      }}
    >
      <div className="spinner" />
      <p style={{ marginTop: '20px', fontFamily: 'Space Grotesk', fontSize: '18px' }}>
        Loading...
      </p>
      {isButtonVisible && (
        <button
          onClick={onFinish}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontFamily: 'Space Grotesk',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default Load;