'use client';

import React, { useState } from 'react';
import { Faq } from '@/app/lib/Arrays/Faq';

const Help = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    // Si la même question est cliquée, on la ferme, sinon on l'ouvre
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {Faq.map((el, index) => (
            <div key={index}>
              <div
                className="transition-all duration-200 rounded-md bg-gray-600 border border-gray-900 shadow-lg cursor-pointer hover:bg-gray-800"
                onClick={() => toggleQuestion(index)}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6  hover:bg-indigo-800">
                  <span className="text-lg font-semibold text-gray-300 ">
                    {el.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                      openQuestion === index ? 'rotate-0' : '-rotate-180'
                    }`}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="px-4 py-6 sm:px-6 sm:pb-6 text-gray-300">
                    <p>{el.reponse}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-base mt-9">
          Haben Sie andere Fragen?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
            {' Schreiben Sien uns.'}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Help;
