import { IMessage } from "@/types/general"
import { RefObject } from "react";
import { DefaultPrompts } from "./DefaultPrompts";
import { Wand } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface IMessageSectionProps {
  messages: IMessage[];
  bottomRef: RefObject<HTMLDivElement | null>
  sendMessage: (defaultPrompt?: string) => Promise<void>
  isGenerating: boolean;
};

export function MessageSection({ messages, bottomRef, sendMessage, isGenerating }: IMessageSectionProps) {
  return (
    <div className="py-3 px-1 gap-2 h-96 overflow-y-scroll bg-muted rounded-2xl custom-scrollbar flex flex-col">
      {messages.length === 0 ? (
        <div className="mt-auto">
          <DefaultPrompts sendMessage={sendMessage} />
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`p-2 rounded-2xl max-w-[85%] text-sm ${message.isUser
                  ? "bg-gradient-to-r from-[#47b6ff] to-[#007acc] text-white rounded-br-md"
                  : "bg-black/50 border rounded-bl-md"
                  }`}
              >
                <ReactMarkdown
                  components={{
                    strong: ({ ...props }) => <strong className="font-bold" {...props} />,
                    em: ({ ...props }) => <em className="italic" {...props} />,
                    a: ({ ...props }) => (
                      <a
                        className="text-blue-500 underline hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                    ul: ({ ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                    ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isGenerating && (
            <span className="flex gap-1 text-xs animate-pulse"><Wand size={16} />Generating...</span>
          )}
          <div ref={bottomRef} />
        </>
      )}
    </div>
  );
};