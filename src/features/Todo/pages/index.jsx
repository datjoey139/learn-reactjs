import React from "react";
import PropTypes from "prop-types";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    { id: 1, title: "Todo 1", completed: true },
    { id: 2, title: "Todo 2", completed: false },
    { id: 3, title: "Todo 3", completed: false },
  ];
  return (
    <div>
      <h3>Todo List</h3>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default TodoFeature;
