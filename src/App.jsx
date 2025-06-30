import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);

  const inputRef = useRef();

  const [showNewTask, setShowNewTask] = useState(false);

  const handleAdd = () => {
    const text = inputRef.current.value;
    const newItem = { status: false, text };
    if (!newItem.text) return;
    setShowNewTask(false);
    setArray((prev) => [...prev, newItem]);
    inputRef.current.value = "";
  };

  const handleDone = (index) => {
    const newArray = [...array];
    newArray[index].status = !newArray[index].status;
    setArray(newArray);
  };

  const handleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleNewTask = () => {
    setShowNewTask((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <div className="details-container">
        <ul>
          {array.map(({ status, text }, index) => {
            return (
              <div className="task-container" key={index}>
                <li className={status ? "done" : ""}>{text}</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="icon"
                  onClick={() => handleDone(index)}
                >
                  <path
                    fill="#aa78dc"
                    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="icon"
                  onClick={() => handleDelete(index)}
                >
                  <path
                    fill="#ff5050"
                    d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </div>
            );
          })}
        </ul>
        <button onClick={handleNewTask}>New Task</button>
      </div>
      {showNewTask && (
        <div className="newTask-container">
          <input ref={inputRef} />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}
    </div>
  );
}

export default App;
