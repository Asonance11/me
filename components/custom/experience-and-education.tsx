"use client";

import { skills } from "@/lib/data";
import React from "react";
import Reveal from "@/components/utils/Reveal";
import { motion } from "framer-motion";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const ExperienceAndEducation = () => {
  return (
    <section className="mt-20 min-h-[50vh]">
      <Reveal>
        <h1 className="text-2xl dark:text-[#E3E3E3] font-semibold">
          Experience and Education
        </h1>
        <Experience />
        <Education />
        <Skills />
      </Reveal>
    </section>
  );
};

const Experience = () => {
  return (
    <Reveal>
      <div className="mt-6">
        <div className="flex items-end justify-between gap-x-2">
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium text-xl">Software Engineer Intern</h3>
            <p>CDLP Hub Ltd.</p>
            <p>Ibadan, Nigeria</p>
          </div>
          <p>Jan 2023 - Jun 2023</p>
        </div>
        <p className="mt-4">
          Designed and developed responsive web applications for a diverse
          clientele. Collaborated effectively with teams to elevate
          functionalities across company products.
        </p>
      </div>
    </Reveal>
  );
};

const Education = () => {
  return (
    <Reveal>
      <section className="mt-12">
        <h2 className="text-xl font-semibold dark:text-[#E3E3E3]">Education</h2>
        <div className="mt-4 flex items-end justify-between gap-x-2">
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium text-xl">Bsc. Computer Science</h3>
            <p>Babcock University, Ilishan-Remo, Ogun State.</p>
          </div>
          <p>2020 -2024</p>
        </div>
      </section>
    </Reveal>
  );
};

const Skills = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold dark:text-[#E3E3E3]">Skills</h2>
      <div className="mt-4 flex items-center flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 border border-[#242223] dark:border-[#989898] dark:text-[#E4E4E4]"
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
