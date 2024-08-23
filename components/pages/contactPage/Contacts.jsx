"use client";
import PageHeading from "@/components/common/pageHeading/PageHeading";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

function Contacts() {
  const ContactInfo = ({ icons: Icon, texts, pincode }) => {
    return (
      <>
        <div className="flex items-center gap-5 my-5">
          <div className="p-5 bg-gray-200">
            <Icon className="text-2xl text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 font-light">{texts}</p>
            <p className="text-gray-500 font-light">{pincode}</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <SectionWrapper>
      <motion.div variants={fadeIn("dawn", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="px-4 mt-32">
        <PageHeading upperHeading={"GET IN TOUCH"} dawnHeading={"CONTACT"} />
        <div className="my-10">
          <ContactInfo icons={FaPhone} texts={"+91 9304780697"} />
          <ContactInfo icons={MdEmail} texts={"wasimakram97091@gmail.com"} />
          <ContactInfo icons={FaLocationDot} texts={"South Delhi , India"} pincode={"110025"} />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Contacts;
