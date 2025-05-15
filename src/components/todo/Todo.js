import { useState } from "react"

const Todo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) return;
    setList([...list, task]);
    setTask("");
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedList = list.filter((_, index) => index !== indexToDelete);
    setList(updatedList);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditValue(list[index]);
  };

  const handleSaveTask = () => {
    const updatedList = [...list];
    updatedList[editIndex] = editValue;
    setList(updatedList);
    setEditIndex(null);
    setEditValue("");
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "goldenrod", fontWeight: "bolder", fontSize: "30px" }}>Todo List</h3>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        style={{ border: "1px solid gray", width: "25%", padding: "4px", borderRadius: "3px", marginTop: "15px" }}
      />
      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: "#ed752f",
          padding: "4px",
          marginLeft: "10px",
          color: "white",
          fontWeight: "bold",
          borderRadius: "5px"
        }}
      >
        Add Task
      </button>
      <div>
        <ul style={{ listStyle: "none", padding: 0, width: "30%", margin: "20px auto" }}>
          {list.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f8f8f8",
                fontSize: "20px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                padding: "3px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{ flex: 1, padding: "5px", fontSize: "18px" }}
                  />
                  <button onClick={handleSaveTask} style={{ marginLeft: "5px" }}>Save</button>
                  <button onClick={handleCancelEdit} style={{ marginLeft: "5px" }}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{item}</span>
                  <div>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button onClick={() => handleEditTask(index)} style={{ marginLeft: "5px" }}>Edit</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo
