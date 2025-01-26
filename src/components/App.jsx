import React, { useEffect } from 'react';
import UI from './Ui.jsx';
import { initScene, updateSceneTheme } from '../threejs/main.js';

const App = () => {
  useEffect(() => {
    console.log("Initializing Three.js scene");
    initScene('threejs-container');
  }, []);

  return (
    <div
      className="ui"
      style={{
        position: 'relative',
        zIndex: 1000,
        overflowY: 'auto',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div
        id="threejs-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>

      
      <UI onThemeChange={(isDarkMode) => updateSceneTheme(isDarkMode)} />
    </div>
  );
};

export default App;
