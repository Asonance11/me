"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCards from "./project-cards";
import { projects } from "@/lib/data";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Projects = () => {
  return (
    <section className="mt-20 min-h-[50vh]">
      <h1 className="text-2xl dark:text-[#E3E3E3] font-semibold">Projects</h1>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <ProjectCards project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
