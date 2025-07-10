import { IMessage } from "@/types/general"
import { RefObject } from "react";
import { DefaultPrompts } from "./DefaultPrompts";

interface IMessageSectionProps {
  messages: IMessage[];
  bottomRef: RefObject<HTMLDivElement | null>
  sendMessage: (defaultPrompt?: string) => Promise<void>
};

export function MessageSection({ messages, bottomRef, sendMessage }: IMessageSectionProps) {
  return (
    <div className="flex-1 py-3 px-1 space-y-4 h-80 overflow-y-scroll bg-muted rounded-2xl hide-scrollbar flex flex-col justify-between">
      {messages.length === 0 ? (
        <div className="mt-auto">
          <DefaultPrompts sendMessage={sendMessage} />
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div className={`flex items-end space-x-2 max-w-[80%] ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
                <div
                  className={`p-2 rounded-2xl text-sm ${message.isUser
                    ? "bg-gradient-to-r from-[#47b6ff] to-[#007acc] text-white rounded-br-md"
                    : "bg-white text-black border rounded-bl-md"
                    }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </>
      )}
    </div>
  );
};