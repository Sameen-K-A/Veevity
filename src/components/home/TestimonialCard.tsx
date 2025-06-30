"use client"

import { MagicCard } from "@/components/magicui/magic-card"

export function TestimonialCard() {
  return (
    <MagicCard gradientColor={"#262626"} className="p-4 sm:p-6 rounded-2xl">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">Company Name</h3>
            <p className="text-muted-foreground text-sm">Short description</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <blockquote className="text-muted-foreground text-sm leading-relaxed">
          &quot;Veevity has been a game-changer for our business! Their innovative approach and expert guidance helped us
          expand our reach and grow faster than we ever thought possible. The team&apos;s dedication, knowledge, and support
          made every step of the process seamless. Highly recommend Veevity for anyone looking to take their business to
          the next level!&quot;
        </blockquote>

        <div className="flex items-center space-x-3 pt-2">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">N</span>
          </div>
          <div>
            <p className="text-sm font-medium">Name | Role</p>
          </div>
        </div>
      </div>
    </MagicCard>
  )
};