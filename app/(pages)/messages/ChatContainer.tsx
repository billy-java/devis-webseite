// components/ChatContainer.tsx
import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import UnreadBadge from './UnreadBadge';

type Message = {
  id: number;
  text: string;
  isSender: boolean;
  isRead: boolean;
  sentAt: Date;
};

type ChatContainerProps = {
  messages: Message[];
  onSendMessage: (text: string) => void;
};

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const unreadCount = messages.filter(
    (message) => !message.isRead && !message.isSender
  ).length;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue(''); // Vide le champ de saisie après envoi
    }
  };

  return (
    <div className="flex flex-col h-full p-4  relative">
      <UnreadBadge count={unreadCount} />

      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            text={message.text}
            isSender={message.isSender}
            sentAt={message.sentAt}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 border-t p-2 ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg text-black focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-black p-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
