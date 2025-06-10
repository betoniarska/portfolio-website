
// app.jsx responsible for routing and rendering the main application components, including the main page and the Kandi page.

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main.jsx";
import Kandi from "./Kandi.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Kandi" element={<Kandi />} />
      </Routes>
    </Router>
  );
};

export default App;