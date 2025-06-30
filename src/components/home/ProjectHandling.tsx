import HandleCard from "./HandleCard";
import { projectHandleSteps } from "@/constants/projectHandleSteps";

export function ShineBorderDemo() {
  return (
    <section className="w-full gradient-bg-3">
      <div className="max-w-6xl mx-auto p-4 py-20">
        <h3 className="pb-10 text-center bg-gradient-to-r from-purple-300 to-white bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">Project Stages</h3>
        <div className="grid gap-2 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
          {projectHandleSteps.map((step) => (
            <HandleCard
              key={step.id}
              heading={step.heading}
              sub_heading={step.sub_heading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};