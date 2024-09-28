'use client';

import { I_Seite } from '@/app/lib/Interfaces/I_Seite';
import { labelCSS } from '@/app/lib/Methodes/methodes';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addSeite__Hilfe,
  updateSeite__Hilfe,
} from '@/app/services/Reduces/seiten_Slice';

interface ModalProps {
  isOpen: boolean;
  boolUpdate: boolean;
  alteSeite: null | I_Seite;
  seiteID: string;
  onClose: () => void;
}

const Modal_Seite: React.FC<ModalProps> = ({
  isOpen,
  boolUpdate,
  alteSeite,
  seiteID,
  onClose,
}) => {
  const dispatch = useDispatch();

  const [eineSeite, setSeite] = useState<I_Seite | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setSeite({
        id: '',
        wb_id: seiteID,
        title: '',
        absatz: '',
        kathegorie: 'STANDART',
      });
    }
  }, [isOpen, seiteID]);

  useEffect(() => {
    if (boolUpdate && alteSeite) {
      setSeite(alteSeite);
    } else {
      setSeite({
        id: '',
        wb_id: seiteID,
        title: '',
        absatz: '',
        kathegorie: 'STANDART',
      });
    }
  }, [boolUpdate, alteSeite, seiteID]);

  /* if (!isOpen) return null; */
  if (!isOpen) return null;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setSeite((prevData) => ({ ...prevData!, [name]: value }));
  };

  const die_Seite_Erstellen = (e: React.FormEvent) => {
    e.preventDefault();

    if (boolUpdate) {
      dispatch(updateSeite__Hilfe(eineSeite!));
    } else {
      dispatch(addSeite__Hilfe(eineSeite!));
    }

    

    onClose();
  };

  return (
    <div className="text-left fixed inset-0 bg-opacity-5 flex items-center justify-center z-50 ">
      <div className="bg-gray-700 p-8 mx-auto relative w-full max-w-3xl  max-h-[90vh] overflow-auto border-4   border-indigo-600 rounded-md ">
        <button
          className="absolute top-2 right-2 text-gray-300"
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
          {boolUpdate ? 'Diese Seite ändern' : 'Neue Seite erstellen'}!
        </h2>
        <form onSubmit={die_Seite_Erstellen} className="space-y-6">
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className={labelCSS}>
              Ein Abschnitt einsetzen
            </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              value={eineSeite!.title}
              onChange={handleChange}
              placeholder="Ein Abschnitt für die Seite einsetzen"
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="absatz" className={labelCSS}>
              Ein Absatz einsetzen
            </label>
            <textarea
              required
              id="absatz"
              name="absatz"
              value={eineSeite!.absatz}
              onChange={handleChange}
              placeholder="Untertitel der Webseite"
              rows={5} // Ajustez le nombre de lignes visibles par défaut
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="kathegorie" className={labelCSS}>
              Seitetyp
            </label>
            <select
              required
              id="kathegorie"
              name="kathegorie"
              value={eineSeite!.kathegorie}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md">
              <option className="text-xl" disabled value="">
                Einen Seitetyp auswählen...
              </option>
              <option className="text-xl" value={'STARTSEITE'}>
                Startseite
              </option>
              <option className="text-xl" value={'STANDART'}>
                Standartseite
              </option>
              <option className="text-xl" value={'KONTAKT'}>
                Kontaktseite
              </option>
              <option className="text-xl" value={'UEBER UNS'}>
                Über uns
              </option>
              <option className="text-xl" value={'IMPRESSUM'}>
                Impressumseite
              </option>
              <option className="text-xl" value={'DATENSCHUTZ'}>
                Datenschutz
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-800 py-3 px-8 rounded-md text-gray-100 ">
            {boolUpdate ? 'Die neue Version speichern' : 'Die Seite erstellen'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal_Seite;
