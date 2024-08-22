"use client";
import PageHeading from "@/components/common/pageHeading/PageHeading";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const workArray = [
  "Creating a Dynamic Website from Scratch using Next/React.js",
  "Integrated with various data sources and APIs to fetch and display real-time content, enhancing the website's functionality",
  "Applied performance optimization techniques such as code splitting and lazy loading to improve application loading times",
  " Implemented Redux Toolkit and thunk middleware for state management and asynchronous API calls.",
];

const techArray = [" Next.js", "React.js", "JavaScript", "HTML5", "Tailwind", "Redux toolkit", "SASS", "CSS", "Thunk", "Axios", "Github"];

function Experiences() {
  return (
    <SectionWrapper>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="px-4 my-10">
        <PageHeading upperHeading={"EXPERIENCE"} dawnHeading={"WORK EXPERIENCE"} />
        <div className="flex justify-center items-start gap-6">
          <div className="bg-blue-600 rounded-full p-3">
            <FaPencilAlt className="text-white text-2xl" />
          </div>
          <div className="bg-gray-200 px-5 py-8 rounded-md relative">
            <h2 className="font-semibold my-2">FRONTEND DEVELOPER</h2>
            <p className="text-sm text-gray-500">TRIUMPH EDUCATION AND PUBLISING PVT LTD</p>
            <p className="text-sm text-gray-500">Aug 2022 - Present</p>
            <ul className="list-disc mt-4">
              {workArray?.map((item, index) => (
                <li key={index} className="text-sm text-gray-500 list-disc my-1">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm my-2 text-gray-700 ">
              <span className="underline">Technologies Used :-</span> <br />
              <ul className="grid grid-cols-2 mx-3 gap-2 list-disc mt-2">
                {techArray?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <div className="absolute top-5 -left-4 -rotate-90 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-gray-200"></div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Experiences;
