import React, { useState } from 'react'

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [todoList] = useState([
    "Wake at 5 am",
    "start exercise at 5:30 am",
    "At 7 am learning new Stuff",
    "Eat some healthy breakfast",
    "Go for Work"
  ])

  const filteredList = todoList.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{textAlign:"center"}}>
     <input 
       type='text'
       value={searchTerm}
       onChange={e => setSearchTerm(e.target.value)}
       style={{border:"1px solid gray", marginTop:"10px", width:"25%", padding:"4px", borderRadius:"5px"}}
       placeholder='Search Your Daily Task.'
     />
     <div>
       <ul>
         {filteredList.map((todo) => (
          <li key={todo} style={{fontWeight:"bold", fontSize:"20px"}}>{todo}</li>
       ))}
     </ul>
     </div>
    </div>
  )
}

export default SearchFilter