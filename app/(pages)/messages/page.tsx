'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { I_Message } from '@/app/lib/Interfaces/I_Message';
import Chat from './Chat';
import { RootState } from '@/app/services/Reduces/redux';
import { format } from 'date-fns';
import {
  updateAllMessage__Hilfe,
  updateMessage__Hilfe,
} from '@/app/services/Reduces/messages_Slice';
import { useRouter } from 'next/navigation';
import { updateCurrentMessages } from '@/app/services/Reduces/authSLICE';

const Messages: React.FC = () => {
  const router = useRouter();
  const otherUserId = '1';
  const empfaenger = 'Billy revever';

  const dispatch = useDispatch();

  const [messages, setMessages] = useState<I_Message[]>([]);

  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    } else {
      updateMessages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, router]);

  function updateMessages() {
    if (currentUser && currentUser.currentMessages.length > 0) {
      const meineMessages = currentUser.currentMessages.filter(
        (el) =>
          el.senderID === currentUser.id || el.empfaengerID === currentUser.id
      );

      meineMessages.forEach((message) => {
        dispatch(updateMessage__Hilfe({ ...message, gelesen: true }));
      });

      setMessages(meineMessages);
    }
  }

  const handleSendMessage = (messageContent: string) => {
    const newMessage: I_Message = {
      id: Math.random().toString(36).substr(2, 9), // Générer un ID unique
      senderID: currentUser ? currentUser.id : '',
      senderVorname: 'Alice',
      empfaengerID: otherUserId,
      text: messageContent,
      sendungszeit: format(new Date(), 'yyyy-MM-dd'),
      tag: format(new Date(), 'HH:MM'),
      isSent: true,
      gelesen: false,
      delete: false,
    };

    // Ajouter le nouveau message à la liste
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    dispatch(updateCurrentMessages(messages));
    dispatch(updateAllMessage__Hilfe(messages));
  };

  return (
    <div className="h-screen flex flex-col">
      <h1 className="mt-10 mb-20 text-4xl font-bold text-center">
        {empfaenger}
      </h1>
      <Chat
        messages={messages}
        currentUserId={currentUser ? currentUser.id : ''}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Messages;
