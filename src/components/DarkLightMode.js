import React, { useState, useEffect } from "react";
import '../App.css'

const DarkLightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="App">
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Toggle to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkLightMode;
