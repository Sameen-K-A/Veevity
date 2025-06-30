import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import HeroSection from "@/components/home/HeroSection";
import { ShineBorderDemo } from "@/components/home/ProjectHandling";
import { TechnologyMarqee } from "@/components/home/TechnologyMarqee";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <TechnologyMarqee />
      <ClientTestimonials />
      <ShineBorderDemo />
      <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};