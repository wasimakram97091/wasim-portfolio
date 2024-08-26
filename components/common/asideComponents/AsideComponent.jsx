"use client";
import Image from "next/image";
import React, { useState } from "react";
import dp from "../../../public/images/dp.png";

function AsideComponent({ AsideHandle }) {
  const [activeItem, setActiveItem] = useState("HOME");

  const handleItemClick = (item, event) => {
    event.preventDefault(); // Prevent the default behavior of updating the URL with the hash
    setActiveItem(item.label);
    if (window.innerWidth <= 576) {
      AsideHandle();
    }
    setTimeout(() => {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const menuItems = [
    { label: "HOME", href: "#homes" },
    { label: "ABOUT", href: "#abouts" },
    { label: "EXPERTISE", href: "#expertises" },
    { label: "SKILLS", href: "#skillss" },
    { label: "EDUCATION", href: "#educations" },
    { label: "EXPERIENCE", href: "#experiences" },
    { label: "WORK", href: "#works" },
    { label: "CONTACT", href: "#contacts" },
  ];

  return (
    <div className="flex justify-center items-center flex-col bg-gray-200 p-12 max-w-[90%] sm:max-w-full fixed sm:static sm:h-auto sm:overflow-hidden overflow-y-auto">
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
              key={item.label}
              className={`my-2 py-0.5 cursor-pointer border border-transparent hover:border hover:border-b-cyan-500 ${activeItem === item.label ? "text-cyanLight" : ""}`}
            >
              <a href={item.href} onClick={(e) => handleItemClick(item, e)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-light text-xs text-center">
        © Copyright 2024 All rights reserved <br /> <span className="text-cyanLight mt-1"> ❤️ Wasim</span>
      </p>
    </div>
  );
}

export default AsideComponent;
