"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import ChatMessage from '@/components/Chat';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ message: string; sender: 'user' | 'bot' }[]>([]);
  const [newMessage, setNewMessage] = useState(''); 
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;
    setMessages((prevMessages) => [...prevMessages, { message, sender: 'user' }]);
    setNewMessage(''); 
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: 'Bot response', sender: 'bot' },
      ]);
    }, 500);
  };

  const handleNewChat = () => {
    setMessages([]);
    setNewMessage(''); 
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
   
    console.log('New chat session started');
  };

  return (
    <div className="fixed w-[720px] mt-10 min-h-screen flex flex-col justify-center items-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-[720px] bg-white p-4 rounded-lg shadow-lg overflow-hidden">
        <div className="flex  flex-col h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.message} sender={msg.sender} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4">
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
  );
};

export default ChatPage;
