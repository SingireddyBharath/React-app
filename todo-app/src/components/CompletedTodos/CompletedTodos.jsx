import React from "react";

const CompletedTodos = ({ todoList }) => {
  
  return (
    <>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.taskName}</div>;
      })}
    </>
  );
};

export default CompletedTodos;
