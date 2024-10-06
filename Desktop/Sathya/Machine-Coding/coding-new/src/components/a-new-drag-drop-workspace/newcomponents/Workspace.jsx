import React, { useState } from "react";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa"; 
import PreviewModal from "./PreviewModal";  
import DraggableElement from "./DraggableElement"; 
import './Workspace.css'

const getDefaultElementProperties = (type) => {
  if (!type) {
    console.error("Undefined type passed to getDefaultElementProperties");
    return {
      label: "New Element",
      name: `element_${Date.now()}`,
      placeholder: "",
      options: [],
    };
  }

  switch (type) {
    case "Label":
      return {
        label: "New Label",
        name: "",
        placeholder: "",
        options: [],
      };
    case "Text Area":
      return {
        label: "New Text Area",
        name: `textarea_${Date.now()}`,
        placeholder: "Enter text here...",
        options: [],
      };
    case "Radio Button":
    case "Checkbox":
      return {
        label: `New ${type}`,
        name: `${type.toLowerCase()}_${Date.now()}`,
        placeholder: "",
        options: ["Option 1", "Option 2"],
      };
    case "Select":
      return {
        label: "New Select",
        name: `select_${Date.now()}`,
        placeholder: "",
        options: ["Option 1", "Option 2"],
      };
    case "Button":
      return {
        label: "New Button",
        name: "",
        placeholder: "",
        options: [],
      };
    case "Submit":
      return {
        label: "Submit",
        name: "",
        placeholder: "",
        options: [],
      };
    case "Text Input":
    case "Password":
    case "Email":
    case "Number":
    case "File":
      return {
        label: `New ${type}`,
        name: `input_${Date.now()}`,
        placeholder: `Enter ${type.toLowerCase()}...`,
        options: [],
      };
    default:
      console.error(`Unrecognized element type: ${type}`);
      return {
        label: `New ${type}`,
        name: `input_${Date.now()}`,
        placeholder: `Enter ${type.toLowerCase()}...`,
        options: [],
      };
  }
};

const Workspace = ({
  elements,
  setElements,
  onSelectElement,
  onDeselectElement,
  selectedElement,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); 

  const moveElement = (dragIndex, hoverIndex) => {
    const draggedElement = elements[dragIndex];
    if (!draggedElement) {
      console.error(`No element found at dragIndex: ${dragIndex}`);
      return;
    }

    const updatedElements = [...elements];
    // Remove the dragged element
    updatedElements.splice(dragIndex, 1);
    // Inserting it at the hover index
    updatedElements.splice(hoverIndex, 0, draggedElement);
    setElements(updatedElements);
  };

  const [{ isOver }, drop] = useDrop({
    accept: "FORM_ELEMENT", 
    drop: (item, monitor) => {
      if (!item.elementType) {
        console.error("Dropped item without an elementType:", item);
        return;
      }

      const defaultProps = getDefaultElementProperties(item.elementType); 
      const newElement = {
        id: Date.now(),
        type: item.elementType, 
        ...defaultProps,
      };

      // Validating the newElement before adding
      if (!newElement.id || !newElement.type) {
        console.error("Invalid element being added:", newElement);
        return;
      }

      setElements((prevElements) => [...prevElements, newElement]);
      onDeselectElement();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this element?"
    );
    if (confirmDelete) {
      setElements((prevElements) =>
        prevElements.filter((el) => el && el.id !== id)
      );
      if (selectedElement && selectedElement.id === id) {
        onSelectElement(null); 
      }
    }
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div
      ref={drop}
      className="workspace"
      onClick={onDeselectElement} 
    >
      <h3>Canvas</h3>
      <div className="preview-button-container"  style={{ marginBottom: "16px" }}>
        <button className="preview-button"
          onClick={openPreview}
        >
          <FaEye style={{ marginRight: "8px" }} /> Preview
        </button>
      </div>
      {elements.length === 0 && <p>Drag and Drop Elements here.</p>}
      {elements
        .filter((el) => el !== undefined && el !== null)
        .map((el, index) => (
          <DraggableElement
            key={el.id}
            element={el}
            index={index}
            moveElement={moveElement}
            onSelectElement={onSelectElement}
            handleDelete={handleDelete} 
          />
        ))}
      <PreviewModal
        isOpen={isPreviewOpen}
        onRequestClose={closePreview}
        elements={elements.filter((el) => el !== undefined && el !== null)} 
      />
    </div>
  );
};

Workspace.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      name: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  setElements: PropTypes.func.isRequired,
  onSelectElement: PropTypes.func.isRequired,
  onDeselectElement: PropTypes.func.isRequired,
  selectedElement: PropTypes.object,
};

export default Workspace;
