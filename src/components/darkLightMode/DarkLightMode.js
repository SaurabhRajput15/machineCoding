import React, { useEffect, useState } from "react";
import "../../App.css"

const DarkLightMode = () => {
   const [isDarkMode, setIsDarkMode] = useState(false)

   const toggleTheme = () => {
      setIsDarkMode(!isDarkMode)
   }

   useEffect(() => {
     document.body.className = isDarkMode ? "dark-mode" : "light-mode"
   }, [isDarkMode])

    return(
        <div>
          <h3>{isDarkMode ? "Dark Mode" : "Light Mode"}</h3>
          <button onClick={toggleTheme}>Toggle To {isDarkMode ? "Light": "Dark"}</button>
        </div>
    )
}

export default DarkLightMode