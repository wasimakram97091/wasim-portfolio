"use client";
import PageHeading from "@/components/common/pageHeading/PageHeading";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

function Skill() {
  const skills = [
    { name: "Next/React.Js", percentage: 85, color: "bg-deepYellow" },
    { name: "JavaScript", percentage: 80, color: "bg-jsBg" },
    { name: "HTML", percentage: 87, color: "bg-htmlBg" },
    { name: "CSS", percentage: 80, color: "bg-cssBg" },
    { name: "Redux-toolkit", percentage: 78, color: "bg-reduxBg" },
    { name: "Tailwind", percentage: 75, color: "bg-orange-400" },
  ];

  const SkillBar = ({ name, percentage, color }) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span className="text-lg mb-2">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );

  return (
    <SectionWrapper>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
        <div className="px-4 my-10">
          <PageHeading upperHeading={"MY SPECIALTY"} dawnHeading={"MY SKILLS"} />
          <p className="text-gray-500 font-light text-sm leading-7">
            Skilled in Next.js and React.js, with expertise in building dynamic, scalable web applications. Proficient in modern JavaScript, component-based design, and performance
            optimization techniques.
          </p>
        </div>

        <div className="p-4">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} color={skill.color} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Skill;
