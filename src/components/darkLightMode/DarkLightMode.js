import React, {useEffect, useState} from 'react'
import "../../App.css"

const DarkLightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode"
  }, [isDarkMode])

  return (
    <div style={{textAlign:"center"}}>
      <h3 style={{fontWeight:"bolder"}}>{isDarkMode ? "Dark Background" : "Light Background"}</h3>
      <button 
         style={{border:"1px solid black", padding:"3px", borderRadius:"4px", backgroundColor:"yellowgreen", color:"darkcyan", fontWeight:"bold"}}
         onClick={handleToggle}
      >
        Toggle to {isDarkMode ? "Light-Mode" : "Dark-Mode"}
      </button>
    </div>
  )
}

export default DarkLightMode