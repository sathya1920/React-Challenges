import React, { useEffect, useState } from "react";

const Pages = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(2);
  const [totalItems,setTotalItems] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `https://reqres.in/api/users?page=${currentPage}&per_page=${pageSize}`
      );
      const data = await response.json();
      setItems(data.data);
      setTotalItems(data.total);
      console.log(data);
    };
    fetchItems();
  }, [currentPage,pageSize]);

  const totalPages = Math.ceil(totalItems / pageSize);
  const gotoPrev = ()=>{
    if(currentPage>1){
        setCurrentPage(currentPage-1);
    }
  }

  const gotoNext=  ()=>{
    if(currentPage < totalPages){
        setCurrentPage(currentPage+1);
    }
  }
  return ( 
  <>
    <h1 className="m-5">Employee Details</h1>
    <table className="table m-5 w-50" border={3}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>

    <div className="m-5">
        <button onClick={gotoPrev} className="btn btn-sm btn-warning">Prev</button>
        <span>
            Page {currentPage} of {totalPages}
        </span>
        <button onClick={gotoNext} className="btn btn-sm btn-primary">Next</button>
    </div>
  </>
  );
};

export default Pages;
