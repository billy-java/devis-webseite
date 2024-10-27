// pages/chat.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ChatContainer from './ChatContainer';
import { T_Message } from '@/app/lib/Interfaces/I_User';
import { RootState } from '@/app/services/Reduces/redux';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { format, parseISO } from 'date-fns';

const ChatPage: React.FC = () => {
  const router = useRouter();

  const [messages, setMessages] = useState<T_Message[]>([]);

  const usersList = useSelector((state: RootState) => state.users);
  const msgAdmin = usersList.find((el) => el.id === '3')!.messages;

  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    } else {
      const aktuelUser = usersList.find((el) => el.id === currentUser.id);
      if (aktuelUser) {
        const allMessages = [...msgAdmin, ...aktuelUser.messages];

        // Tri des messages par date et heure
        allMessages.sort((a, b) => {
          const dateA = parseISO(a.sendungszeit);
          const dateB = parseISO(b.sendungszeit);
          return dateA.getTime() - dateB.getTime();
        });

        setMessages(allMessages);
      }
    }
  }, [currentUser, msgAdmin, router, usersList]);

  // Remet le compteur des messages non lus à zéro à l'ouverture du chat
  /*  useEffect(() => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        !message.istSender && !message.istSender
          ? { ...message, istSender: true }
          : message
      )
    );
  }, []);  */

  // Fonction pour ajouter un nouveau message
  const handleSendMessage = (text: string) => {
    const newMessage: T_Message = {
      id: messages.length + 1,
      text,
      empfaengerID: '3',
      istGelesen: true,
      sendungszeit: format(new Date(2024, 10, 25, 9, 0), 'yyyy-MM-dd HH:mm'),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="relative h-screen">
      <ChatContainer
        ich={'3'}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatPage;
