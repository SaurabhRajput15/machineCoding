import React from 'react'

const AccordionItem = ({title, content, isOpen, setIsOpen}) => {
  return (
    <div>
        <div 
          className='font-bold p-2 bg-slate-200 shadow-sm flex justify-between cursor-pointer' 
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
            <span>{title}</span>
            <span>{isOpen ? "🔼" : "🔽"}</span>
        </div>
        {isOpen && <div className='p-2'>{content}</div>}
    </div>
  )
}

export default AccordionItem