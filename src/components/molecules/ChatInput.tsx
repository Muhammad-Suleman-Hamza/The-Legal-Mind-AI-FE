import { useState } from "react";
import Button from "../../components/atoms/Button";

interface ChatInputProps {
  onSend: (msg: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border rounded px-2 py-1"
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
}
