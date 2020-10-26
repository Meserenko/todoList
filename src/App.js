import React from "react";
import './App.css';
import TodoList from "./components/todoList/todoList";


function App() {
  return (
    <div className="wrapper">
        <header>
            <h1>Todo List</h1>
        </header>
        <TodoList />
    </div>
  );
}

export default App;
