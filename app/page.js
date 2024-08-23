import HomePage from "@/components/pages/homePage";
import AboutUs from "./about/page";
import ExpertiseMe from "./expertise/page";
import SkillsPage from "@/components/pages/skillsPage";
import EducationPage from "@/components/pages/educationPage";
import ExperiencePage from "@/components/pages/experiencePage";
import Works from "@/components/pages/workPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutUs />
      <ExpertiseMe />
      <SkillsPage />
      <EducationPage />
      <ExperiencePage />
      <Works />
    </main>
  );
}
