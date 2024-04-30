import ExperienceAndEducation from "@/components/custom/experience-and-education";
import PersonalInfo from "@/components/custom/personal-info";
import Projects from "@/components/custom/projects";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <main className="max-w-screen-xl">
      <PersonalInfo />
      <ExperienceAndEducation />
      <Projects />
      <Footer />
    </main>
  );
}
