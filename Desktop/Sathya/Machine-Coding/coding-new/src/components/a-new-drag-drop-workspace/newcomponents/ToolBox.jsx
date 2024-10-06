import React from "react";
import Draggable from "./Draggable";
import './Toolbox.css'

const inputTypes = [
  "Text Input",
  "Password",
  "Email",
  "Number",
  "File",
  "Submit",
  "Button",
  "label",
  "text area",
  "Checkbox",
  "Radio Button",
  "Select",
];

const ToolBox = () => {
  return (
    <div className="toolbox"
    >
        <h3 className="toolbox-title">ToolBox</h3>
        {inputTypes.map((type)=>(
            <Draggable key={type} type={type} />
        ))}
    </div>
  );
};

export default ToolBox;
