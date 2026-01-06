import React, { useState } from "react";

//Chat input component handles user typing and sending messages
function ChatInput({ userId, onNewMessage }) {
  const [text, setText] = useState(""); //The current input text
  const [loading, setLoading] = useState(false); //Loading state while sending

  const sendMessage = async () => {
    if (!text.trim()) return; //Ignoring empty messages

    //Showing the user's message
    onNewMessage({ sender: "user", text });
    
    setLoading(true);

    try {
      //Sending messages to backend
      const res = await fetch("http://localhost:5050/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          message: text,
        }),
      });

      const data = await res.json();

      //The ChatBot's reply
      onNewMessage({ sender: "bot", text: data.reply });
    } catch (err) {
      //Showing error if backend is not connected
      onNewMessage({
        sender: "bot",
        text: "❌ Could not connect to backend",
      });
    }

    setText("");
    setLoading(false); //Resetting loading state
  };

  return (
    <div className="flex mt-4">
      <input
        className="border flex-1 p-2 rounded-l"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        className="bg-blue-500 text-white px-4 rounded-r"
        onClick={sendMessage}
        disabled={loading} //Preventing multiple sends while loading
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}

export default ChatInput;