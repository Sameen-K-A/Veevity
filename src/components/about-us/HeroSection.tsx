import FadeInOnView from "../others/animation/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center z-[1] text-center">
        <FadeInOnView>
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-shadow-lg opacity-90">About</span>
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold text-shadow-lg">
            Veevity
          </h3>
        </FadeInOnView>
        <div className="bg-gradient-to-t from-black via-black to-transparent w-full absolute bottom-0 h-48" />
      </div>
    </section>
  );
};