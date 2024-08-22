"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div>
    <button
      onClick={onToggle}
      className={` ${isOpen ? "bg-blue-500 text-white" : "bg-gray-200 "}  my-1 flex items-center justify-between w-full p-4 text-left focus:outline-none font-light text-sm`}
    >
      <span className="text-lg ">{title}</span>
      {isOpen ? <FaMinus className={`${isOpen ? "text-white" : "text-gray-500"}`} /> : <FaPlus className="text-gray-600" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
      <p className="p-4 text-gray-500 text-sm leading-7">{content}</p>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <AccordionItem
        title="MASTER OF COMMERCE"
        content="I have completed my Master's (M.com) from VINOBA BHAVE UNIVERSITY in session 2020 - 2022 with 66%"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      />
      <AccordionItem
        title="BACHELOR OF COMMERCE"
        content="I have completed my Bachelor's (B.com) from VINOBA BHAVE UNIVERSITY in session 2017 - 2020 with 64%"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      />
      <AccordionItem
        title="INTERMEDIATE OF COMMERCE"
        content="I have completed my Intermediate's (I.com) from MARKHAM COLLEGE OF COMMERCE in session 2015 - 2017 with 67%"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      />
      <AccordionItem
        title="MATRIC"
        content="I have completed my Matric from KASTURBA GANDHI HIGH SCHOOL in 2015 with 78%"
        isOpen={openIndex === 3}
        onToggle={() => handleToggle(3)}
      />
    </div>
  );
};

export default Accordion;
