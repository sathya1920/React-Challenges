import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './Configurations.css'

const Configurations = ({ selectedElement, onUpdate, onClose }) => {
  const [config, setConfig] = useState({
    type: selectedElement.type || "Text Input",
    label: "",
    placeholder: "",
    options: "",
    name: "",
  });

  useEffect(() => {
    if (selectedElement) {
      setConfig({
        type: selectedElement.type || "Text Input",
        label: selectedElement.label || "",
        placeholder: selectedElement.placeholder || "",
        options: selectedElement.options
          ? selectedElement.options.join(", ")
          : "",
        name: selectedElement.name || "",
      });
    }
  }, [selectedElement]);

  if (!selectedElement) {
    return (
      <div
        className="configurations-container"
      >
        <h3>Configuration</h3>
        <p>Select an element to configure.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onUpdate !== "function") {
      console.error("onUpdate prop is not a function", onUpdate);
      return;
    }

    // Simple validations
    if (!config.name.trim()) {
      alert("Name is required.");
      return;
    }

    const updatedElement = {
      ...selectedElement,
      type: config.type,
      label: config.label,
      placeholder: config.placeholder,
      name: config.name,
      options: config.options
        ? config.options.split(",").map((opt) => opt.trim())
        : [],
    };
    onUpdate(updatedElement);
    onClose(); // Closing  configuration panel
  };

  return (
    <div
      className="configurations-container"
    >
      <div
        className="configurations-header"
      >
        <h3>Configurations</h3>
        <button
          
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            lineHeight: "1",
          }}
          title="Close Configuration"
        >
          &times;
        </button>
      </div>
      <form className="configurations-form" onSubmit={handleSubmit}>
        <div style={{ marginBottom: "8px" }}>
          <label>Type: </label>
          <select
            name="type"
            value={config.type}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          >
            <option>Text Input</option>
            <option>Check Box</option>
            <option>Radio Button</option>
            <option>Select</option>
            <option>Password</option>
            <option>Email</option>
            <option>Number</option>
            <option>File</option>
            <option>Submit</option>
            <option>Button</option>
            <option>Label</option>
            <option>Text Area</option>
          </select>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label>Label:</label>
          <input
            type="text"
            name="label"
            value={config.label}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>
        {(config.type === "Text Input" ||
          config.type === "Password" ||
          config.type === "Email") && (
          <div style={{ marginBottom: "8px" }}>
            <label>PlaceHolder:</label>
            <input
              type="text"
              name="placeholder"
              value={config.placeholder}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </div>
        )}
        {(config.type === "Select" ||
          config.type === "Radio Button" ||
          config.type === "Checkbox") && (
          <div style={{ marginBottom: "8px" }}>
            <label>Options (comma separated):</label>
            <input
              type="text"
              name="options"
              value={config.options}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </div>
        )}
        <div style={{ marginBottom: "8px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={config.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px",
            cursor: "pointer",
            backgroundColor: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

Configurations.propTypes = {
  selectedElement: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  }),
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Configurations;
