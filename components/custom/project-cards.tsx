import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Github, Link2 } from "lucide-react";
import { IProject } from "@/lib/data";

interface ProjectCardsProps {
  project: IProject;
}

const ProjectCards = ({ project }: ProjectCardsProps) => {
  const { name, description, github, tech, live } = project;

  return (
    <Card className="bg-transparent dark:bg-transparent border-[#242223] dark:border-[#989898] ">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle>{name}</CardTitle>
        <div className="flex items-center gap-2">
          <Link href={github}>
            <Github className="h-5 w-5" />
          </Link>

          {live && (
            <Link href={live}>
              <Link2 className="h-5 w-5" />
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="dark:text-[#E4E4E4]">{description}</p>

        <div className="flex items-center gap-2 flex-wrap mt-4">
          {tech.map((tec, index) => (
            <div
              key={index}
              className="px-2 py-2 border border-[#242223] dark:border-[#989898] dark:text-[#E4E4E4]"
            >
              {tec}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCards;
