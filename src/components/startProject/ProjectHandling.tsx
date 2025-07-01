import FadeInOnView from "../others/animation/FadeIn";
import HandleCard from "../startProject/HandleCard";
import { projectHandleSteps } from "@/constants/projectHandleSteps";

interface IProjectHandlingProps {
  scrollToDescription: (id: number) => void;
};

export function ProjectHandling({ scrollToDescription }: IProjectHandlingProps) {
  return (
    <section className="w-full gradient-bg-3">
      <div className="max-w-6xl mx-auto p-4 py-20">
        <FadeInOnView>
          <h3 className="pb-10 text-center bg-gradient-to-r from-purple-300 to-white bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">Project Stages</h3>
        </FadeInOnView>
        <div className="grid gap-2 sm:gap-3 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
          {projectHandleSteps.map((step) => (
            <FadeInOnView key={step.id}>
              <HandleCard
                id={step.id}
                heading={step.heading}
                sub_heading={step.sub_heading}
                onLearnMore={scrollToDescription}
              />
            </FadeInOnView>
          ))}
        </div>
      </div>
    </section>
  );
};