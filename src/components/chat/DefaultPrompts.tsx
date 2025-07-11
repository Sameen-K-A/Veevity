interface IDefaultPromptsProps {
  sendMessage: (defaultPrompt?: string) => Promise<void>
};

export function DefaultPrompts({ sendMessage }: IDefaultPromptsProps) {

  const questions: string[] = [
    "How can I connect?",
    "What is the procedure to build an MVP?",
    "I need to know about mobile app development."
  ];

  return (
    <div className="flex flex-col gap-1">
      {questions.map((q, index) => (
        <span
          key={index}
          onClick={() => sendMessage(q)}
          className="p-2 py-3 border rounded-2xl text-sm cursor-pointer hover:bg-black/30 transition-colors duration-300">
          {q}
        </span>
      ))}
    </div>
  );
};