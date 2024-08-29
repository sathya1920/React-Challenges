import './App.css'
import React, { useState } from 'react'

function App(){
  let [todoInput, updateInput] = useState()

  let [todoList, updateTodos] = useState(
    [
      {
        id:1,
        task: 'Learn React'
      },
      {
        id:2,
        task: 'Learn Angular'
      },
      
    ]
  )

  let nextId = 3

  function addNewTodo(){
    
    if(todoInput === ''){
      alert("You must write something")
    }else{
      let newTodos = [
        
          ...todoList,
          {
            id: nextId++,
            task: todoInput
          }
        
      ]
      updateTodos(newTodos)
      updateInput('')

    }
    
  }

  function deleteTodo(id){

    let updatedTodos =  todoList.filter(
      (todo)=>{
        return todo.id !== id;
      }
    )

    updateTodos(updatedTodos)


  }
  


  return(
    <div className = "container  mt-5 w-50"  >
      <h1 className="text-center mb-4">ToDo-App Using React</h1>
      <div className="input-group ">
        <input type="text" className="form-control" placeholder='Add something here...' value={todoInput} onChange={(e)=>{
          let task = e.target.value;
          updateInput(task)
        }} />
        <button className="btn btn-primary" onClick={addNewTodo}>Add</button>
      </div>
      <ul className="list-group mt-4">
        
        {
          todoList.map(
            (todo)=>{
              return (
                <li className="list-group-item">
                  <p>{todo.task}</p>
                  <button onClick={()=>{
                    deleteTodo(todo.id)
                  }}  className="btn">❌</button>
                </li>
        
              )
            }
          )
        }

      </ul>

    </div>



  )
}
export default App