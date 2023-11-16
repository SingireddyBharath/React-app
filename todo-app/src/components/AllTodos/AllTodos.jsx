import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./AllTodos.css";

const AllTodos = ({ todoList, deleteTodo, updateTodo }) => {
  return (
    <>
     {todoList.map(({ id, taskName, status }) => (
       <div className="todo-item" key={id}>
         <div className="taskName-container">
           <FontAwesomeIcon icon={faAngleRight} />
           <span className="task-name">{taskName}</span>
         </div>
         <div className="button-container">
           {status === "todo" ? (
             <button className="mark-done" onClick={() => updateTodo(id)}>
               Mark as done
             </button>
           ) : (
             <button className="mark-todo" onClick={() => updateTodo(id)}>
               Mark as Todo
             </button>
           )}
           <button className="del-todo" onClick={() => deleteTodo(id)}>
             <FontAwesomeIcon icon={faTrash} />
           </button>
         </div>
       </div>
     ))}     
    </>
  );
};

export default AllTodos;
