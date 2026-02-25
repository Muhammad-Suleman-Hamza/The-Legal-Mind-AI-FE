import { useState } from "react";
import ChatInput from "../../components/molecules/ChatInput";
import { mockStreamResponse } from "../../lib/strean";
import PdfViewer from "../../features/pdf/PdfViewer";

export default function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [highlightedPage, setHighlightedPage] = useState<number | undefined>();

  const handleSend = async (msg: string) => {
    setMessages((prev) => [...prev, `You: ${msg}`]);
    setIsStreaming(true);

    let response = "";
    for await (const chunk of mockStreamResponse()) {
      response += chunk;
      setMessages((prev) => [...prev.slice(0, -1), response]); // simulate streaming
    }

    // Example: append a citation at the end
    response += " [See page 1]";
    setMessages((prev) => [...prev.slice(0, -1), `AI: ${response}`]);
    setIsStreaming(false);
  };

  const handleCitationClick = (page: number) => {
    setHighlightedPage(page);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col h-64 overflow-auto border p-2">
        {messages.map((m, i) => {
          const citationMatch = m.match(/\[See clause page (\d+)\]/);
          const pageNumber = citationMatch ? parseInt(citationMatch[1], 10) : null;

          return (
            <div key={i} className="mb-1">
              {pageNumber ? (
                <span
                  className="text-blue-600 cursor-pointer underline"
                  onClick={() => handleCitationClick(pageNumber)}
                >
                  {m}
                </span>
              ) : (
                m
              )}
            </div>
          );
        })}
        {isStreaming && <div className="italic text-gray-500">AI is typing...</div>}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}
