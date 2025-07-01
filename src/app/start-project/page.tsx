import { ProjectHandling } from "@/components/startProject/ProjectHandling";
import HeroSection from "@/components/startProject/HeroSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ProjectHandling />
      <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};