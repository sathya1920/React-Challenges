import React, { useState } from 'react'

const FormData = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });
    const [user, setUser] = useState([]);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(prevState=> {
            return {...prevState, [name]:value};
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            name: formData.name,
            email: formData.email
        }
        console.log("form data", formData);
        setFormData({name: "", email: ""});
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(newUser)
        }).then(res=>res.json())
        .then((data)=>{
            // setUser((prevUser)=>[...prevUser,data]);
            console.log("data", data);
        })
        .catch((err)=>console.log(err)
        );
        setFormData({name: "", email: ""});
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} />
        </div>

        <div>
            <label>Email: </label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormData