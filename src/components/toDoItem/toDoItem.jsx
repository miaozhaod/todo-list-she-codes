import React, { useState } from "react";
import "./toDoItem.css";

export default function ToDoItem({ index, item, todos, setTodos }) {
  const [isChecked, setIsChecked] = useState(item.isComplete);

  return (
    <div className="todo">
      <h2 className={`${isChecked ? "complete" : ""}`}>{item.text}</h2>
      <div className="options">
        <input
          type="checkbox"
          name="checkbox"
          value={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            setTodos([...item, { isComplete: isChecked }]);
          }}
        />
        <button
          onClick={() => {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
