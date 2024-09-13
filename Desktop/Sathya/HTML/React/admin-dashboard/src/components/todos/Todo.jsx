import React, { useState } from 'react'

const Todo = () => {
    const [input,setInput] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [todos,setTodos] = useState([]);
    const addUpdateTodo = ()=>{
        if(input.trim() !== ""){
            if(isEdit){
                const updatedTodos = todos.map((todo,index)=> index === editIndex ? input : todo
            );
            setEditIndex(null);
            setIsEdit(false);
            setTodos(updatedTodos);
            }else{
                setTodos([...todos,input])
            }
            
            setInput("");
        }
    }
    const editTodo =(index) =>{
        setIsEdit(true);
        setEditIndex(index);
        setInput(todos[index]);
    }
    const deleteTodo = (index)=>{
        const filteredTodos = todos.filter((todo, ind)=> ind !== index);
        setTodos(filteredTodos);
    }
  return (
    <>
        <div className='row w-50  m-5'>
            <input 
            type="text" 
            className='col-9'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder='Enter task to do'    
            />
            <button className='col-3 btn btn-primary'
                onClick={addUpdateTodo}
            >{isEdit ? "Update" : "Add"}</button>
        </div>

        <div className='m-5 w-50'>
            <ul className='list-group'>
                {todos.map((todo,index)=>(
                    <li key={index}
                     className='list-group-item d-flex align-items-center justify-content-between'
                     >
                        {todo}

                        <div>
                            <button className='btn btn-sm btn-warning'
                            onClick={()=>editTodo(index)}
                            >Edit</button>    
                            <button className='btn btn-sm btn-danger'
                                onClick={()=>deleteTodo(index)}
                            >Delete</button>    
                        </div>    
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Todo