import React from "react";
import AccordionFun from "./AccordionFun";

const Accordion = () => {
    const accordionData = [
        { title: 'Accordion 1', content: 'This is the content of accordion 1.' },
        { title: 'Accordion 2', content: 'This is the content of accordion 2.' },
        { title: 'Accordion 3', content: 'This is the content of accordion 3.' },
      ];

    return(
        <div>
          <ul>
            {
                accordionData.map((item) => (
                    <AccordionFun title={item.title} content={item.content} key={item.title}/>
                ))
            }
          </ul>
        </div>
    )
}

export default Accordion