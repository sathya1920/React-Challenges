import React, { useEffect, useState } from "react";

const Table = () => {

    const url = "https://reqres.in/api/users?page=2";
    const [userData,setUserData] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data.data);
            console.log(data);
            
        }
        fetchData();
    },[])
  return (
    <div>
      <table className="table table-bordered w-50 container my-5">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user,index)=>(
            <tr key={index}>
                <td>
                    <img style={{widows: "10px"}} src={user.avatar} alt="Profile Picture" />
                </td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
