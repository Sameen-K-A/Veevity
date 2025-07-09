import FadeInOnView from "../others/animation/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center z-[1] text-center">
        <FadeInOnView>
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-400 py-4 bg-clip-text text-transparent">
            Veevity
          </h3>
          <p className="leading-relaxed text-sm md:text-lg max-w-3xl mt-5">We build innovative digital products and help businesses thrive online through web development, apps, social media management, digital marketing, and AI automation.</p>
        </FadeInOnView>
        <div className="bg-gradient-to-t from-black via-black to-transparent w-full absolute bottom-0 h-48" />
      </div>
    </section>
  );
};