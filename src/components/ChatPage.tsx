"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import ChatMessage from "@/components/Chat";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<
    { message: string; sender: "user" | "bot" }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [fileContent, setFileContent] = useState(""); // New state for file content
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message") as string;
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, sender: "user" },
    ]);
    setNewMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/qa", {
        question: message,
        context: fileContent,
      });
      console.log(response.data);
      const botMessage = response.data.answer || "No response from bot";

      setMessages((prevMessages) => [
        ...prevMessages,
        { message: botMessage, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error calling the API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: "Error occurred while getting response from the bot.",
          sender: "bot",
        },
      ]);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setNewMessage("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
    console.log("New chat session started");
  };

  return (
    <>
      <div className="fixed w-[720px] mt-10 min-h-screen flex flex-col justify-center items-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload} // Handle file upload
          className="ml-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
        />
        {/* <p>{fileContent}</p> */}
        <div className="w-[720px] bg-white p-4 rounded-lg shadow-lg overflow-hidden">
          <div className="flex  flex-col h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.message}
                sender={msg.sender}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-2 mt-4"
          >
            <input
              ref={inputRef}
              type="text"
              name="message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 rounded-full py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
              autoComplete="off"
            />

            <button
              type="submit"
              className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              Send
            </button>
            <button
              type="button"
              className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
              onClick={handleNewChat}
            >
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
