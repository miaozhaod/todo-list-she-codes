import React, { useState } from "react";

export default function ToDoForm({ todos, setTodos }) {
  const [newTodo, setNewToDo] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setTodos([...todos, { text: newTodo }]);
        setNewToDo("");
      }}
    >
      <input
        type="text"
        placeholder="Add a todo item..."
        value={newTodo}
        onChange={e => {
          setNewToDo(e.target.value);
        }}
      />
    </form>
  );
}
