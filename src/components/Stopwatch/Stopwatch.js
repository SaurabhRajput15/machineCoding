import React, { useState, useEffect } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
     let timer
     if(isRunning){
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
     }

     return () => clearInterval(timer)
  }, [isRunning])

  const formatTime = (time) => {
    let hours = String(Math.floor(time / 3600)).padStart(2, "0")
    let minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0")
    let seconds = String(time % 60).padStart(2, "0")

    return `${hours} ${minutes} ${seconds}`
  }

  return (
    <div style={{textAlign:"center"}}>
      <h3 style={{fontWeight:"bolder", fontSize:"30px"}}>Stopwatch</h3>
      <h4 style={{fontWeight:"bold", fontSize:"25px", color:"gray"}}>{formatTime(time)}</h4>
      <div>
        {!isRunning ? (
          <button 
            onClick={() => setIsRunning(true)} 
            style={{border:"1px solid gray", padding:"3px", borderRadius:"5px", margin:"3px", backgroundColor:"greenyellow", fontWeight:"bold"}}
          >
            Start
          </button>
        ) : (
          <button 
            onClick={() => setIsRunning(false)}
            style={{border:"1px solid gray", padding:"3px", borderRadius:"5px", margin:"3px", backgroundColor:"red", fontWeight:"bold"}}
          >
            Stop
          </button>
        )}
        <button
          style={{border:"1px solid gray", padding:"3px", borderRadius:"5px", margin:"3px", fontWeight:"bold"}}
          onClick={() => {
            setIsRunning(false)
            setTime(0)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch