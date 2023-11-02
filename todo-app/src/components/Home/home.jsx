import React, { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import AllTodos from "../AllTodos/AllTodos";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import DeletedTodos from "../DeletedTodos/DeletedTodos";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (inputTask) => {
    if (inputTask !== "") {
      const todoItem = {
        taskName: inputTask,
        id: uuidv4(),
        status: "todo",
      };
      setTodoList((prevList) => [todoItem, ...prevList]);
    }
  };
  return (
    <>
      <InputContainer addTodo={addTodo}></InputContainer>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.taskName}</div>;
      })}
      <nav className="nav-header">
        <ul className="nav-menu">
          <Link className="nav-link" to="/">
            <li>All Tasks</li>
          </Link>
          <Link className="nav-link" to="/about">
            <li>To Do</li>
          </Link>
          <Link className="nav-link" to="/about">
            <li>Completed</li>
          </Link>
          <Link className="nav-link" to="/contact">
            <li>Deleted</li>
          </Link>
        </ul>
      </nav>
      {/*     
      <AllTodos></AllTodos>
      <CompletedTodos></CompletedTodos>
      <DeletedTodos></DeletedTodos> */}
    </>
  );
};

export default Home;
