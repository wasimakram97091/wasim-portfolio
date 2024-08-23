import HomePage from "@/components/pages/homePage";
import AboutUs from "./about/page";
import ExpertiseMe from "./expertise/page";
import SkillsPage from "@/components/pages/skillsPage";
import EducationPage from "@/components/pages/educationPage";
import ExperiencePage from "@/components/pages/experiencePage";
import Works from "@/components/pages/workPage";
import ContactPage from "@/components/pages/contactPage";

export default function Home() {
  return (
    <main>
      <section id="homes">
        <HomePage />
      </section>
      <section id="abouts">
        <AboutUs />
      </section>

      <section id="expertises">
        <ExpertiseMe />
      </section>

      <section id="skillss">
        <SkillsPage />
      </section>
      <section id="educations">
        <EducationPage />
      </section>

      <section id="experiences">
        <ExperiencePage />
      </section>

      <section id="works">
        <Works />
      </section>

      <section id="contacts">
        <ContactPage />
      </section>
    </main>
  );
}
