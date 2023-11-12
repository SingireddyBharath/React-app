import React, { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { v4 as uuidv4 } from "uuid";
import { Tab, Tabs } from "react-bootstrap";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import AllTodos from "../AllTodos/AllTodos";

import "./home.css";
import Todos from "../Todos/Todos";
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
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="allTodos"
          id="todo-nav"
          className="todo-nav"
          justify
        >
          <Tab eventKey="allTodos" title="All Todods">
            <AllTodos todoList={todoList} />
          </Tab>
          <Tab eventKey="todos" title="Todos">
            <Todos todoList={todoList} />
          </Tab>
          <Tab eventKey="completed" title="Completed">
            <CompletedTodos todoList={todoList} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
