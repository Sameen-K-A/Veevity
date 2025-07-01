import { ChevronsRightIcon } from "lucide-react";
import { ShinyButton } from "../magicui/shiny-button";
import FadeInOnView from "../others/animation/FadeIn";

export default function HeroSection() {
  return (
    <FadeInOnView>
      <div className="relative min-h-screen w-full flex items-center justify-center gradient-bg-1 overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("/background/agent-cta-background.webp")`,
            backgroundSize: 'cover',
            backgroundPosition: 'right'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />

        <div className="relative px-5 sm:px-8 md:px-12 lg:px-15 flex flex-col items-center w-full">
          <div className="w-full flex justify-center">
            <h3 className="py-5 text-center bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">
              Turning your <br />
              vision into reality
            </h3>
          </div>

          <span className="text-muted-foreground text-center">We turn your MVP into a launch-ready, winning product.</span>

          <ShinyButton className="w-fit px-8 py-3 mt-5 text-sm md:text-lg">Schedule your call &nbsp;<ChevronsRightIcon /></ShinyButton>
        </div>
      </div>
    </FadeInOnView>
  );
};