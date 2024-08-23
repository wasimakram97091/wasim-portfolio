import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 my-8">
        <a href="https://www.linkedin.com/in/wasim-akram-542960289/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-linkedin" />
        </a>
        <a href="https://www.instagram.com/hey__wasim/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="text-3xl text-insta" />
        </a>
        <a href="https://x.com/__heywasim" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-3xl text-twitter" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007726477374" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className="text-3xl text-facebook" />
        </a>
      </div>
      <div className="bg-gray-200 py-5">
        <p className="font-light text-sm text-center">
          © Copyright ©2024 All rights reserved <br /> <span className="text-cyanLight mt-1"> ❤️ Wasim</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
