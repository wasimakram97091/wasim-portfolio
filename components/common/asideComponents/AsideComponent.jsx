"use client";
import Image from "next/image";
import React, { useState } from "react";
import dp from "../../../public/images/dp.png";

function AsideComponent() {
  const [activeItem, setActiveItem] = useState("HOME");

  const handleItemClick = (item) => {
    setActiveItem(item);
    console.log(`${item} is active`);
  };

  const menuItems = ["HOME", "ABOUT", "EXPERTISE", "SKILLS", "EDUCATION", "EXPERIENCE", "WORK", "CONTACT"];

  return (
    <div className="flex justify-center items-center flex-col bg-gray-200 p-12 ">
      <div className="flex justify-between items-start">
        <Image src={dp} height={200} width={200} alt="Wasim Akram" />
      </div>

      <h2 className="my-4 text-2xl font-bold font-serif">Wasim Akram</h2>
      <p className="font-light">
        <span className="text-cyanLight">Next/React.Js</span> Developer
      </p>

      <div className="my-4 text-xs">
        <ul className="font-light flex justify-center items-center flex-col">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`my-2 py-0.5 cursor-pointer border border-transparent hover:border hover:border-b-cyan-500 ${activeItem === item ? "text-cyanLight " : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="font-light text-xs text-center">
        © Copyright ©2024 All rights reserved <br /> <span className="text-cyanLight mt-1"> ❤️ Wasim</span>
      </p>
    </div>
  );
}

export default AsideComponent;
