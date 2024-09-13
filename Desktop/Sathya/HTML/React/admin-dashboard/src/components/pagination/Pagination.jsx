import React, { useEffect, useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(2);
  const url = `https://reqres.in/api/users?page=${currentPage}&per_page=${pageSize}`;
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data.data);
      setTotalItems(data.total);
      
    };
    fetchItems();
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalItems / pageSize);
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <h1 className="m-5">Employee Details</h1>
      <table className="table m-5" border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-50 m-5">
        <button
          className="btn btn-sm btn-warning"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-sm btn-primary"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
