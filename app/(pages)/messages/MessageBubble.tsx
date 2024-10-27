// components/MessageBubble.tsx
import React from 'react';

type MessageBubbleProps = {
  text: string;
  empfaengerID: string;
  ich: string;
  sendungszeit: string;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  empfaengerID,
  ich,
  sendungszeit,
}) => {
  // Formatage de la date en heures et minutes
  const formattedDate = new Date(sendungszeit).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`flex ${
        empfaengerID === ich ? 'justify-end' : 'justify-start'
      } mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg text-black ${
          empfaengerID === ich ? 'bg-blue-500' : 'bg-gray-300 text-gray-800'
        }`}>
        <div>{text}</div>
        <div className="text-xs text-gray-700 mt-1 text-right">
          {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
