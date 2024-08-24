"use client";
import SectionWrapper from "../../common/sectionWrapper/SectionWrapper";
import Image from "next/image";
import React from "react";
import aboutDp from "../../../public/images/about-dp.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../app/variants";
import PageHeading from "../../common/pageHeading/PageHeading";

function AboutUs() {
  return (
    <SectionWrapper>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-10">
        <PageHeading upperHeading={"ABOUT US"} dawnHeading={"WHO I AM?"} />
        <div className="flex justify-center items-center flex-col">
          <div>
            <Image src={aboutDp} height={300} width={300} alt="Wasim pic" />
          </div>
          <div className="my-6">
            <p className="text-gray-500 text-sm sm:text-base font-light mb-5 leading-6 tracking-wider">
              <span className="text-xl font-semibold">I am Wasim</span> a Next and React.js developer with expertise in building scalable, high-performance web applications. My
              skills include creating dynamic user interfaces, optimizing web experiences with Next.js, and managing state using Redux and Context API. I also prioritize delivering
              responsive, visually appealing designs.
            </p>
            <p className="text-gray-500 text-sm sm:text-base font-light leading-6 tracking-wider">
              Passionate about staying updated with the latest technologies, I thrive in Agile environments where collaboration and innovation are key. My commitment to performance
              optimization and enhancing user experience drives me to consistently deliver quality code on time, contributing effectively to any project I work on.
            </p>
          </div>
          <div>
            <div className="bg-deepYellow px-6 py-10 mb-10 sm:my-8 z-10">
              <p className="text-3xl font-serif leading-10">I am happy to know you that 50+ projects done sucessfully!</p>
              <a href="#contacts">
                <button className="py-1 px-3 border border-black mt-4">HIRE ME</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default AboutUs;
