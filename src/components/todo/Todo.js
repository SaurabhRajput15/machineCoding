import React, { useState } from 'react';
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (todo.trim()) {
      setTodoList([...todoList, todo]);
      setTodo(""); // Clear input after adding task
    }
  };

  // Function to delete a task
  const deleteItem = (index) => {
    const deleteValue = todoList.filter((_, i) => i !== index);
    setTodoList(deleteValue);
  };

  // Function to enable editing mode
  const enableEdit = (index) => {
    setEditingIndex(index);
    setEditValue(todoList[index]); // Set initial value for edit
  };

  // Function to update a task
  const updateItem = () => {
    const updatedList = todoList.map((item, i) =>
      i === editingIndex ? editValue : item
    );
    setTodoList(updatedList);
    setEditingIndex(null); // Exit editing mode
    setEditValue(""); // Clear edit input
  };

  return (
    <div>
      <h3>Daily Task</h3>
      <div className="text-input">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todo-list">
        <ul>
          {todoList.map((item, index) => (
            <li key={index} className="todo-list-item">
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={updateItem}>Update</button>
                </div>
              ) : (
                <div>
                  <h4>{item}</h4>
                  <div>
                    <button onClick={() => enableEdit(index)}>Edit</button>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
