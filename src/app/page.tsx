import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import HeroSection from "@/components/home/HeroSection";
import { ProjectHint } from "@/components/home/ProjectHint";
import { TechnologyMarqee } from "@/components/home/TechnologyMarqee";
import Nextbot from "@/components/spline/NextBot";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <HeroSection />
        <Nextbot />
      </div>
      <TechnologyMarqee />
      <ProjectHint />
      <ClientTestimonials />
      <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};