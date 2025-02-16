import React from "react";

function ToDoItems(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.work}</li>
    </div>
  );
}

export default ToDoItems;
