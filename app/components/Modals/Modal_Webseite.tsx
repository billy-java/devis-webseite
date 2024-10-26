'use client';

import { labelCSS } from '@/app/lib/Methodes/methodes';
import React, { useEffect, useState } from 'react';
import {
  addWebseite__Hilfe,
  updateWebseite__Hilfe,
} from '@/app/services/Reduces/webseiten_Slice';
import {
  I_Webseite,
  initialiseWebseite,
} from '@/app/lib/Interfaces/I_Webseite';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/services/Reduces/redux';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  alteWebseite?: I_Webseite;
}

const Modal_Webseite: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  alteWebseite,
}) => {
  const dispatch = useDispatch();
  const ws_ID = useSelector((state: RootState) => state.webseiten).length;

  const [eineWebseite, setEineWebseite] = useState<I_Webseite>(
    initialiseWebseite(ws_ID.toString(), '2')
  );

  useEffect(() => {
    if (alteWebseite) {
      setEineWebseite(alteWebseite);
    } else {
      setEineWebseite((prevData) => ({ ...prevData }));
    }
  }, [alteWebseite]);

  if (!isOpen) return null;

  const isValidColor = (strColor: string) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (isValidColor(value)) {
      setEineWebseite((prevData) => ({ ...prevData, [name]: value }));
      return;
    }

    setEineWebseite((prevData) => ({ ...prevData, [name]: value }));
  };

  const die_Webseite_Erstellen = (e: React.FormEvent) => {
    e.preventDefault();

    if (alteWebseite) {
      dispatch(updateWebseite__Hilfe(eineWebseite));
    } else {
      dispatch(addWebseite__Hilfe(eineWebseite));
    }

    onClose();
  };

  return (
    <div className="text-left fixed inset-0 bg-opacity-5 flex items-center justify-center z-50 ">
      <div className="bg-gray-700 p-8 relative w-full max-w-3xl mx-4 max-h-[90vh] overflow-auto border-4   border-indigo-600 rounded-md ">
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
          {alteWebseite ? 'Diese Webseite ändern' : 'Neue Webseite erstellen'}!
        </h2>
        <form onSubmit={die_Webseite_Erstellen} className="space-y-6">
          <div className="flex flex-col mb-4">
            <label htmlFor="title_WB" className={labelCSS}>
              Titel der Webseite
            </label>
            <input
              required
              type="text"
              id="title_WB"
              name="title_WB"
              value={eineWebseite.title_WB}
              onChange={handleChange}
              placeholder="Titel der Webseite"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="slogan" className={labelCSS}>
              Slogan
            </label>
            <input
              required
              type="text"
              id="slogan"
              name="slogan"
              value={eineWebseite.slogan}
              onChange={handleChange}
              placeholder="Untertitel der Webseite"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="farbe1"
                  className="mb-2 block text-base font-medium text-gray-400">
                  Hauptfarbe
                </label>
                <input
                  required
                  name="farbe1"
                  type="text"
                  id="farbe1"
                  defaultValue={eineWebseite.farbe1}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="farbe2"
                  className="mb-2 block text-base font-medium text-gray-400">
                  Sekundärfarbe
                </label>
                <input
                  name="farbe2"
                  type="text"
                  id="farbe2"
                  defaultValue={eineWebseite.farbe2}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center pb-8">
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Vorschau Hauptfarbe</span>
              <svg width="64" height="64" className="mt-2">
                <circle cx="32" cy="32" r="32" fill={eineWebseite.farbe1} />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Vorschau Sekundärfarbe</span>
              <svg width="64" height="64" className="mt-2">
                <circle cx="32" cy="32" r="32" fill={eineWebseite.farbe2} />
              </svg>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <label htmlFor="schrift" className={labelCSS}>
                Schriftart
              </label>
              <input
                type="text"
                id="schrift"
                name="schrift"
                value={eineWebseite.schrift}
                placeholder="Schriftart"
                className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <label htmlFor="page_Anzahl" className={labelCSS}>
                Seitenanzahl
              </label>
              <input
                required
                type="number"
                id="page_Anzahl"
                name="page_Anzahl"
                value={eineWebseite.page_Anzahl}
                placeholder="Seitenanzahl"
                className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="liefert_Datum" className={labelCSS}>
              Lieferdatum
            </label>
            <input
              required
              type="date"
              id="liefert_Datum"
              name="liefert_Datum"
              value={eineWebseite.liefert_Datum}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="anprechPartner" className={labelCSS}>
              Ansprechpartner
            </label>
            <input
              required
              type="text"
              id="anprechPartner"
              name="anprechPartner"
              value={eineWebseite.anprechPartner}
              onChange={handleChange}
              placeholder="Name des Ansprechpartners"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="tel_anPart" className={labelCSS}>
              Telefon (von Ansprechpartners)
            </label>
            <input
              required
              type="text"
              id="tel_anPart"
              name="tel_anPart"
              value={eineWebseite.tel_anPart}
              onChange={handleChange}
              placeholder="Telefonnummer des Ansprechpartners"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="domain" className={labelCSS}>
              Domainnamen schreiben
            </label>
            <input
              required
              type="text"
              id="domain"
              name="domain"
              value={eineWebseite.domain}
              onChange={handleChange}
              placeholder="Den gewünschten Domainnamen schreiben"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="tel_WB" className={labelCSS}>
              Telefon (für die Webseite)
            </label>
            <input
              required
              type="text"
              id="tel_WB"
              name="tel_WB"
              value={eineWebseite.tel_WB}
              onChange={handleChange}
              placeholder="Telefonnummer der Webseite"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="type" className={labelCSS}>
              Webseitetyp
            </label>
            <select
              required
              id="type"
              name="type"
              value={eineWebseite.type}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md">
              <option className="text-xl" disabled value="">
                Webseitetyp auswählen...
              </option>
              <option className="text-xl" value="PORTFOLIO">
                Portfolio
              </option>
              <option className="text-xl" value="E-COMMERCE">
                E-Commerce
              </option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="img_Folder" className={labelCSS}>
              Link zum Bilderordner
            </label>
            <input
              required
              type="text"
              id="img_Folder"
              name="img_Folder"
              value={eineWebseite.img_Folder}
              onChange={handleChange}
              placeholder="Ein Link für Bilderordner einfügen"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full  py-3 px-8 rounded-md text-gray-100  bg-indigo-600 hover:bg-indigo-800">
            {alteWebseite
              ? 'Die neue Version speichern'
              : 'Die Webseite erstellen'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal_Webseite;
