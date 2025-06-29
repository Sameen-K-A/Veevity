import { RainbowButton } from "../magicui/rainbow-button";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center gradient-bg-1 mt-5">
      <div className="px-5 sm:px-8 md:px-12 lg:px-15 flex flex-col">
        <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">You&rsquo;ll share your</span>
        <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">vision.</span>
        <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">We&rsquo;ll make it</span>
        <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">real.</span>
        <div className="w-fit flex flex-col gap-1">
          <span className="text-muted-foreground mt-10">Building your digital success side by side.</span>
          <RainbowButton className="rounded-full py-6 text-white flex items-center justify-center">
            Start a project <MdKeyboardArrowRight className="mt-0.5" />
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}