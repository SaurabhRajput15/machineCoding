import React from "react";
import AccordianFun from "./AccordianFun";

const Accordian = () => {
    const accordionData = [
        { title: 'Accordion 1', content: 'This is the content of accordion 1.' },
        { title: 'Accordion 2', content: 'This is the content of accordion 2.' },
        { title: 'Accordion 3', content: 'This is the content of accordion 3.' },
      ];

    return(
        <div>
          <h1>React Accordion</h1>
          <ul>
            {
                accordionData.map((item, index) => (
                    <AccordianFun key={index} title={item.title} content={item.content} />
                ))
            }
          </ul>
        </div>
    )
}

export default Accordian