import React from "react";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import './Draggable.css'

const Draggable = ({ type }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "FORM_ELEMENT",
      item: { elementType: type }, 
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [type]
  );


  return (
    <div
      ref={drag}
      className="draggable-element"
    >
      {type}
    </div>
  );
};

Draggable.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Draggable;
