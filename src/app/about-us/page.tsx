import HeroSection from "@/components/about-us/HeroSection";
import Services from "@/components/about-us/Services";
import Gitness from "@/components/spline/Gitness";

export default function Home() {

  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <HeroSection />
        <Gitness />
      </div>
      <Services />
      <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};