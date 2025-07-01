'use client'

import { ProjectHandling } from "@/components/startProject/ProjectHandling";
import HeroSection from "@/components/startProject/HeroSection";
import StageDescription from "@/components/startProject/StageDescriptionSection";
import { useRef } from "react";
import Calendly from "@/components/startProject/Calendly";

export default function Home() {
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const calendarRef = useRef<(HTMLDivElement | null)>(null)
  const calendyUrl = process.env.NEXT_PUBLIC_CALENDY_URL as string;

  const scrollToDescription = (id: number) => {
    const ref = descriptionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToCalendar = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <div className="w-full min-h-screen">
      <HeroSection
        scrollToCalendar={scrollToCalendar}
      />
      <ProjectHandling
        scrollToDescription={scrollToDescription}
      />
      <StageDescription
        ref={descriptionRefs}
      />
      <Calendly
        ref={calendarRef}
        url={calendyUrl}
      />
      <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};