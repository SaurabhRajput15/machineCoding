import React, { useState } from 'react'

const AccordianFun = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
     setIsOpen(!isOpen)
  }

  return (
    <div>
        <div onClick={toggleAccordion} className="accordion-header">
           <h2>{title}</h2>
           <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
            <div className='accordion-content'>
                <h3>{content}</h3>
            </div>
        )}
    </div>
  )
}

export default AccordianFun