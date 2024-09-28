'use client';

import React, { useEffect, useState } from 'react';
import { labelCSS } from '@/app/lib/Methodes/methodes';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/app/services/Reduces/redux';
import { updateBenutzer__Hilfe } from '@/app/services/Reduces/benutzer_Slice';
import { login } from '@/app/services/Reduces/authSLICE';

const NeuPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const messageListe = useSelector((state: RootState) => state.messages);

  const [index, setIndex] = useState<string>('');
  const [passwort1, setPasswort1] = useState('');
  const [passwort2, setPasswort2] = useState('');
  const [error, setError] = useState('');
  const [passIdentisch, setPassIdentisch] = useState<boolean>(true);


  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (currentUser) {
      setIndex(currentUser.id);
    } 
  }, [currentUser]);
  
  

  useEffect(() => {
    if (passwort1.trim() && passwort2.trim()) {
      setPassIdentisch(passwort1 === passwort2);
    }

    if (passIdentisch) {
      setError('');
    }
  }, [passwort1, passwort2, passIdentisch]);

  const passwortSpeichern = (e: React.FormEvent) => {
    e.preventDefault();

    if (passIdentisch) {
      const user = { ...users[Number(index)], online: true }!;

      dispatch(updateBenutzer__Hilfe(user));

      const currentU = { id: user.id, info: "einloggen", currentMessages: messageListe.filter(el => el.senderID === user.id || el.empfaengerID === user.id) }
          dispatch(login(currentU));
      router.push('/dashboard');
    } else {
      setError('Die beiden Passwörter müssen identisch sein.');
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-[700px]">
        <h2 className="text-gray-100 text-center text-3xl">
          Neues Passwort festlegen
        </h2>
        <form
          onSubmit={passwortSpeichern}
          className="my-10 px-4 py-8 border rounded-md border-gray-700">
          <div className="mb-5">
            <label htmlFor="passwort1" className={labelCSS}>
              Neues Passwort
            </label>
            <input
              onChange={(e) => setPasswort1(e.target.value)}
              type="password"
              name="passwort1"
              id="passwort1"
              value={passwort1}
              placeholder="Neues Passwort eingeben"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="passwort2" className={labelCSS}>
              Passwort bestätigen
            </label>
            <input
              onChange={(e) => setPasswort2(e.target.value)}
              type="password"
              name="passwort2"
              value={passwort2}
              id="passwort2"
              placeholder="Passwort bestätigen"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {error && (
            <p className="my-6 text-center text-lg text-red-400">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md  bg-indigo-600 hover:bg-indigo-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Passwort speichern !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NeuPassword;
