// components/MessageBubble.tsx
import React from 'react';

type MessageBubbleProps = {
  text: string;
  isSender: boolean;
  sentAt: Date;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  isSender,
  sentAt,
}) => {
  // Formatage de la date en heures et minutes
  const formattedDate = sentAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg text-black ${
          isSender ? 'bg-blue-500' : 'bg-gray-300 text-gray-800'
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
