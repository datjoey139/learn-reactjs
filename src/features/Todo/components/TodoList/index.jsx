import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList }) {
  const handleTodoClick = (todo, idx) =>{
    if(!onTodoClick) return;

    onTodoClick(todo, idx);
  }
  
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            compleded: todo.status === "compleded",
          })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
