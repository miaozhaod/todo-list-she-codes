import React from "react";
import "./toDoItem.css";

export default function ToDoItem({ item }) {
  return <div className="todo">{item}</div>;
}
