// pages/chat.tsx
"use client"

import React, { useEffect, useState } from 'react';
import ChatContainer from './ChatContainer';

type Message = {
  id: number;
  text: string;
  isSender: boolean;
  isRead: boolean;
  sentAt: Date;
};


const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello!', isSender: false, isRead: true, sentAt: new Date('2023-10-25T10:30:00') },
    { id: 2, text: 'Hey! How are you?', isSender: true, isRead: true, sentAt: new Date('2023-10-25T10:31:00') },
    { id: 3, text: 'I am good, thanks!', isSender: false, isRead: false, sentAt: new Date('2023-10-25T10:32:00') },
    { id: 4, text: 'Great to hear!', isSender: true, isRead: false, sentAt: new Date('2023-10-25T10:33:00') },
  ]);

  // Remet le compteur des messages non lus à zéro à l'ouverture du chat
  useEffect(() => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        !message.isRead && !message.isSender ? { ...message, isRead: true } : message
      )
    );
  }, []);

  // Fonction pour ajouter un nouveau message
  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      isSender: true,
      isRead: true,
      sentAt: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="relative h-screen">
      <ChatContainer messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
