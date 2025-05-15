import React, { useState } from 'react'

const CounterTwo = () => {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState(0)

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value)
    setUserInput(isNaN(value) ? 0 : value)
  }

  const incrementByInput = () => {
    setCount((prevCount) => prevCount + userInput)
  }

  const decrementByInput = () => {
    setCount((prevCount) => prevCount - userInput)
  }

  return (
    <div>
        <input 
          type='number'
          value={userInput}
          onChange={handleInputChange}
        />
        <button onClick={incrementByInput}>Increment By Input</button>
        <button onClick={decrementByInput}>Decrement By Input</button>
        <h3>Count - {count}</h3>
    </div>
  )
}

export default CounterTwo