import React from "react";
import Accordion from "./Accordion";
import AccordionTemplate from "./AccordionTemplate";

const panelsData = [
  { title: "Panel 1", content: "This is the content for panel 1" },
  { title: "Panel 2", content: "This is the content for panel 2" },
  { title: "Panel 3", content: "This is the content for panel 3" },
];
const Main = () => {
  return (
    <div>
      <Accordion panels={panelsData} />
      {/* <AccordionTemplate panels={panelsData} /> */}
    </div>
  );
};

export default Main;
