import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null); 

  
  const startTimer = () => {
    if (!isRunning) { 
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIsRunning(true); 
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false); 
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setCount(0); 
    setIsRunning(false); 
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current); 
    };
  }, []);

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{count} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
