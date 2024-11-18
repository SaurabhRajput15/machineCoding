import React, { useState } from 'react'

const AccordionFun = ({title, content}) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggleAccordion = () => {
    setIsOpen(!isOpen)
   }

  return (
    <div>
        <div onClick={toggleAccordion}>
            <h3>{title}</h3>
            {isOpen ? "-" : "+"}
        </div>
        {isOpen && (
            <p>{content}</p>
        )}
    </div>
  )
}

export default AccordionFun