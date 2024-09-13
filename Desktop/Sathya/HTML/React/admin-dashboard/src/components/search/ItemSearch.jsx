import React, { useState } from "react";

const ItemSearch = () => {
  const [input, setInput] = useState("");
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
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  const handleSelectItem = (item)=>{
    setInput(item);
    setDropdown(false);
  }

  return (
    <div className="container m-5">
      <input
        type="text"
        placeholder="Search here..."
        value={input}
        className="form-control w-50"
        onChange={(e) => {
          setDropdown(true);
          setInput(e.target.value);
        }}
        onFocus={() => setDropdown(true)}
      />
      {dropdown && (
        <ul className="list-group w-50">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                className="list-group-item w-50"
                style={{ cursor: "pointer" }}
                onClick={()=>handleSelectItem(item)}
                key={index}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="list-group-item w-50">No items found....</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ItemSearch;
