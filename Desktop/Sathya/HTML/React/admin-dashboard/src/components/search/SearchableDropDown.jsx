import React, { useState } from "react";

const SearchableDropDown = () => {
  const [searchItem, setSearchItem] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Mango",
    "Straberry",
    "Guava",
    "Watermelon",
    "Grapes",
    "Orange",
    "Pineapple",
    "Kiwi",
    "Coconut",
    "Blueberry",
    "Custard Apple",
    "BlackBerry",
    "Papaya",
    "Avacados",
    "Olive",
    "Pomogranate",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleSelect = (item)=>{
    setSearchItem(item);
    setDropdownOpen(false);
  }


  return (
    <div className="dropdown-container">
      <input
        type="text"
        className="form-control w-50 m-5"
        placeholder="Search..."
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
          setDropdownOpen(true);
        }}
        onFocus={() => setDropdownOpen(true)}
      />
      {dropdownOpen && (
        <ul
          className="lists-group w-50 m-4"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          { filteredItems.length >0 ? filteredItems.map((item, index) => (
            <li
              className="list-group-item"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={()=>handleSelect(item)}
            >{item}</li>
          )) : (
            <li className="list-group-item">No Items Found...</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropDown;
