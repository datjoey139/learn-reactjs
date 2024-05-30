import React, { useState } from "react";
import TodoList from "../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: "Todo 1", status: "compleded" },
    { id: 2, title: "Todo 2", status: "new" },
    { id: 3, title: "Todo 3", status: "compleded" },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
