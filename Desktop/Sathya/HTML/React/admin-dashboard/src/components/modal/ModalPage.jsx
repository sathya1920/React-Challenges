import React, { useState } from "react";

const ModalPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length===0){
        setSuccessMessage("Form Submitted Succesfully");

        setFormData({
            name: "",
            email: "",
            password: "",
        });
    }else{
        setSuccessMessage("");
    }
  }

  const validateForm = (data)=>{
    const errors= {};
    if(!data.name.trim()){
        errors.name = "Name is required";
    }
    if(!data.email.trim()){
        errors.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email is Invalid";
    }

    if(!data.password.trim()){
        errors.password = "Password is required";
    }else if(data.password.length < 6){
        errors.password = "Password must be at least 6 characters in length";
    }
    return errors;
  }

  return (
    <div className="container form-class w-50 ">
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <p className="text-danger">{errors.name}</p>}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {errors.email && <p className="text-danger">{errors.email}</p>}


        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {errors.password && <p className="text-danger">{errors.password}</p>}



        <button type="submit" className="btn btn-primary mt-3">Submit</button>

      </form>

      {successMessage && <h4 className="text-success m-3">{successMessage}</h4>}
    </div>
  );
};

export default ModalPage;
