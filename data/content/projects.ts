import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,

    title: "EverestGym",
    desc: "Un proyecto para un gimnasio local",
    img: "/static/projects/Everest.png",
    link: "https://dvcanache.github.io/EverestGym/",
    github: "https://github.com/dvcanache/EverestGym",
    tags: ["React", "TailwindCSS", "CSS"],
  }, 
  {
    id: 1,
    title: "Dd Portafolio",
    desc: "Portafolio personal",
    img: "/static/projects/DdPortafolio.png",
    link: "https://portafoliodd.netlify.app/",
    github: "https://github.com/dvcanache/DdPortafolio",
    tags: ["NextJS", "TailwindCSS", "CSS"],
  },
  {
    id: 2,
    title: "UnNuevoDia",
    desc: "Fundacion benefica",
    img: "/static/projects/UnNuevoDia.png",
    link: "https://unnuevodia.netlify.app/",
    github: "https://github.com/dvcanache/UnNuevoDia",
    tags: ["NextJS", "TailwindCSS", "CSS"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
