import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/toDoItem/toDoItem";
import ToDoForm from "./components/toDoForm/toDoForm";

function App() {
  const [todos, setTodos] = useState(["a", "b", "c", "d", "e", "f"]);
  console.log("todos ...", todos);
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((item, index) => {
          return <ToDoItem key={index} item={item} />;
        })}
        <ToDoForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
