import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState('');
  const [todoList, setTodolist] = useState([
    'Wake up at 6 AM',
    'Go for a walk',
    'Prepare breakfast',
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodos = () => {
    if (todos.trim() === '') return; // Prevent adding empty todos
    setTodolist([...todoList, todos.trim()]);
    setTodos('');
  };

  const deleteTodoHandler = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodolist(updatedList);
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setEditText(todoList[index]); // Set the current todo text for editing
  };

  const updateTodoHandler = () => {
    if (editText.trim() === '') return; // Prevent empty updates
    const updatedList = [...todoList];
    updatedList[currentIndex] = editText; // Update the specific todo
    setTodolist(updatedList);
    setIsEditing(false); // Exit editing mode
    setCurrentIndex(null);
    setEditText('');
  };

  return (
    <div>
      <h1 className="font-bold text-lg">Todo</h1>
      <div>
        <input
          type="text"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          className="border border-gray-400 w-[30%] rounded-sm py-1 mt-5"
          placeholder="Add your todos"
        />
        <button
          className="bg-green-500 p-1 px-2 mx-2 rounded-md text-white font-semibold"
          onClick={addTodos}
        >
          Add Todos
        </button>
      </div>
      <div className="flex justify-center flex-row mt-4">
        {
          <ul>
            {todoList.map((todo, index) => (
              <li
                className="border border-gray-500 w-96 text-center mr-32 mt-2 py-1 text-gray-500 font-semibold rounded-sm flex justify-between px-1"
                key={index}
              >
                {isEditing && currentIndex === index ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border border-gray-400 rounded-sm py-1 px-2 w-[70%]"
                  />
                ) : (
                  todo
                )}
                <div>
                  {isEditing && currentIndex === index ? (
                    <button
                      className="mr-2 bg-blue-500 text-white p-1 px-2 rounded-md"
                      onClick={updateTodoHandler}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="mr-2"
                        onClick={() => deleteTodoHandler(index)}
                      >
                        ❌
                      </button>
                      <button
                        className="bg-yellow-500 text-white p-1 px-2 rounded-md"
                        onClick={() => startEditing(index)}
                      >
                        ✏
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Todo;
