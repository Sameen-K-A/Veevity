import { ChevronRight } from "lucide-react";
import { ShineBorder } from "../magicui/shine-border";
import { ShinyButton } from "../magicui/shiny-button";

interface IStepProps {
  id: number
  heading: string;
  sub_heading: string;
}

export default function HandleCard({ id, heading, sub_heading }: IStepProps) {
  return (
    <div className="relative p-4 sm:p-6 rounded-2xl shadow h-full flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      <ShineBorder shineColor={["#A07CFE90"]} />
      <div className="space-y-4 flex-grow">
        <div className="flex items-center gap-1">
          <h3 className="rounded-full bg-gradient-to-t from-white/30 shadow to-transparent w-5 h-5 flex justify-center items-center text-[10px] pb-[1px] shadow-white/50">{id}</h3>
          <h3 className="text-md sm:text-xl font-semibold">{heading}</h3>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm">{sub_heading}</p>
      </div>
      <div className="mt-4">
        <ShinyButton className="text-xs">Learn more <ChevronRight size={13} className="pt-0.5" /></ShinyButton>
      </div>
    </div>
  );
};