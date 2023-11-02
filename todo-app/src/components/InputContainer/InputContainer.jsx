import React, { useState } from "react";
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
      <button className="add-btn" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
};

export default InputContainer;
