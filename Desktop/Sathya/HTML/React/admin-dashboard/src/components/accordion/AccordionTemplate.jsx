import React, { useState } from "react";
const AccordionTemplate = ({ panels }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const handleToggle = (index) => {
    if(activeIndexes.includes(index)){
        //collapse
        setActiveIndexes(activeIndexes.filter((i)=> i!== index));
    }else{
        setActiveIndexes([...activeIndexes,index]);
    }
  };
  return (
    <div className="accorion">
      {panels.map((panel, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleToggle(index)}>
            {panel.title}
            <span>{activeIndexes.includes(index) ? "-" : "+"}</span>
          </div>

          <div className={`accordion-content ${activeIndexes.includes(index) ? "expanded" : ""}`}>
            {panel.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionTemplate;
