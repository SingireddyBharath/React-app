import "./Todos.css";

import React from "react";

const Todos = ({ todoList }) => {
  return (
    <>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.taskName}</div>;
      })}
    </>
  );
};

export default Todos;
