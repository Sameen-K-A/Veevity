'use client'

import { ProjectHandling } from "@/components/startProject/ProjectHandling";
import HeroSection from "@/components/startProject/HeroSection";
import StageDescription from "@/components/startProject/StageDescriptionSection";
import { useRef } from "react";

export default function Home() {
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToDescription = (id: number) => {
    const ref = descriptionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ProjectHandling scrollToDescription={scrollToDescription} />
      <StageDescription ref={descriptionRefs} />
      <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};