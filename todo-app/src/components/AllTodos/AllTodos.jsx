import React from "react";

const AllTodos = ({ todoList }) => {
  return (
    <>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.taskName}</div>;
      })}
    </>
  );
};

export default AllTodos;
