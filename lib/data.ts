export interface IProject {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

export const skills = [
  "Typescript/Javascript",
  "C",
  "Next.Js/React",
  "Node JS",
  "Express.JS",
  "Tailwind CSS",
  "PostgreSQL",
  "mySQL",
  "MongoDB",
  "Git/Github",
  "Neovim/Vim",
];

export const projects: IProject[] = [
  {
    name: "Eduride",
    description:
      "The system enables students to book rides within the school campus, with drivers managing ride assignments.",
    tech: ["Next.Js", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk"],
    github: "https://github.com/Asonance11/EduRide",
    live: "https://edu-ride.vercel.app/",
  },
  {
    name: "Drocsid",
    description:
      "A fullstack messaging app inspired by discord with channel management, real time messaging, and other essential features.",
    tech: ["Next.Js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk"],
    github: "https://github.com/Asonance11/drocsid",
  },
  {
    name: "Blog API",
    description:
      "An API for writing blogs and managing user data. The system allows users to publish blog posts and manage their account details.",
    tech: ["Express JS", "TypeScript"],
    github: "https://github.com/Asonance11/blog-api",
  },
  {
    name: "Painting Pictures",
    description:
      "A frontend only E-commerce website with a captivating user interface.",
    tech: ["React.JS", "Tailwind CSS", "Vitest"],
    github: "https://github.com/Asonance11/Shopping-Cart",
    live: "https://painting-pictures.vercel.app/",
  },
];
