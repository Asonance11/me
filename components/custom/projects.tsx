import React from "react";
import ProjectCards from "./project-cards";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section className="mt-20">
      <h1 className="text-2xl dark:text-[#E3E3E3] font-semibold">Projects</h1>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {projects.map((project) => (
          <ProjectCards project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
