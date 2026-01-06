import React, { useState } from "react";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>

      <div className="border p-2 h-96 overflow-y-auto flex flex-col">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 my-1 rounded max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-100 self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <ChatInput userId="1" onNewMessage={addMessage} />
    </div>
  );
}

export default App;