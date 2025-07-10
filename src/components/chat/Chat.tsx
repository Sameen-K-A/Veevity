'use client'

import { Send, X } from "lucide-react"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { ShineBorder } from "../magicui/shine-border";
import { IMessage } from "@/types/general";

export default function Chatbot() {

  const [isOpen, setIsOpen] = useState(false)
  const [messages] = useState<IMessage[]>([]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="fixed flex border-2 justify-center items-center bottom-8 right-8 shadow-[0px_0px_31px_0px_#47b6ff] h-13 w-13 z-50 cursor-pointer rounded-full">
          <ShineBorder borderWidth={4} shineColor="#47b6ff" />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5 block leading-none text-white" strokeWidth={2} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiSparkles className="h-5 w-5 block leading-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-80 h-fit p-1 mb-2 shadow-2xl border bg-gradient-to-r from-muted via-black to-muted rounded-2xl overflow-hidden"
        align="end"
        side="top"
      >
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="bg-gradient-to-b from-white to-gray-300/50 bg-clip-text w-fit text-lg font-bold leading-none text-transparent">Veevity-AI</span>
          </div>
        </div>

        <div className="flex-1 py-3 px-1 space-y-4 h-80 overflow-y-scroll bg-muted rounded-2xl hide-scrollbar">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div className={`flex items-end space-x-2 max-w-[80%] ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
                <div
                  className={`px-4 py-2 rounded-2xl text-sm ${message.isUser
                    ? "bg-gradient-to-r from-[#47b6ff] to-[#007acc] text-white rounded-br-md"
                    : "bg-white text-black border rounded-bl-md"
                    }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-2 pt-3">
          <input
            placeholder="Ask your question?"
            autoFocus
            className="flex-1 rounded-2xl outline-1 focus:outline-1 px-3 focus:border-purple-500 focus:ring-purple-500 placeholder:text-sm"
          />
          <button className="flex justify-center text-white bg-gradient-to-r from-[#47b6ff] to-[#007acc] items-center bottom-8 right-8 h-9 w-9 cursor-pointer rounded-full">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
};