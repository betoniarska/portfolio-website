
// main.jsx responsible for initializing the Three.js scene, handling resizing, and updating the theme based on user interactions.
// main portfolio scene

import React, { useEffect } from "react";
import UI from "./Ui.jsx";
import { initScene, updateSceneTheme } from "../threejs/main.js";

const Main = () => {
  useEffect(() => {
    console.log("Initializing Three.js scene");
    initScene("threejs-container");

    const handleResize = () => {
      const container = document.getElementById("threejs-container");
      if (container) {
        container.style.width = `${window.innerWidth}px`;
        container.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ui" style={{ position: "relative", zIndex: 1000, overflow: "hidden", height: "100vh", width: "100vw" }}>
      <div id="threejs-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />
      <UI onThemeChange={(isDarkMode) => updateSceneTheme(isDarkMode)} />
    </div>
  );
};

export default Main;
