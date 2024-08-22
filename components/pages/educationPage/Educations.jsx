"use client";
import PageHeading from "@/components/common/pageHeading/PageHeading";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

function Educations() {
  return (
    <SectionWrapper>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="px-4">
        <PageHeading upperHeading={"EDUCATION"} dawnHeading={"EDUCATION"} />
        <div>
          <Accordion />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Educations;
