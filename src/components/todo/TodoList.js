import React, { useState } from 'react'

const TodoList = () => {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const addTodoItem = () => {
    if(input.trim() === "") return
    let item = {
        id:todoList.length + 1,
        text:input.trim(),
        completed:false
    }

    setTodoList((prev) => [...prev, item])
    setInput("")
  }

  const toggleCompleted = (id) => {
    setTodoList(todoList.map(t => {
        if(t.id === id){
            return{
                ...t,
                completed:!t.completed
            }
        }else{
            return t
        }
    }))
  }

  const deleteTodo = (id) => {
      setTodoList(todoList.filter(t => t.id !== id))
  }

  return (
    <div style={{textAlign:"center"}}>
        <h2 style={{fontWeight:"bold", fontSize:"30px", color:"slateblue"}}>Todo List</h2>
        <div>
            <input 
              type='text'
              placeholder='Enter a todo'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{border:"1px solid gray", width:"20%", padding:"5px", borderRadius:"3px", margin:"10px"}}
            />
            <button 
              style={{border:"1px solid gray", padding:"5px", borderRadius:"3px", cursor:"pointer", fontWeight:"bold"}}
              onClick={() => addTodoItem()}
            >
                Add
            </button>
            <ul>
                {todoList.map(t => (
                    <li style={{margin:"5px", listStyle:"none"}} key={t.id}>
                        <input 
                          type='checkbox'
                          checked={t.completed}
                          onChange={() => toggleCompleted(t.id)}
                        />
                        <span 
                          style={{margin:"0px 5px"}}
                          className={t.completed ? 'strikeThrough' : ""}
                        >
                            {t.text}
                        </span>
                        <button 
                          style={{backgroundColor:"red", margin:"0px 5px", padding:"1px", borderRadius:"2px", color:"white"}}
                          onClick={() => deleteTodo(t.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList