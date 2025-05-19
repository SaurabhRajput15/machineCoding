import React, { useState } from 'react'

const ChipsInput = () => {
  const [inputText, setInputText] = useState('')
  const [chips, setChips] = useState([])

  const handleKeyDown = (e) => {
    if(e.key === "Enter" && inputText.trim() !== ""){
       setChips((prev) => [...prev, inputText])
       setInputText("")
    }
  }

  const handleDeleteChips = (index) => {
    let copyChips = [...chips]
    copyChips.splice(index, 1)
    setChips(copyChips)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{color:"darkgoldenrod", fontWeight:"bold", fontSize:"30px"}}>Chips Input</h2>
      <input 
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        style={{padding:"5px 10px", border:"1px solid gray"}}
      />
      <div style={{display:"flex", justifyContent:"center"}}>
        {chips.map((chip, index) => (
          <div 
            style={{backgroundColor:"gray", margin:"5px", borderRadius:"5px", color:"white", fontWeight:"bold", padding:"5px"}}
            key={index}
            >
              {chip}
              <button 
                style={{margin:"0 5px", color:"red"}}
                onClick={() => handleDeleteChips(index)}
              >
                  X
                </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChipsInput