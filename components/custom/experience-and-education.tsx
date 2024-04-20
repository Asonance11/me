import { skills } from '@/lib/data';
import React from 'react';

const ExperienceAndEducation = () => {
  return (
    <section className="mt-20">
      <h1 className="text-2xl dark:text-[#E3E3E3] font-semibold">
        Experience and Education
      </h1>
      <Experience />
      <Education />
      <Skills />
    </section>
  );
};

const Experience = () => {
  return (
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
  );
};

const Education = () => {
  return (
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
  );
};

const Skills = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold dark:text-[#E3E3E3]">Skills</h2>
      <div className="mt-4 flex items-center flex-wrap gap-2">
        {skills.map((skill) => (
          <div className="px-4 py-2 border border-[#242223] dark:border-[#989898] dark:text-[#E4E4E4]">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
