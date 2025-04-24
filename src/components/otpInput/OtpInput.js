import React, { useEffect, useRef, useState } from 'react'

const OTP_DIGIT_COUNT = 5

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""))
  const inputRefs = useRef([])

  useEffect(() => {
     inputRefs.current[0]?.focus()
  }, [])

  const handleOnChange = (value, index) => {
    if(isNaN(value)) return;

    // console.log(value)
    const newValue = value.trim()

    const newArr = [...inputArr]
    newArr[index] = newValue.slice(-1)
    setInputArr(newArr)

    newValue && inputRefs.current[index + 1]?.focus()
  }

  const handleOnKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace"){
        inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div style={{textAlign:"center"}}>
        <h2 style={{fontWeight:"bolder", fontSize:"35px", color:"goldenrod"}}>Validata OTP</h2>
        {inputArr.map((input, index) => {
            return(
                <input 
                  key={index} 
                  type='text'
                  value={inputArr[index]}
                  onChange={(e) => handleOnChange(e.target.value, index)}
                  onKeyDown={e => handleOnKeyDown(e, index)}
                  style={{border:"2px solid gray", width:"60px", height:"60px", margin:"3px", fontSize:"35px", textAlign:"center", fontWeight:"bold", padding:"2px", marginTop:"10px", borderRadius:"5px"}}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
            )   
        })}
    </div>
  )
}

export default OtpInput