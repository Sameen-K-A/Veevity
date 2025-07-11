import { IProjects } from "@/types/general";
import Image from "next/image";

interface IProjectCardProps {
  project: IProjects;
  imagePosition: "left" | "right";
}

export function ProjectCard({ project, imagePosition }: IProjectCardProps) {
  return (
    <div
      className={`w-full mt-5 flex flex-col ${imagePosition === "right" ? 'md:flex-row bg-gradient-to-r from-muted/20 via-transparent to-muted/70' : 'md:flex-row-reverse bg-gradient-to-r from-muted/70 via-transparent to-muted/20'} border rounded-2xl overflow-hidden p-6 gap-6`}>
      <div className="flex my-auto flex-col justify-start w-full md:w-1/2">
        <h2 className="text-2xl font-semibold">{project.name}</h2>
        <h3 className="sm:text-lg mt-1 text-primary">{project.sub_heading}</h3>
        <p className="mt-4 text-muted-foreground not-sm:text-sm">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tag.map((tag: string, index: number) => (
            <span key={index} className="px-3 py-1 text-sm bg-white/10 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 aspect-video border relative rounded-2xl overflow-hidden">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </a>
      </div>
    </div>
  );
};