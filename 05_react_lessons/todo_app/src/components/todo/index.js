import React, { useEffect, useState } from 'react'
import "./styles.css"
import AddTodo from './AddTodo'
import TodoList from './AddTodo/TodoList'
function Todo() {
    const initialValues = [
        {name: "Taste JavaScript", finished:true},
        {name: "Code furiously", finished: false},
        {name: "Give talks", finished: true},
        {name: "Have a life", finished: false}
    ]
    const [todos,setTodos] = useState(initialValues);
    useEffect(() =>{
        console.log(todos);
    },[todos])
  return (
    <div className='container'>
      <h1>todos</h1>
      <div>
        <AddTodo todos={todos} addTodo={setTodos}/>
        <TodoList todos={todos} updateTodo={setTodos}/>
      </div>
    </div>
  )
}

export default Todo
