import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./InputContainer.css";
const InputContainer = (props) => {
  const [inputTask, setInputTask] = useState("");
  const { addTodo } = props;
  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleAddTodo();
  };
  const handleAddTodo = () => {
    addTodo(inputTask);
    setInputTask("");
  };
  return (
    <div className="outer-container">
      <input
        className="input-box"
        type="text"
        value={inputTask}
        placeholder="Type your task here...."
        onChange={(e) => setInputTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button className="circle-button" onClick={handleAddTodo}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default InputContainer;
