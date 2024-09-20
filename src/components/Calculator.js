import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState(''); // Stores the current input
  const [result, setResult] = useState(''); // Stores the result

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value); // Append the clicked value to input
  };

  // Handle equals (=) button click to calculate the result
  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Use eval to calculate the input expression
    } catch (error) {
      setResult('Error'); // Handle invalid expression
    }
  };

  // Handle clearing the input
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
