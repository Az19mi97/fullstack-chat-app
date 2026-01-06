import React, { useState } from "react";
import { sendMessage } from "../services/api";

const ChatInput = ({ userId, onNewMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      // Send besked til backend
      const reply = await sendMessage(userId, message);

      // Callback til parent (App.js) for at tilføje både brugerbesked og AI-svar
      onNewMessage({ sender: "user", text: message });
      onNewMessage({ sender: "bot", text: reply });

      setMessage(""); // tøm inputfelt
    } catch (error) {
      console.error("Fejl ved sending:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Skriv din besked..."
        className="flex-1 border p-2 rounded"
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;