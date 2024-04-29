import React from "react";
import Reveal from "@/components/utils/Reveal";

const PersonalInfo = () => {
  return (
    <Reveal>
      <section className="min-h-screen flex items-center mt-[-150px]">
        <div className="lg:max-w-[65%] mt-20">
          <h4 className="text-lg">Hi, I&apos;m Samuel Oluwadabira Adigun.</h4>
          <h2 className="mt-4 text-5xl font-bold dark:text-[#E3E3E3]">
            I&apos;m a software developer based in Ibadan, Nigeria.
          </h2>
          <p className="mt-4 text-base">
            I&apos;m deeply passionate about crafting applications that tackle
            real-world challenges and contribute positively to society. At the
            moment, I&apos;m actively seeking new opportunities while unwinding
            with my favorite pastimes: listening to music and reading different
            forms of literature.
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default PersonalInfo;
