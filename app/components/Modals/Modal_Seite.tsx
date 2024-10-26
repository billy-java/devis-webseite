'use client';

import { I_Seite, initialiseSeite } from '@/app/lib/Interfaces/I_Seite';
import { labelCSS } from '@/app/lib/Methodes/methodes';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addSeite__Hilfe,
  updateSeite__Hilfe,
} from '@/app/services/Reduces/seiten_Slice';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  alteSeite?: I_Seite;
}

const Modal_Seite: React.FC<ModalProps> = ({ isOpen, onClose, alteSeite }) => {
  const dispatch = useDispatch();
  const [eineSeite, setSeite] = useState<I_Seite>(initialiseSeite());

  useEffect(() => {
    if (alteSeite) {
      setSeite(alteSeite); // Remplir le formulaire en mode édition
    } else {
      // Initialiser un formulaire vide en mode création
      setSeite(initialiseSeite());
    }
  }, [alteSeite]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === 'titel' || name === 'absatz') {
      // Mettre à jour uniquement la section spécifique du contenu
      setSeite((prevData) => ({
        ...prevData,
        content: prevData.content.map((item, idx) =>
          idx === index ? { ...item, [name]: value } : item
        ),
      }));
    } else {
      setSeite((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const die_Seite_Erstellen = (e: React.FormEvent) => {
    e.preventDefault();

    if (alteSeite) {
      dispatch(updateSeite__Hilfe(eineSeite));
    } else {
      dispatch(addSeite__Hilfe(eineSeite));
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="text-left fixed inset-0 bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-gray-700 p-8 mx-auto relative w-full max-w-3xl max-h-[90vh] overflow-auto border-4 border-indigo-600 rounded-md">
        <button
          className="absolute top-2 right-2 text-gray-300"
          onClick={onClose}>
          <svg
            className="w-9 h-9"
            fill="rgb(8 145 178)"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-gray-100 text-center text-3xl mb-4">
          {alteSeite ? 'Diese Seite ändern' : 'Neue Seite erstellen'}!
        </h2>
        <form onSubmit={die_Seite_Erstellen} className="space-y-6">
          {eineSeite.content.map((content, index) => (
            <div key={index} className="mb-12">
              <div className="flex flex-col mb-4">
                <label htmlFor="titel" className={labelCSS}>
                  Abschnitt {index + 1} einsetzen
                </label>
                <input
                  required
                  type="text"
                  id="titel"
                  name="titel"
                  value={content.titel}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Ein Abschnitt für die Seite einsetzen"
                  className="w-full rounded-md border bg-gray-600 py-3 px-6 text-base placeholder-gray-200"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="absatz" className={labelCSS}>
                  Absatz {index + 1} einsetzen
                </label>
                <textarea
                  required
                  id="absatz"
                  name="absatz"
                  value={content.absatz}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Untertitel der Webseite"
                  rows={5}
                  className="w-full rounded-md border bg-gray-600 py-3 px-6 text-base placeholder-gray-200"
                />
              </div>
            </div>
          ))}

          {!alteSeite && (
            <div className="flex flex-col mb-4">
              <label htmlFor="kathegorie" className={labelCSS}>
                Seitetyp
              </label>
              <select
                required
                id="kathegorie"
                name="kathegorie"
                value={eineSeite.kathegorie}
                onChange={handleChange}
                className="w-full rounded-md border bg-gray-600 py-3 px-6 text-base placeholder-gray-200">
                <option value="STARTSEITE">Startseite</option>
                <option value="STANDART">Standartseite</option>
                <option value="KONTAKT">Kontaktseite</option>
                <option value="UEBER UNS">Über uns</option>
                <option value="IMPRESSUM">Impressumseite</option>
                <option value="DATENSCHUTZ">Datenschutz</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-800 py-3 px-8 rounded-md text-gray-100">
            {alteSeite ? 'Die neue Version speichern' : 'Die Seite erstellen'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal_Seite;
