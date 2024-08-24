import HomePage from "@/components/pages/homePage";
import AboutUs from "./about/page";
import ExpertiseMe from "./expertise/page";
import SkillsPage from "@/components/pages/skillsPage";
import EducationPage from "@/components/pages/educationPage";
import ExperiencePage from "@/components/pages/experiencePage";
import Works from "@/components/pages/workPage";
import ContactPage from "@/components/pages/contactPage";
import SectionWrapper from "@/components/common/sectionWrapper/SectionWrapper";
import AsideComponent from "@/components/common/asideComponents/AsideComponent";

export default function Home() {
  return (
    <main>
      <SectionWrapper>
        <div className="flex">
          <div className="sm:w-[30%] hidden sm:sticky sm:block h-full top-0 z-50">
            <AsideComponent />
          </div>
          <div className="sm:w-[70%] ">
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
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
