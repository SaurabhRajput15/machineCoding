import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [todoList] = useState([
    "Learn React",
    "Read a book",
    "Go grocery shopping",
    "Build a project"
  ]);

  // Filtered list based on the search term
  const filteredList = todoList.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Search Tasks</h3>
      
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="todo-list">
        <ul>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
