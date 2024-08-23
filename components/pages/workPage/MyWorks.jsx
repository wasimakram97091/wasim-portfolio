"use client";
import PageHeading from "@/components/common/pageHeading/PageHeading";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import React from "react";
import ProjectCard from "./ProjectCard";
import youtubeImg from "../../../public/images/youtube.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
import cineplexImg from "../../../public/images/cineplex.png";
import weatherImg from "../../../public/images/weather.png";

function MyWorks() {
  return (
    <SectionWrapper>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="px-4 ">
        <PageHeading upperHeading="MY WORK" dawnHeading="PERSONAL PROJECTS" />
        <div className="my-5">
          <ProjectCard
            imgSrc={youtubeImg}
            projectName="YouTube Clone"
            featureArray={[
              "Real-time Communication : Integrate live chat functionality to allow users to interact in real-time during live video streaming, fostering a dynamic and engaging user experience.",
              "Debouncing and Caching : Implementing debouncing ensures a smoother user experience by reducing unnecessary API calls , while caching optimizes performance by storing and retrieving frequently requested data, ultimately enhancing the responsiveness of the comment section. ",
              "N-level Nesting Comments : Enable users to engage in meaningful discussions bu supporting nested comments to multiple levels , fostering a sense of cummunity and facilitating orgnaized conversations",
            ]}
            technoArray={["React.js", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Thunk", "React Router"]}
            liveLink={"https://youtube-clone-wine-two.vercel.app/"}
            githubLink={"https://github.com/wasimakram97091/youtube-clone"}
          />

          <ProjectCard
            imgSrc={cineplexImg}
            projectName="Cineplex (Movie App)"
            featureArray={[
              "Designed and implemented user authentication features , allowing seamless login and logout functionalities to enhance user security and personalize the movie checkout experience",
              "Implemented robust error handling and loading states using Redux to provide a smooth and error-free user experience, even in scenarios with slow network conditions or API failures",
              "Implemented dynamic client-side routing using React Router DOM to create a seamless, single-page application experience",
            ]}
            technoArray={["React.js", "JavaScript", "SASS", "React router", "Redux toolkit", "Axios"]}
            liveLink={"https://movie-app-nine-tau.vercel.app/"}
            githubLink={"https://github.com/wasimakram97091/movie-app"}
          />

          <ProjectCard
            imgSrc={weatherImg}
            projectName="Weather App"
            featureArray={[
              "Developed a responsive weather application using React to provide current conditions, daily, and hourly forecasts for a given city.",
              "Designed an intuitive and visually appealing user interface, incorporating features such as city autocomplete and clear visual representations of weather data for improved user experience.",
              "Integrated a weather API (OpenWeatherAPI) to dynamically fetch and display real-time weather data",
            ]}
            technoArray={["React.js", "JavaScript", "SASS"]}
            liveLink={"https://weather-app-five-psi-68.vercel.app/"}
            githubLink={"https://github.com/wasimakram97091/weather-app"}
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default MyWorks;
