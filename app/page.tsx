import ExperienceAndEducation from "@/components/custom/experience-and-education";
import PersonalInfo from "@/components/custom/personal-info";
import Projects from "@/components/custom/projects";

export default function Home() {
  return (
    <main>
      <PersonalInfo />
      <ExperienceAndEducation />
      <Projects />
    </main>
  );
}
