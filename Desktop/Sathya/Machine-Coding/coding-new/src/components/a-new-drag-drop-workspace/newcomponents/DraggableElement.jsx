// src/components/a-new-drag-drop-workspace/newcomponents/DraggableElement.js
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa"; // Import FaTrash for the delete button

const DraggableElement = ({
  element,
  index,
  moveElement,
  onSelectElement,
  handleDelete,
}) => {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "FORM_ELEMENT",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      //actually perform the action
      moveElement(dragIndex, hoverIndex);

      
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "FORM_ELEMENT", 
    item: () => {
      return { id: element.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  const renderElement = (el) => {
    switch (el.type) {
      case "Text Input":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            <input
              type="text"
              placeholder={el.placeholder}
              name={el.name}
              disabled
              style={{ flex: 1 }}
            />
          </div>
        );
      case "Password":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            <input
              type="password"
              placeholder={el.placeholder}
              name={el.name}
              disabled
              style={{ flex: 1 }}
            />
          </div>
        );
      case "Email":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            <input
              type="email"
              placeholder={el.placeholder}
              name={el.name}
              disabled
              style={{ flex: 1 }}
            />
          </div>
        );
      case "Number":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            <input
              type="number"
              placeholder={el.placeholder}
              name={el.name}
              disabled
              style={{ flex: 1 }}
            />
          </div>
        );
      case "File":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            <input type="file" name={el.name} disabled style={{ flex: 1 }} />
          </div>
        );
      case "Submit":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="submit" value={el.label || "Submit"} disabled />
          </div>
        );
      case "Radio Button":
        return (
          <div>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            {el.options && el.options.length > 0 ? (
              el.options.map((opt, idx) => (
                <label key={idx} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={el.name}
                    value={opt}
                    disabled
                  />
                  {opt}
                </label>
              ))
            ) : (
              <label>
                <input type="radio" name={el.name} disabled />
                Radio Button
              </label>
            )}
          </div>
        );
      case "Checkbox":
        return (
          <div>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            {el.options && el.options.length > 0 ? (
              el.options.map((opt, idx) => (
                <label key={idx} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    name={el.name}
                    value={opt}
                    disabled
                  />
                  {opt}
                </label>
              ))
            ) : (
              <label>
                <input type="checkbox" name={el.name} disabled />
                Checkbox
              </label>
            )}
          </div>
        );
      case "Button":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <button disabled>{el.label || "Button"}</button>
          </div>
        );
      case "Select":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {el.label && (
              <label style={{ marginRight: "8px" }}>{el.label}</label>
            )}
            <select name={el.name} disabled>
              {el.options && el.options.length > 0 ? (
                el.options.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))
              ) : (
                <option>Select</option>
              )}
            </select>
          </div>
        );
      case "Label":
        return (
          <div style={{ marginBottom: "12px" }}>
            <label>{el.label || "Label"}</label>
          </div>
        );
      case "Text Area":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {el.label && <label>{el.label}</label>}
            <textarea
              name={el.name}
              rows={4}
              cols={30}
              placeholder={el.placeholder}
              disabled
              style={{ padding: "8px", boxSizing: "border-box" }}
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        marginBottom: "12px",
        padding: "8px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "#fff",
        cursor: "move",
        opacity,
        position: "relative", 
      }}
      data-handler-id={handlerId}
      onDoubleClick={() => onSelectElement(element)}
    >
      {renderElement(element)}
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          handleDelete(element.id);
        }}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#ff4d4f",
        }}
        title="Delete Element"
      >
        <FaTrash />
      </button>
    </div>
  );
};

DraggableElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveElement: PropTypes.func.isRequired,
  onSelectElement: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DraggableElement;
