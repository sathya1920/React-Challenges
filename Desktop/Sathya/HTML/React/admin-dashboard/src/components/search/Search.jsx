import React, { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdown, setDropdown] = useState(false);
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

  const filteredItems = items.filter((item, index) =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSelect = (item) => {
    setSearchInput(item);
    setDropdown(false);
  };

  

  return (
    <div className="dropdown-container">
      <input
        type="text"
        className="form-control m-5 w-50"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => {
          setDropdown(true);
          setSearchInput(e.target.value);
        }}
        onFocus={() => setDropdown(true)}
      />
      {dropdown && (
        <ul
          className="list-group w-50 m-5"
          style={{ maxHeight: "200px", overflow: "auto" }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{cursor: "pointer"}}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Items Found...</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
