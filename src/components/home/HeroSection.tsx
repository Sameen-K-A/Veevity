'use client'

import { useRouter } from "next/navigation";
import { RainbowButton } from "../magicui/rainbow-button";
import { MdKeyboardArrowRight } from "react-icons/md";
import FadeInOnView from "../others/animation/FadeIn";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="absolute w-full z-1 bottom-0 bg-gradient-to-t from-black via-black to-transparent">
        <FadeInOnView duration={3}>
          <div className="flex flex-col items-center pb-28 md:pb-10">
            <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">You&rsquo;ll share your</span>
            <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">vision.</span>
            <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">We&rsquo;ll make it</span>
            <span className="mb-2 bg-gradient-to-r from-white to-gray-300/60 bg-clip-text w-fit text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">real.</span>
            <RainbowButton
              className="rounded-full py-6 min-w-xs mt-5 text-white flex items-center justify-center"
              onClick={() => router.push("/start-project")}
            >
              Start a project <MdKeyboardArrowRight className="mt-0.5" />
            </RainbowButton>
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
}