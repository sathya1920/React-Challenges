import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import './PreviewModal.css'

Modal.setAppElement("#root"); 

const PreviewModal = ({ isOpen, onRequestClose, elements }) => {
  // render each form element
  const renderElement = (element) => {
    switch (element.type) {
      case "Text Input":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <input
              type="text"
              id={element.name}
              name={element.name}
              placeholder={element.placeholder}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
        );
      case "Password":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <input
              type="password"
              id={element.name}
              name={element.name}
              placeholder={element.placeholder}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
        );
      case "Email":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <input
              type="email"
              id={element.name}
              name={element.name}
              placeholder={element.placeholder}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
        );
      case "Number":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <input
              type="number"
              id={element.name}
              name={element.name}
              placeholder={element.placeholder}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
        );
      case "File":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <input
              type="file"
              id={element.name}
              name={element.name}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
        );
      case "Submit":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            <input
              type="submit"
              value={element.label || "Submit"}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
          </div>
        );
      case "Radio Button":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <span style={{ display: "block", marginBottom: "4px" }}>
                {element.label}
              </span>
            )}
            {element.options && element.options.length > 0 ? (
              element.options.map((opt, idx) => (
                <label key={idx} style={{ display: "block", marginBottom: "4px" }}>
                  <input type="radio" name={element.name} value={opt} /> {opt}
                </label>
              ))
            ) : (
              <label>
                <input type="radio" name={element.name} /> Radio Button
              </label>
            )}
          </div>
        );
      case "Checkbox":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <span style={{ display: "block", marginBottom: "4px" }}>
                {element.label}
              </span>
            )}
            {element.options && element.options.length > 0 ? (
              element.options.map((opt, idx) => (
                <label key={idx} style={{ display: "block", marginBottom: "4px" }}>
                  <input type="checkbox" name={element.name} value={opt} /> {opt}
                </label>
              ))
            ) : (
              <label>
                <input type="checkbox" name={element.name} /> Checkbox
              </label>
            )}
          </div>
        );
      case "Button":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            <button
              type="button"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {element.label || "Button"}
            </button>
          </div>
        );
      case "Select":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <select
              id={element.name}
              name={element.name}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            >
              {element.options && element.options.length > 0 ? (
                element.options.map((opt, idx) => (
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
          <div key={element.id} style={{ marginBottom: "12px" }}>
            <label>{element.label || "Label"}</label>
          </div>
        );
      case "Text Area":
        return (
          <div key={element.id} style={{ marginBottom: "12px" }}>
            {element.label && (
              <label
                htmlFor={element.name}
                style={{ display: "block", marginBottom: "4px" }}
              >
                {element.label}
              </label>
            )}
            <textarea
              id={element.name}
              name={element.name}
              placeholder={element.placeholder}
              rows={4}
              cols={30}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
              disabled
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Form Preview"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
      }}
    >
      <h2>Form Preview</h2>
      <form>
        {elements.map((element) => renderElement(element))}
      </form>
      <button
        onClick={onRequestClose}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

PreviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      name: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default PreviewModal;
