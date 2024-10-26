'use client';

import React from 'react';
import { Faq } from '@/app/lib/Arrays/Faq';
import Titel_Absatz from '@/app/components/GUI/Titel_Absatz';

const Help = () => {
  

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
         <Titel_Absatz faqList={Faq}/>
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
