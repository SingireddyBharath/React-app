import React, { useState } from 'react'

function Home() {
    const [inputTask, setInputTask] = useState("")
    const [todoList, setTodoList] = useState([])

    const addTodo = () => {
        setTodoList((prevList) => [...prevList, inputTask])
        setInputTask("");
    }
  return (
      <>
          <div className="input-container">
              <input
                  type='text'
                  value={inputTask}
                  placeholder='Type your task here....'
                  onChange={(e) => setInputTask(e.target.value)}
              />
              <button onClick={addTodo}>add</button>
          </div>
          {todoList.map((todo) => {
              return <div>{todo}</div>
          })}
      </>
  ) 
}

export default Home