'use client';

import { I_User } from '@/app/lib/Interfaces/I_User';
import { getDate_und_Time } from '@/app/lib/Methodes/methodes';
import { RootState } from '@/app/services/Reduces/redux';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Settings = () => {
  const router = useRouter();

  const users = useSelector((state: RootState) => state.users);

  const [user, setUser] = useState<I_User | null>(null);

  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    } else {
      const aktuelUser = users.find((el) => el.id === currentUser.id);
      if (aktuelUser) {
        setUser(aktuelUser);
         }
    }
  }, [currentUser, router, users]);

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className='"bg-gray-800 w-full max-w-lg min-h-[500px]'>
        <h2 className="text-gray-100 text-center text-3xl  mb-10 ">
          Settings!
        </h2>
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 ">
          <div className="flex items-center ">
            {/* Avatar ou icône utilisateur */}
            <div className="bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-200">
                {user?.vorname[0]}
                {user?.nachname[0]}
              </span>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">
                {user?.vorname +
                  ' ' +
                  user?.nachname +
                  ' (id:' +
                  user?.id +
                  ')'}
              </h2>
              <p className="text-sm text-gray-400">Email: {user?.email}</p>
              <p className="text-sm text-gray-400">Tel: {user?.tel}</p>
            </div>
          </div>

          {/* Informations de l'utilisateur */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Genre:</span>
              <span>{user?.genre}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span
                className={`${
                  user?.status === 'ADMIN' ? 'text-green-500' : 'text-blue-400'
                }`}>
                {user?.status === 'ADMIN' ? 'Admin' : 'Kunde'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Adresse:</span>
              <span>
                {user?.strasse +
                  ' ' +
                  user?.hausNr +
                  ', ' +
                  user?.plz +
                  ' ' +
                  user?.stadt +
                  ' (' +
                  user?.land +
                  ').'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">AnmeldungsDatum:</span>
              <span>
                {user && getDate_und_Time(user.anmeldungsDatum).slice(0, -10)}.
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">geburtsdatum:</span>
              <span>
                {user && getDate_und_Time(user.geburtsdatum).slice(0, -10)}.
              </span>
            </div>
          </div>

          {/* Statut en ligne */}
          <div className="mt-6">
            <span
              className={`${
                user?.online ? 'text-emerald-600' : 'text-amber-600'
              } font-medium text-sm`}>
              {user?.online ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
