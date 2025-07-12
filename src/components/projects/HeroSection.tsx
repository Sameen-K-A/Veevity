'use client'

import { ChevronsRightIcon } from "lucide-react";
import FadeInOnView from "../others/animation/FadeIn";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center z-[1] text-center max-w-xl mx-auto">
        <FadeInOnView>
          <div className="w-full flex justify-center">
            <h3 className="py-5 text-center bg-gradient-to-r from-[#65dbff] to-white bg-clip-text w-fit text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-transparent">
              Our Latest <br />
              Innovations
            </h3>
          </div>

          <span className="text-muted-foreground">
            View our creations, from budding ventures to market giants.
          </span>

          <button
            onClick={() => window.scrollBy({ top: 400, behavior: "smooth" })}
            className="w-fit px-8 py-3 mt-5 text-sm overflow-hidden navbar-border rounded-2xl mx-auto flex items-center bg-clip-padding backdrop-filter backdrop-blur-sm cursor-pointer active:scale-95 transition-transform"
          >
            View Projects &nbsp;<ChevronsRightIcon size={20} />
          </button>


        </FadeInOnView>
        <div className="bg-gradient-to-t from-black to-transparent w-full absolute bottom-0 h-48" />
      </div>
    </section>
  );
};