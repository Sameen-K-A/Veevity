'use client'

import { SendHorizonal, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { ShineBorder } from "../magicui/shine-border";
import { IMessage } from "@/types/general";
import { MessageSection } from "./MessageSection";

export default function Chatbot() {

  const [isOpen, setIsOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const sendMessage = async (defaultPrompt: string = "") => {
    try {
      const message = defaultPrompt.length ? defaultPrompt : userInput.trim();
      if (!message.length) return;

      setIsGenerating(true);
      setMessages((prev) => ([...prev, { text: message, isUser: true }]));
      setUserInput("");

      const response = await fetch(`/api/chat`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ message: message }),
      });

      if (!response.ok) {
        console.log(response.json());
        throw new Error("Response is not okay")
      };

      const data = await response.json() as IMessage;
      setMessages((prev) => ([...prev, { text: data.text, isUser: data.isUser }]))

    } catch (error) {
      console.error(error)
    } finally {
      inputRef.current?.focus();
      setIsGenerating(false);
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isGenerating) {
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="fixed flex border-2 justify-center items-center bg-black bottom-4 right-4 md:bottom-8 md:right-8 shadow-[0px_0px_31px_0px_#47b6ff] h-13 w-13 z-40 cursor-pointer rounded-full">
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
        className="w-90 h-fit p-1 mb-2 shadow-2xl border bg-gradient-to-r from-muted via-black to-muted rounded-2xl overflow-hidden"
        align="end"
        side="top"
      >
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="bg-gradient-to-b from-white to-gray-300/50 bg-clip-text w-fit text-lg font-bold leading-none text-transparent">Veevity-AI</span>
          </div>
        </div>

        <MessageSection
          messages={messages}
          bottomRef={bottomRef}
          sendMessage={sendMessage}
          isGenerating={isGenerating}
        />

        <div className="flex items-center space-x-2 pt-3">
          <input
            placeholder="Ask your question?"
            autoFocus
            ref={inputRef}
            readOnly={isGenerating}
            onKeyDown={handleKeyDown}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 rounded-2xl h-9 outline-1 focus:outline-1 px-3 focus:border-purple-500 focus:ring-purple-500 placeholder:text-sm"
          />

          <div className="w-9 flex justify-center items-center">
            {!isGenerating ? (
              <button
                onClick={() => sendMessage()}
                disabled={isGenerating || !userInput.trim().length}
                className="flex items-center justify-center cursor-pointer h-9 w-9 rounded-full bg-gradient-to-r from-[#47b6ff] to-[#007acc] text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <SendHorizonal className="h-4 w-4 m-0 p-0" />
              </button>
            ) : (
              <span className="relative flex size-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#47b6ff] opacity-75"></span>
                <span className="relative inline-flex size-5 rounded-full bg-[#47b6ff]"></span>
              </span>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
};