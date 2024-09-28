import React, { useState } from 'react';
import { I_Message } from '@/app/lib/Interfaces/I_Message';

interface ChatProps {
  messages: I_Message[];
  currentUserId: string;
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({
  messages,
  currentUserId,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState<string>('');

  // Gérer l'envoi de message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // Ne pas envoyer un message vide
    onSendMessage(newMessage); // Appeler la méthode parent pour envoyer le message
    setNewMessage(''); // Réinitialiser le champ de saisie
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages list */}
      <div className="flex flex-col gap-4 p-4 max-h-[80vh] overflow-y-auto flex-grow">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col max-w-[60%] p-3 rounded-lg text-2xl ${
              message.senderID === currentUserId
                ? 'bg-sky-800 text-white self-end'
                : 'bg-green-200 text-black self-start'
            }`}>
            {/* <p className="font-bold mb-1">{message.senderVorname}</p> */}
            <p>{message.text}</p>
            <span
              className={`text-sm mt-1 italic ${
                message.senderID === currentUserId
                  ? 'text-gray-200 self-end'
                  : 'text-gray-800 self-start'
              }`}>
              {message.sendungszeit}
            </span>
          </div>
        ))}
      </div>

      {/* Input & Send button */}
      <div className="flex items-center p-2 border-t border-indigo-400">
        <input
          type="textarea"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 border border-indigo-300 text-gray-900 rounded-lg focus:outline-none"
          placeholder="Eine Nachricht schreiben..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-3 bg-indigo-500 font-semibold text-white rounded-lg hover:bg-indigo-700 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <g id="Send 01">
              <path
                id="icon"
                d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <h3 className="text-white  leading-4 px-2">Send</h3>
        </button>
      </div>
    </div>
  );
};

export default Chat;
