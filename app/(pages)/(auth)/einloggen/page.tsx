'use client';

import React, { useState } from 'react';
import { labelCSS } from '@/app/lib/Methodes/methodes';
import { RootState } from '@/app/services/Reduces/redux';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from '@/app/services/Reduces/authSLICE';
import { updateBenutzer__Hilfe } from '@/app/services/Reduces/benutzer_Slice';

const Einloggen = () => {
  const router = useRouter();
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  
  const [passwort, setPasswort] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const sichEinloggen = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() && passwort.trim()) {
      const user = users.find((el) => el.email === email);

      if (user) {
        if (user.passwort === passwort) {
          const newUser = { ...user, online: true }!;

          dispatch(updateBenutzer__Hilfe(newUser));
        
          const currentU = { id: user.id, info: "einloggen" }
          dispatch(login(currentU));
          router.push('/dashboard');
        } else {
          setError('passwort');
        }
      } else {
        setError('registrieren');
      }
    } else {
      setError('Bitte füllen Sie alle Felder aus.');
    }
  };

  const zuruecksetzenHTML = (
    <p className="my-6 text-center text-lg">
      Ihr Passwort ist falsch! Bitte versuchen Sie es erneut.
      <span className="font-semibold text-red-400">
        <a href="/passwort">{"  Passwort zurücksetzen!"}</a>
      </span>
    </p>
  );

  const registrierenHTML = (
    <p className="my-6 text-center text-lg">
      Kein Konto gefunden. Bitte
      <span className="font-semibold text-red-400">
        <a href="/anmelden">{' registrieren Sie '}</a>
      </span>
      sich.
    </p>
  );

  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-[700px]">
        <h2 className="text-gray-100 text-center text-3xl">Einloggen</h2>
        <form
          onSubmit={sichEinloggen}
          className="my-10 px-4 py-8 border rounded-md border-gray-700">
          <div className="mb-5">
            <label htmlFor="email" className={labelCSS}>
              E-Mail-Adresse
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail-Adresse eingeben"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className={labelCSS}>
              Passwort
            </label>
            <input
              onChange={(e) => setPasswort(e.target.value)}
              type="password"
              name="passwort"
              id="passwort"
              placeholder="Passwort eingeben"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {error &&
            (error === 'passwort' ? (
              zuruecksetzenHTML
            ) : error === 'registrieren' ? (
              registrierenHTML
            ) : (
              <p className="my-6 text-center text-lg text-red-400">{error}</p>
            ))}

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-indigo-600 hover:bg-indigo-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Einloggen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Einloggen;
