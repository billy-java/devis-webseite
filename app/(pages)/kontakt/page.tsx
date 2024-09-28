'use client';

import React from 'react';

const Kontakt = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Visit Our Location
          </h2>
          <p className="mt-10 text-2xl text-gray-300">
            {'Wir sind von '}
            <span className="font-semibold italic underline">
              10:00 bis 17:00
            </span>
            {'  von  '}
            <span className="font-semibold italic  underline">
              Montag bis Freitag
            </span>
            {' verfügbar.'}
          </p>
        </div>

        <div className="flex text-center my-10">
          <div className="mx-auto">
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-300">
                  Our Address
                </h3>
                <p className="mt-1 text-gray-400">
                  123 Main St, San Francisco, CA 94105
                </p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-300">Hours</h3>
                <p className="mt-1 text-gray-400">Monday - Friday: 9am - 5pm</p>
                <p className="mt-1 text-gray-400">Saturday: 10am - 4pm</p>
                <p className="mt-1 text-gray-400">Sunday: Closed</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-300">Contact</h3>
                <p className="mt-1 text-gray-400">Email: info@example.com</p>
                <p className="mt-1 text-gray-400">Phone: +1 23494 34993</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
