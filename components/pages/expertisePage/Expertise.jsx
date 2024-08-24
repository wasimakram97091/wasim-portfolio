import PageHeading from "@/components/common/pageHeading/PageHeading";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import { RiNextjsFill } from "react-icons/ri";
import { TbComponents } from "react-icons/tb";
import { GiMatterStates } from "react-icons/gi";
import { IoGitNetworkSharp } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";

function Expertise() {
  return (
    <SectionWrapper>
      <div className="px-4 my-8">
        <PageHeading upperHeading={"WHAT I DO?"} dawnHeading={"HERE ARE SOME OF MY EXPERTISE"} />
        <div className="my-8 sm:grid sm:grid-cols-2 gap-5">
          <ExpertiseCard
            divStyle={"border-nextIconB"}
            iconStyle={"text-nextIcon"}
            icon={RiNextjsFill}
            headings={"React/Next.js Development"}
            para={"Proficient in creating dynamic, responsive web applications using React and Next.js, focusing on performance and scalability."}
          />
          <ExpertiseCard
            divStyle={"border-drivenIconB"}
            iconStyle={"text-drivenIcon"}
            icon={TbComponents}
            headings={"Component-Driven Architecture"}
            para={"Skilled in designing reusable components for efficient, maintainable, and modular codebases using React’s component-based architecture."}
          />
          <ExpertiseCard
            divStyle={"border-yellow-400"}
            iconStyle={"text-yellow-400"}
            icon={GiMatterStates}
            headings={"State Management"}
            para={"Experienced with Redux-toolkit and Context API for managing complex application states and ensuring seamless user interactions."}
          />
          <ExpertiseCard
            divStyle={"border-apiIconB"}
            iconStyle={"text-apiIcon"}
            icon={IoGitNetworkSharp}
            headings={"API Integration"}
            para={"Adept at integrating RESTful and GraphQL APIs, ensuring efficient data fetching and smooth application performance."}
          />
          <ExpertiseCard
            divStyle={"border-performanceIconB"}
            iconStyle={"text-performanceIcon"}
            icon={GrOptimize}
            headings={"Performance Optimization"}
            para={"Focused on optimizing web performance through techniques like code-splitting, lazy loading, and caching strategies."}
          />
          <ExpertiseCard
            divStyle={"border-gitIconB"}
            iconStyle={"text-gitIcon"}
            icon={FaGitAlt}
            headings={"Version Control"}
            para={"Proficient in Git for version control, enabling smooth collaboration and effective code management."}
          />
        </div>
        <div
          className="h-[50vh] sm:h-[40vh] bg-cover bg-center relative flex justify-center items-center bg-fixed"
          style={{
            backgroundImage: "url('/images/coffee.jpg')",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
          <div className="flex justify-center items-center flex-col absolute gap-6">
            <h2 className="text-5xl font-bold text-white">109</h2>
            <p className="text-white font-light">CUPS OF COFFEE</p>
            <h2 className="text-5xl font-bold text-white">50+</h2>
            <p className="text-white font-light">PROJECTS</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Expertise;
