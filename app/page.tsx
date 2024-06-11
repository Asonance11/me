import ExperienceAndEducation from "@/components/custom/experience-and-education";
import PersonalInfo from "@/components/custom/personal-info";
import Projects from "@/components/custom/projects";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-screen-xl">
        <PersonalInfo />
        <ExperienceAndEducation />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
