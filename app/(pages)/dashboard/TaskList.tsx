'use client';

import React from 'react';

interface I_Tasks {
  standart: boolean;
  startseite: boolean;
  contact: boolean;
  uberuns: boolean;
  datenschutz: boolean;
  impressum: boolean;
}
interface I_TaskListProps {
  setTasks: React.Dispatch<React.SetStateAction<I_Tasks>>; // Correctement typé pour setTasks
  tasks: I_Tasks; // Passe l'état des tâches complet
}

const TaskList: React.FC<I_TaskListProps> = ({ setTasks, tasks }) => {
  const handleCheckboxChange = (taskName: string) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskName as keyof typeof prevTasks]:
        !prevTasks[taskName as keyof typeof prevTasks],
    }));
  };

  function getText(taskName: string) {
    return taskName === 'standart'
      ? 'Mindestens eine Standart-Seite erstellen.'
      : taskName === 'startseite'
      ? 'Eine Startseite erstellen.'
      : taskName === 'contact'
      ? 'Eine Kontakt-Seite erstellen.'
      : taskName === 'uberuns'
      ? 'Eine Seite "Über Ihre Aktivität"" erstellen.'
      : taskName === 'datenschutz'
      ? 'Eine Datenschutz-Seite erstellen.'
      : 'Eine Impressum-Seite erstellen.';
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 text-gray-200 rounded-md shadow-md mt-20">
      <h2 className="text-4xl mb-3 font-bold text-center">Schon geschafft!</h2>
      <p className="text-lg mb-8">
        Sie sollen diese Seite erstellen, damit wir mit der Erstellung Ihrer
        Webseite anfangen.
      </p>

      <ul className="space-y-3">
        {Object.entries(tasks).map(([taskName, isCompleted]) => (
          <li key={taskName} className="flex items-center">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => handleCheckboxChange(taskName)}
              className="appearance-none mr-6 my-4 w-8 h-8 bg-gray-800 border-2 border-gray-600 rounded-lg checked:bg-blue-600 checked:border-blue-600 transition-all duration-300 cursor-pointer relative focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 hover:bg-gray-700 hover:checked:bg-blue-700"
              style={{
                boxShadow:
                  '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
              }}
            />

            <span
              className={`capitalize font-semibold text-xl ${
                isCompleted ? 'line-through' : ''
              }`}>
              {getText(taskName)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
