import React, { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [addTodos, setAddTodos] = useState([])

    const addTodo = () => {
        if (todo.trim()) {
            setAddTodos([...addTodos, todo]); 
            setTodo(""); 
        }
    }

    const deleteTodo = (indexToDelete) => {
        setAddTodos(addTodos.filter((_, index) => index !== indexToDelete));
    };

    return(
        <div>
           <input 
              type="text" 
              value={todo} 
              onChange={e => setTodo(e.target.value)} 
           />
           <button onClick={addTodo}>Add Todo</button>
           <div>
              <ul>
                {
                    addTodos.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    ))
                }
              </ul>
           </div>
        </div>
    )
}

export default TodoList