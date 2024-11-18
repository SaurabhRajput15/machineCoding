import React, { useState } from "react";

const Counter = () => {
   const initialCount = 0
   const [count, setCount] = useState(initialCount)

   const incrementCount = () => {
     setCount(prevCount => prevCount + 1)
   }

   const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
   }

   const incrementByFive = () => {
    for(let i = 0; i < 5; i++){
        setCount(prevCount => prevCount + 1)
    }
   }

   const reset = () => {
    setCount(initialCount)
   }

    return(
        <div>
          Counter - {count}
          <div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={incrementByFive}>Increment-5</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
    )
}

export default Counter