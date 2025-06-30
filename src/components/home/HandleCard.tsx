import { ChevronRight } from "lucide-react";
import { ShineBorder } from "../magicui/shine-border";
import { ShinyButton } from "../magicui/shiny-button";

interface IStepProps {
  heading: string;
  sub_heading: string;
}

export default function HandleCard({ heading, sub_heading }: IStepProps) {
  return (
    <div className="relative p-4 sm:p-6 rounded-2xl shadow">
      <ShineBorder shineColor={["#A07CFE90"]} />
      <div className="space-y-4 h-full">
        <h3 className="text-md sm:text-xl font-semibold">{heading}</h3>
        <p className="text-muted-foreground text-sm">{sub_heading}</p>
        <ShinyButton className="rounded-xl">Learn more <ChevronRight size={13} className="pt-0.5" /></ShinyButton>
      </div>
    </div>
  );
};