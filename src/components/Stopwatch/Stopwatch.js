import React, { useEffect, useState, useRef } from 'react'

const Stopwatch = () => {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef()

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const startTimer = () => {
    if(!isRunning){
        intervalRef.current = setInterval(tick, 1000)
    }
    setIsRunning(true)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
    setIsRunning(false)
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    setIsRunning(false)
    setCount(0)
  }

  useEffect(() => {
    return () => {
        clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
        Watch - {count}
        <div>
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch