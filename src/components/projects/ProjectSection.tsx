import { IProjects } from "@/types/general";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/constants/projects";
import FadeInOnView from "../others/animation/FadeIn";

export function ProjectSection() {
  return (
    <div className="px-4 py-20 gradient-bg-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col">
          {projects.map((project: IProjects, index: number) => (
            <FadeInOnView key={index}>
              <ProjectCard
                project={project}
                imagePosition={index % 2 == 1 ? "left" : "right"}
              />
            </FadeInOnView>
          ))}
        </div>
      </div>
    </div>
  )
};