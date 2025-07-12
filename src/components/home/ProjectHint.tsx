'use client'

import { ChevronsRightIcon } from "lucide-react";
import FadeInOnView from "../others/animation/FadeIn";
import { useRouter } from "next/navigation";

export function ProjectHint() {
  const router = useRouter();

  return (
    <section className="w-full gradient-bg-6">
      <div className="max-w-6xl mx-auto p-4 pb-10 pt-40">
        <FadeInOnView>
          <h3 className="text-center pb-5 bg-gradient-to-r from-[#96ddd6] to-white bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">Explore real wins. <br />Ready to add yours?</h3>
          <p className="leading-relaxed mt-2 md:text-lg text-center text-muted-foreground">With over <strong className="text-white">10+ happy clients</strong>, we&apos;re ready to help you build your dream too. <br />See our projects now the market moves fast.</p>
          <button
            className="w-fit px-8 py-3 mt-5 text-sm overflow-hidden navbar-border rounded-2xl mx-auto flex items-center bg-clip-padding backdrop-filter backdrop-blur-sm cursor-pointer active:scale-95 transition-transform"
            onClick={() => router.push("/projects")}
          >
            View Projects &nbsp;<ChevronsRightIcon size={20} />
          </button>
        </FadeInOnView>
      </div>
    </section>
  )
};