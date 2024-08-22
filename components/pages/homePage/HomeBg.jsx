"use client";
import React, { useState, useEffect } from "react";
import AsideComponent from "@/components/common/asideComponents/AsideComponent";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

function HomeBg() {
  const [showAside, setShowAside] = useState(false);
  const [toggleText, setToggleText] = useState(true);

  const AsideHandler = () => {
    setShowAside((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleText((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SectionWrapper>
        <div className="relative h-auto">
          <div
            className="h-screen w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/homeBg.jpg')",
              filter: "blur(1px)",
            }}
          ></div>
          <motion.div
            key={toggleText}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 0.7 }}
            className="absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit text-center"
          >
            {toggleText ? (
              <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold text-4xl font-serif">
                  Hi! <br />
                  I'm Wasim
                </h2>
                <button className="flex justify-center items-center gap-4 border border-black font-extralight py-2 text-sm px-10 mt-5">
                  DOWNLOAD CV <FaDownload />
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold text-2xl font-serif">
                  I am <br />
                  Frontend Developer
                </h2>
                <button className="flex justify-center items-center gap-4 border border-black font-extralight py-2 text-sm px-10 mt-5">
                  CONTACT ME <MdContactPhone />
                </button>
              </div>
            )}
          </motion.div>
          <div className="fixed z-50 bg-gray-100 top-6 left-4">
            <BiMenuAltLeft className="text-5xl" onClick={AsideHandler} />
          </div>

          <div
            className={`absolute top-0 left-0 h-screen overflow-y-scroll transition-transform duration-500 ${
              showAside ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <AsideComponent AsideHandler={AsideHandler} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

export default HomeBg;
