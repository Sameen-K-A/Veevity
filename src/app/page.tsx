import HeroSection from "@/components/home/HeroSection";
import { TechnologyMarqee } from "@/components/home/TechnologyMarqee";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <TechnologyMarqee />
    </div>
  );
}
