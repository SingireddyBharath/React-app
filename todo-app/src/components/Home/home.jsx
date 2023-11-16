import React, { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { v4 as uuidv4 } from "uuid";
import { Tab, Tabs } from "react-bootstrap";
import AllTodos from "../AllTodos/AllTodos";
import "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("allTodos");
  const [todoList, setTodoList] = useState([]);
  const todoArray = todoList.filter((todoItem) => todoItem.status === "todo");
  const completedTodoList = todoList.filter(
    (todoItem) => todoItem.status !== "todo"
  );
  console.log("todo list ", todoList);
  console.log("active tab", activeTab);
  const addTodo = (inputTask) => {
    if (inputTask !== "") {
      const capitalizedTask =
        inputTask.charAt(0).toUpperCase() + inputTask.slice(1);
      const todoItem = {
        taskName: capitalizedTask,
        id: uuidv4(),
        status: "todo",
      };
      setTodoList((prevList) => [todoItem, ...prevList]);
    }
  };
  const deleteTodo = (taskId) => {
    console.log("deleting todo", taskId);
    setTodoList((prevList) =>
      prevList.filter((todoItem) => todoItem.id !== taskId)
    );
  };
  const updateTodo = (taskId) => {
    console.log("updating todo", taskId);
    setTodoList((prevList) =>
      prevList.map((todoItem) => {
        if (todoItem.id === taskId) {
          let newStatus = todoItem.status === "todo" ? "completed" : "todo";
          return { ...todoItem, status: newStatus };
        }
        return todoItem;
      })
    );
  };
  return (
    <>
      <InputContainer addTodo={addTodo}></InputContainer>
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="allTodos"
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
          id="todo-nav"
          className="todo-nav"
          justify
        >
          <Tab
            eventKey="allTodos"
            title={<span className="tab-title">All Todos</span>}
          >
            <AllTodos
              todoList={todoList}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </Tab>
          <Tab
            eventKey="todos"
            title={<span className="tab-title">Todos</span>}
          >
            <AllTodos
              todoList={todoArray}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </Tab>
          <Tab
            eventKey="completed"
            title={<span className="tab-title">Completed</span>}
          >
            <AllTodos
              todoList={completedTodoList}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
