import React, { useState } from "react";

const ShuffleItems = () => {
  const initialItems = ["Apple", "Banana", "Orange", "Pineapple", "Grapes"];
  const [items, setItems] = useState(initialItems);
  
  const shuffleItemsList = ()=>{
    let shuffledItems = [...items];
    for(let i = shuffledItems.length-1; i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }
    setItems(shuffledItems);
  }

  const handleShuffle =()=>{
    shuffleItemsList();
  }

  return (
    <div className="container">
      <h1 className="text-primary">Shuffle Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} >{item}</li>
      ))}</ul>
      <button onClick={handleShuffle} className="btn btn-primary">Shuffle Items</button>
    </div>
  );
};

export default ShuffleItems;
