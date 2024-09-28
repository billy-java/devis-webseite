'use client';

import React, { useState } from 'react';
import { labelCSS } from '@/app/lib/Methodes/methodes';
import { RootState } from '@/app/services/Reduces/redux';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const PasswordErneuen = () => {
  const router = useRouter();
  const users = useSelector((state: RootState) => state.users);

  const [date, setDate] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const dateHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(format(new Date(e.target.value), 'yyyy-MM-dd'));
  };

  const dateZuruecksetzen = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() && date.trim()) {
      const user = users.find((el) => el.email === email);

      if (user) {
        if (user.geburtsdatum === date) {
          localStorage.removeItem('id');
          localStorage.removeItem('user');
          localStorage.setItem('id', JSON.stringify(user.id));
          router.push('/neu-pass');
        } else {
          setError('Ihre Geburtsdatum ist falsch.');
        }
      } else {
        setError('Kein Konto mit dieser Email-Adresse.');
      }
    } else {
      setError('Bitte füllen Sie alle Felder aus.');
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-[700px]">
        <h2 className="text-gray-100 text-center text-3xl">
          date zurücksetzen
        </h2>
        <form
          onSubmit={dateZuruecksetzen}
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
            <label htmlFor="date" className={labelCSS}>
              Geburtsdatum
            </label>
            <input
              onChange={dateHandle}
              type="date"
              name="date"
              id="date"
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
              Passwort zurücksetzen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordErneuen;
