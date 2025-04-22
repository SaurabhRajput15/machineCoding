import React, { useState } from 'react'

const Counter = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const incrementByFive = () => {
    for(let i = 0; i < 5; i++){
      setCount((prevCount) => prevCount + 1)
    }
  }

  return (
    <div style={{textAlign:"center"}}>
      <h3 style={{textAlign:"center", fontWeight:"bolder", fontSize:"30px"}}>Count : {count}</h3>
      <div>
        <button 
          onClick={incrementCount}
          style={{border:"1px solid black", padding:"3px", borderRadius:"3px", margin:"5px", fontWeight:"bold", color:"grey"}}
        >
          Increment
        </button>
        <button 
          onClick={decrementCount}
          style={{border:"1px solid black", padding:"3px", borderRadius:"3px", margin:"5px", fontWeight:"bold", color:"grey"}}
        >
          Decrement
        </button>
        <button 
          onClick={incrementByFive}
          style={{border:"1px solid black", padding:"3px", borderRadius:"3px", margin:"5px", fontWeight:"bold", color:"grey"}}
        >
          Increment-5
        </button>
        <button 
          onClick={() => setCount(initialCount)}
          style={{border:"1px solid black", padding:"3px", borderRadius:"3px", margin:"5px", fontWeight:"bold", color:"grey"}}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter