import HomePage from "@/components/pages/homePage";
import Image from "next/image";
import AboutUs from "./about/page";
import ExpertiseMe from "./expertise/page";
import SkillsPage from "@/components/pages/skillsPage";
import EducationPage from "@/components/pages/educationPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutUs />
      <ExpertiseMe />
      <SkillsPage />
      <EducationPage />
    </main>
  );
}
