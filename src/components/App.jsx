import React from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [toDo, setToDo] = React.useState("");
  const [works, setWork] = React.useState([]);

  function changeToDo(event) {
    setToDo(event.target.value);
  }
  function enList() {
    if (toDo.trim()) {
      setWork((prevValue) => [...prevValue, toDo]);
      setToDo("");
    }
  }
  function deleteItem(id) {
    setWork((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeToDo} type="text" value={toDo} />
        <button onClick={enList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {works.map((work, index) => {
            return (
              <ToDoItems
                key={index}
                id={index}
                work={work}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
