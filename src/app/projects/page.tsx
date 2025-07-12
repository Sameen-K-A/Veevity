import ProjectsHero from "@/components/projects/HeroSection";
import { ProjectSection } from "@/components/projects/ProjectSection";
import Spinner from "@/components/spline/Spinner";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <ProjectsHero />
        <Spinner />
      </div>
      <ProjectSection />
    </div>
  );
};