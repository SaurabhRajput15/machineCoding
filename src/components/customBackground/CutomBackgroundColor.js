import React, { useState } from 'react'

const CustomBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")

  const changeColor = () => {
     const randomColor = getRandomColor()
     setBackgroundColor(randomColor)
  }

  const getRandomColor = () => {
    let letter = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
      color += letter[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
  }

  return (
    <div style={{textAlign:"center", backgroundColor:backgroundColor, height:"100vh"}}>
      <button 
        onClick={changeColor}
        style={{border:"1px solid black", marginTop:"10px", padding:"5px", backgroundColor:"goldenrod"}}
      >
        Custom Background Color
      </button>
    </div>
  )
}

export default CustomBackgroundColor