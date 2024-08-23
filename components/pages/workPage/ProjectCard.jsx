import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

function ProjectCard({ imgSrc, projectName, featureArray, technoArray, liveLink, githubLink }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="px-2 py-5 bg-white shadow-2xl rounded-lg mb-10"
    >
      <div className="relative ">
        <Image src={imgSrc} width={300} height={300} alt="projects pic" className="w-full rounded-md" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </div>
      <h2 className="uppercase my-2 text-lg ">{projectName}</h2>
      <ul>
        {featureArray?.map((item, index) => (
          <li key={index} className="text-xs text-gray-600 my-2">
            {item}
          </li>
        ))}
      </ul>
      <p className="my-3">Technologies Used : </p>
      <ul className="flex justify-start items-center gap-3 flex-wrap">
        {technoArray?.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 mx-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-start items-center gap-6 my-5">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-blue-600 py-1 px-3 text-blue-600">
            <button className="text-sm font-light">LIVE DEMO</button>
            <FaEye />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-blue-600 py-1 px-3 text-blue-600">
            <button className="text-sm font-light">GITHUB</button>
            <FaGithub />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
