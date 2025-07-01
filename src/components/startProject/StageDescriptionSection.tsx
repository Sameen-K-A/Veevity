
import { projectHandleSteps } from "@/constants/projectHandleSteps";
import { ShineBorder } from "../magicui/shine-border";
import FadeInOnView from "../others/animation/FadeIn";

interface IStageDescriptionProps {
  ref: React.Ref<(HTMLDivElement | null)[]>;
}

export default function StageDescription({ ref }: IStageDescriptionProps) {

  const setRef = (id: number) => (el: HTMLDivElement | null) => {
    if (ref && typeof ref === 'object') {
      (ref as React.MutableRefObject<(HTMLDivElement | null)[]>).current[id] = el;
    }
  };

  return (
    <div className="gradient-bg-5">
      <div className="max-w-6xl mx-auto p-4 py-15 space-y-20">
        {projectHandleSteps.map((stage, index) => {
          const isEven = index % 2 === 1;

          return (
            <FadeInOnView key={stage.id}>
              <div
                ref={setRef(stage.id)}
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 space-y-6 max-w-4xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gradient-to-t from-white/30 shadow to-transparent w-8 h-8 flex justify-center items-center text-[13px] pb-[1px] shadow-white/50">
                      {stage.id}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {stage.heading}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-0 border-transparent h-full rounded-full">
                      <ShineBorder shineColor={["#9900ff"]} borderWidth={3} />
                    </div>
                    <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed pl-10">
                      {stage.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pl-10">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                      Step {stage.id} of {projectHandleSteps.length}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInOnView>
          );
        })}
      </div>
    </div>
  );
};