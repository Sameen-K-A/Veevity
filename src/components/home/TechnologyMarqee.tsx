import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { FC } from "react";
import { techStack } from "@/constants/techstack";
import FadeInOnView from "../others/animation/FadeIn";


const TechCard = ({ icon: Icon, name }: { icon: FC<{ size?: number }>; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full mr-20 w-fit cursor-default overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Icon size={30} />
        <figcaption className="text-lg font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function TechnologyMarqee() {
  return (
    <FadeInOnView>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-40 pb-20">
        <Marquee className="[--duration:25s]">
          {techStack.map((tech) => (
            <TechCard key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </FadeInOnView>
  );
};