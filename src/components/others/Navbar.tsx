'use client'

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { HiMiniBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed top-0 z-10 w-screen py-10 px-5">
      <div className="max-w-4xl navbar-border mx-auto rounded-full p-2 flex items-center justify-between h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-black/40">
        <span
          className="p-3 cursor-pointer whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-xl font-bold leading-none text-transparent"
          onClick={() => router.push("/")}
        >
          Veevity
        </span>

        <div className="hidden sm:block">
          <div className="flex items-center gap-1">
            <div className="py-3 px-5 cursor-pointer rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-black/20 hover:bg-white/10 transition-colors duration-600 w-fit">
              Projects
            </div>
            <div
              onClick={() => router.push("/about-us")}
              className="py-3 px-5 cursor-pointer rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-black/20 hover:bg-white/10 transition-colors duration-600 w-fit">
              About Us
            </div>
            <RainbowButton
              className="rounded-full py-3 px-5 h-full ml-5 text-white"
              onClick={() => router.push("/start-project")}
            >
              Start a project
            </RainbowButton>
          </div>
        </div>

        <div className="block sm:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <div className="p-3 cursor-pointer rounded-full hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-white/10 transition-colors duration-600 w-fit">
                <DropdownMenuTrigger asChild>
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiXMark className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiMiniBars3CenterLeft className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DropdownMenuTrigger>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 mt-2 w-56 rounded-3xl bg-black/70 backdrop-blur-sm border border-white/10">
              <DropdownMenuItem className="focus:bg-muted/50 rounded-3xl overflow-hidden focus:text-white p-3 cursor-pointer">
                Projects
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-muted/50 rounded-3xl focus:text-white p-3 cursor-pointer">
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 mt-1 rounded-lg overflow-hidden cursor-pointer focus:bg-transparent">
                <RainbowButton
                  className="w-full rounded-full py-3 px-5 text-white"
                  onClick={() => router.push("/start-project")}
                >
                  Start a project
                </RainbowButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}