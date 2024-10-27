'use client';

import { I_User, initialiseUser } from '@/app/lib/Interfaces/I_User';
import React, { useEffect, useState } from 'react';
import { labelCSS } from '@/app/lib/Methodes/methodes';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBenutzer__Hilfe,
  updateBenutzer__Hilfe,
} from '@/app/services/Reduces/benutzer_Slice';
import { RootState } from '@/app/services/Reduces/redux';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  alterUser?: I_User;
}

const Modal_User: React.FC<ModalProps> = ({ isOpen, onClose, alterUser }) => {
  const dispatch = useDispatch();
  const usersList = useSelector((state: RootState) => state.users);

  const [passwort1, setPasswort1] = useState('');
  const [passwort2, setPasswort2] = useState('');
  const [passIdentisch, setPassIdentisch] = useState<boolean>(true);

  const [neuerUser, setNeuerUser] = useState<I_User>(
    initialiseUser(String(usersList.length))
  );

  useEffect(() => {
    if (alterUser) {
      setNeuerUser(alterUser);
      setPasswort1(alterUser.passwort);
      setPasswort2(alterUser.passwort);
    } else {
      setNeuerUser((prevData) => ({ ...prevData }));
    }
  }, [alterUser]);

  useEffect(() => {
    if (!isOpen) {
      setNeuerUser(initialiseUser(String(usersList.length)));
      setPasswort1('');
      setPasswort2('');
    } else if (passwort1.trim() && passwort2.trim()) {
      setPassIdentisch(passwort1 === passwort2);
    }
  }, [isOpen, passwort1, passwort2, usersList.length]);

  if (!isOpen) return null;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNeuerUser((prevData) => ({ ...prevData!, [name]: value }));
  };

  const den_User_Erstellen = (e: React.FormEvent) => {
    
    e.preventDefault();

    if (passIdentisch) {
      const neuerUserAktualisiert = {
        ...neuerUser!,
        passwort: passwort1,
      };

      if (alterUser) {
        dispatch(updateBenutzer__Hilfe(neuerUserAktualisiert));
      } else {
        dispatch(addBenutzer__Hilfe(neuerUserAktualisiert));
      }

      
    }
    onClose();
  };

  /*   const errorEmail = (
    <p className="my-6 text-center text-lg font-semibold text-red-400">
      Ein anderes Konto hat scho die gleiche Email-Adresse1
    </p>
  );
 */
  return (
    <div className="fixed inset-0 bg-opacity-5 flex items-center justify-center z-50 ">
      <div className="bg-gray-700 p-8 relative w-full max-w-3xl mx-4 max-h-[90vh] overflow-auto border-4    border-indigo-600 rounded-md ">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-100"
          onClick={onClose}>
          <svg
            className="w-9 h-9"
            fill="rgb(8 145 178)"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-gray-100 text-center text-3xl mb-4">
          {alterUser ? 'Diesen User ändern' : 'Neuen User erstellen'}!
        </h2>
        <form
          onSubmit={den_User_Erstellen}
          className="my-10 px-4 py-8 border rounded-md border-gray-700">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="vorname" className={labelCSS}>
                  Vorname
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="vorname"
                  id="vorname"
                  value={neuerUser.vorname}
                  placeholder="Vorname"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="nachname" className={labelCSS}>
                  Nachname
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="nachname"
                  id="nachname"
                  value={neuerUser.nachname}
                  placeholder="Nachname"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5 relative">
                <label htmlFor="passwort1" className={labelCSS}>
                  Passwort
                </label>
                <input
                  onChange={(e) => setPasswort1(e.target.value)}
                  type="password"
                  name="passwort1"
                  id="passwort1"
                  value={passwort1}
                  placeholder="Passwort eingeben"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <div className="absolute inset-y-0 right-0 pt-8 pr-3 flex items-center cursor-pointer">
                  {!passIdentisch ? (
                    <p className="text-lg text-red-500">Nicht identisch</p> // Modification ici
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5 relative">
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
                <div className="absolute inset-y-0 right-0 pt-8 pr-3 flex items-center cursor-pointer">
                  {!passIdentisch ? (
                    <p className="text-lg text-red-500">Nicht identisch</p>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="tel" className={labelCSS}>
              Telefon
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="tel"
              id="tel"
              value={neuerUser.tel}
              placeholder="Telefonnummer eingeben"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className={labelCSS}>
              E-Mail-Adresse
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={neuerUser.email}
              placeholder="E-Mail-Adresse eingeben"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="geburtsdatum" className={labelCSS}>
                  Geburtsdatum
                </label>
                <input
                  onChange={handleChange}
                  type="date"
                  name="geburtsdatum"
                  id="geburtsdatum"
                  value={neuerUser.geburtsdatum}
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            {/* Boutons radio pour choisir le sexe */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label className={labelCSS}>Geschlecht</label>
                <div className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium">
                  <input
                    onChange={handleChange}
                    type="radio"
                    id="mann"
                    name="genre"
                    checked={neuerUser.genre === 'MANN'}
                    value="MANN"
                    className="mr-2"
                  />
                  <label
                    htmlFor="mann"
                    className="text-gray-400 font-semibold mr-2">
                    Mann
                  </label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    id="frau"
                    name="genre"
                    checked={neuerUser.genre === 'FRAU'}
                    value="FRAU"
                    className="mr-2"
                  />
                  <label htmlFor="frau" className="text-gray-400 font-semibold">
                    Frau
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className={labelCSS}>Ihre Adresse</label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="strasse"
                    id="strasse"
                    value={neuerUser.strasse}
                    placeholder="Straße und Hausnummer"
                    className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="land"
                    id="land"
                    value={neuerUser.land}
                    placeholder="Ihr Land"
                    className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="plz"
                    id="plz"
                    value={neuerUser.plz}
                    placeholder="Ihre Postleitzahl"
                    className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="stadt"
                    id="stadt"
                    value={neuerUser.stadt}
                    placeholder="Ihre Stadt"
                    className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md  bg-indigo-600 hover:bg-indigo-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              {alterUser ? 'Die neue Version speichern' : 'Den User erstellen'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal_User;
