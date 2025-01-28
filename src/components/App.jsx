import React, { useEffect } from "react";
import UI from "./Ui.jsx";
import { initScene, updateSceneTheme } from "../threejs/main.js";

const App = () => {
  useEffect(() => {
    console.log("Initializing Three.js scene");
    initScene("threejs-container");

    // Handle window resizing
    const handleResize = () => {
      const container = document.getElementById("threejs-container");
      if (container) {
        container.style.width = `${window.innerWidth}px`;
        container.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="ui"
      style={{
        position: "relative",
        zIndex: 1000,
        overflow: "hidden", // Ensure no unwanted scrolling
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        id="threejs-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>

      <UI onThemeChange={(isDarkMode) => updateSceneTheme(isDarkMode)} />
    </div>
  );
};

export default App;
