import React, { useState } from "react";

const Todos = () => {
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todos,setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addUpdateTodo = ()=>{
    if(input.trim()!==""){
        if(isEdit){
            const updatedTodos = todos.map((todo,index)=>index === editIndex ? input : todo
            );
            setTodos(updatedTodos);
            setIsEdit(false);
            setEditIndex(null);
        }else{
            setTodos([...todos, input]);
        }
        setInput('');
    }
    
  }

  const editTodo = (index)=>{
    setIsEdit(true);
    setEditIndex(index);
    setInput(todos[index]);
  }

  const deleteTodo = (index) =>{
    const filteredTodos = todos.filter((todo,i)=> i !== index);
    setTodos(filteredTodos);
  }
  return (
    <>
      <div className="row w-50 m-5 ">
        <input
          type="text"
          className="col-10"
          placeholder="enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='col-2 btn btn-primary'
            onClick={addUpdateTodo}
        >{isEdit ? "Update" : "Add"}</button>
      </div>

      <div className="w-50 m-5">
        <ul className="list-group">
            {todos.map((todo,index)=>(
                <li key={index} 
                className="list-group-item d-flex align-items-center justify-content-between">
                    {todo}

                    <div>
                        <button className="btn btn-sm btn-warning"
                            onClick={()=>editTodo(index)}
                        >Edit</button>
                        <button className="btn btn-sm btn-danger"
                            onClick={()=>deleteTodo(index)}
                        >Delete</button>
                    </div>
                </li>

            ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
