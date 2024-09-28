'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from './services/Reduces/redux';

export default function Home() {
  const router = useRouter();
  const [connected, setConnected] = useState<boolean>(true);

  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!currentUser) {
      setConnected(false);
    } else {
      setConnected(true);
    }
  }, [currentUser]);

  const handleLoginClick = () => {
    router.push('/einloggen');
  };

  const handleSignupClick = () => {
    router.push('/anmelden');
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-200">
          Willkommen auf unserer Webseite!
        </h1>
        <p className="text-gray-300 mt-4">
          Ihre Webseite in wenigen Klicks – Starten Sie jetzt!
        </p>
      </header>

      {/* Hauptbereich */}
      <main className="flex justify-between items-center bg-gray-800 p-8 rounded-lg shadow-md mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Wir wollen mehr auf Ihrer Webseite wissen.
          </h2>
          <p className="text-gray-400 mt-4">
            Wir sind eine Angebotsanwendung. Wenn Sie eine Website erstellen
            möchten, benötigen wir die folgenden Informationen:
          </p>
          <ul className="list-disc ml-5 text-gray-400">
            <li>Ihre Bilder</li>
            <li>Den gewünschten Domainnamen für Ihre Website</li>
            <li>Den Inhalt Ihrer Seiten</li>
            <li>Ihre Öffnungszeiten</li>
            <li>Ihre Kontaktdaten</li>
            <li>
              und weitere wichtige Informationen für die Erstellung Ihrer
              Website
            </li>
          </ul>
          <p className="text-gray-400">
            Sobald alle diese Schritte abgeschlossen sind, können wir mit der
            Erstellung Ihrer Website beginnen.
          </p>
        </div>

        {!connected && (
          <div className="flex space-x-4">
            <button
              className="bg-green-700 text-white p-3 rounded-lg shadow-lg whitespace-nowrap"
              onClick={handleLoginClick}>
              Einloggen
            </button>
            <button
              className="bg-cyan-700 text-white p-3 rounded-lg shadow-lg whitespace-nowrap"
              onClick={handleSignupClick}>
              Anmelden
            </button>
          </div>
        )}
      </main>

      {/* Inhaltsblöcke */}
      <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200">
            Webseiten erstellen
          </h3>
          <p className="text-gray-400 mt-4">
            Sie können Informationen über gewünschte Webseiten eingeben. Sie
            können auch Ihre Webseiten bearbeiten oder löschen.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200">
            Seiten erstellen
          </h3>
          <p className="text-gray-400 mt-4">
            Sie können Informationen über gewünschte Seiten eingeben (für
            erstellte Webseiten). Sie können nicht nur Ihre Seiten bearbeiten,
            sondern auch löschen.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200">
            Status Ihrer Webseite sehen
          </h3>
          <p className="text-gray-400 mt-4">
            Sie können den Fortschritt der Erstellung Ihrer Webseite in Echtzeit
            sehen.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200">Nachrichten</h3>
          <p className="text-gray-400 mt-4">
            Sie können Ihrem Entwickler schreiben und ihm Fragen stellen.
          </p>
        </div>
      </div>
    </div>
  );
}
