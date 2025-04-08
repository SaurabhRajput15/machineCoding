import React, { useState } from "react"

const Practical = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return(
        <div>
          <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
          <button>Toggle to {isDarkMode ? "Light Mode" : ""}</button>
        </div>
    )
}

export default Practical