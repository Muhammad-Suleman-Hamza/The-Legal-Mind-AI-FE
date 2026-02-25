// src/components/LegalChat.tsx
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";
import { PdfViewer } from "./PdfViewer"; // custom wrapper over react-pdf-viewer

interface ChatMessage {
  id: string;
  text: string;
  citations?: { page: number; paragraph: number }[];
}

// Mock fetch chat history
const fetchMessages = async (): Promise<ChatMessage[]> => {
  return []; // Replace with real API
};

export const LegalChat = () => {
  const { data: messages = [] } = useQuery(["chatHistory"], fetchMessages);
  const [selectedCitation, setSelectedCitation] = useState<{ page: number; paragraph: number } | null>(null);

  return (
    <div className="flex h-full">
      {/* Chat Messages */}
      <div className="w-1/2 border-r">
        <List
          height={600}
          itemCount={messages.length}
          itemSize={60}
          width="100%"
        >
          {({ index, style }) => {
            const msg = messages[index];
            return (
              <div style={style} className="p-2">
                <p>{msg.text}</p>
                {msg.citations?.map((c, i) => (
                  <button
                    key={i}
                    className="text-indigo-600 underline"
                    onClick={() => setSelectedCitation(c)}
                  >
                    View Citation (Page {c.page})
                  </button>
                ))}
              </div>
            );
          }}
        </List>
      </div>

      {/* PDF Viewer with citation highlight */}
      <div className="w-1/2">
        <PdfViewer highlight={selectedCitation} />
      </div>
    </div>
  );
};
