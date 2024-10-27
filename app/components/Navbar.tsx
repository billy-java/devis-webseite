'use client';

import React, { useEffect, useState } from 'react';
import { menus } from '../lib/Arrays/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Notez que c'est 'next/navigation'
import { RootState } from '../services/Reduces/redux';
import { useDispatch, useSelector } from 'react-redux';

import { aLLupdateWebseite__Hilfe } from '../services/Reduces/webseiten_Slice';
import { I_Seite } from '../lib/Interfaces/I_Seite';
import { I_Webseite } from '../lib/Interfaces/I_Webseite';
import { logout } from '../services/Reduces/authSLICE';

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const webseiten = useSelector((state: RootState) => state.webseiten);
  const messages = useSelector((state: RootState) => state.messages);
  const users = useSelector((state: RootState) => state.users);
  const msgAdmin = users.find((el) => el.id === '3')!.messages;

  const seiten = useSelector((state: RootState) => state.seiten);

  const [anzahlWebseiten, setAnzahlWebseiten] = useState(0);
  const [anzahlNeueMessages, setAnzahlNeueMessages] = useState(0);
  const [kunde, setKunde] = useState<boolean>(false);

  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (currentUser) {
      const aktuelUser = users.find((el) => el.id === currentUser.id);
      if (aktuelUser) {
        const allMessages = [...msgAdmin, ...aktuelUser.messages];

        const unreadCount = allMessages.filter(
          (message) => !message.istGelesen && !message.istGelesen
        ).length;
        setAnzahlNeueMessages(unreadCount);
      }

      const ichIndex = users.findIndex((el) => el.id === currentUser.id);

      setKunde(ichIndex !== -1 && users[ichIndex].status === 'KUNDE');

      const meineWebseiten = webseiten.filter(
        (el) => el.user_id === currentUser.id
      );
      setAnzahlWebseiten(meineWebseiten.length);
    }
  }, [currentUser, messages, msgAdmin, router, users, webseiten]);

  useEffect(() => {
    loadDashboard(seiten, webseiten);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadDashboard(pages: I_Seite[], sitesWeb: I_Webseite[]) {
    const updatedSitesWeb = sitesWeb.map((sss) => {
      // Créer une copie de la configuration
      const configuration = {
        standart: false,
        startseite: false,
        contact: false,
        uberuns: false,
        datenschutz: false,
        impressum: false,
      };

      // Vérifie si `sss.configuration` existe et le copier
      if (sss.configuration) {
        Object.assign(configuration, sss.configuration);
      }

      // Réinitialiser toutes les configurations à false
      configuration.standart = false;
      configuration.startseite = false;
      configuration.contact = false;
      configuration.uberuns = false;
      configuration.datenschutz = false;
      configuration.impressum = false;

      pages.forEach((ppp) => {
        if (ppp.wb_id === sss.id) {
          switch (ppp.kathegorie) {
            case 'STANDART':
              configuration.standart = true;
              break;
            case 'STARTSEITE':
              configuration.startseite = true;
              break;
            case 'KONTAKT':
              configuration.contact = true;
              break;
            case 'UEBER UNS':
              configuration.uberuns = true;
              break;
            case 'DATENSCHUTZ':
              configuration.datenschutz = true;
              break;
            case 'IMPRESSUM':
              configuration.impressum = true;
              break;
          }
        }
      });

      // Retourner un nouvel objet avec la configuration mise à jour
      return { ...sss, configuration };
    });

    // Envoyer le nouvel array dans Redux
    dispatch(aLLupdateWebseite__Hilfe(updatedSitesWeb));
  }

  const handleLogout = () => {
    localStorage.clear();

    alert(currentUser ? currentUser.id : 'null');
    dispatch(logout());

    router.push('/');
  };

  return (
    <aside className="w-[90px] md:w-[15rem] top-0 left-0" aria-label="Sidebar">
      <div className="h-screen min-h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menus.map((el, index) => {
            if (el.titre === 'Sich ausloggen') {
              return (
                currentUser && (
                  <li key={index}>
                    <button
                      onClick={handleLogout}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      {el.icon}
                      <span className="hidden md:block flex-1 ms-3 whitespace-nowrap">
                        {el.titre}
                      </span>
                    </button>
                  </li>
                )
              );
            } else if (kunde && el.titre === 'Users (nur Admin)') {
              return;
            } else {
              return (
                <li key={index}>
                  <Link
                    href={el.url}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    {el.icon}
                    <span className="hidden md:block flex-1 ms-3 whitespace-nowrap">
                      {el.titre}
                    </span>
                    {el.label !== null && (
                      <span
                        className={`${
                          typeof el.label === 'number' ? '' : 'hidden md:block'
                        } items-center justify-center px-2.5 py-0.5 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-blue-600 dark:text-gray-300`}>
                        {el.titre === 'Webseiten'
                          ? anzahlWebseiten
                          : el.titre === 'Inbox'
                          ? anzahlNeueMessages
                          : el.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
