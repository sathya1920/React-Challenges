// src/App.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ToolBox from "./components/a-new-drag-drop-workspace/newcomponents/ToolBox";
import Workspace from "./components/a-new-drag-drop-workspace/newcomponents/Workspace";
import Configurations from "./components/a-new-drag-drop-workspace/newcomponents/Configurations";
import './App.css'

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null); // Initialize as null

  const handleUpdateElement = (updatedElement) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === updatedElement.id ? updatedElement : el
      )
    );
    setSelectedElement(updatedElement);
  };

  const handleDeselect = () => {
    setSelectedElement(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container" style={{ display: "flex", height: "100vh", width: "100%" }}>
        <ToolBox />
        <Workspace
          elements={elements}
          setElements={setElements}
          onSelectElement={setSelectedElement}
          onDeselectElement={handleDeselect}
          selectedElement={selectedElement}
        />
        {selectedElement && (
          <Configurations
            selectedElement={selectedElement}
            onUpdate={handleUpdateElement}
            onClose={handleDeselect}
          />
        )}
      </div>
    </DndProvider>
  );
}

export default App;
