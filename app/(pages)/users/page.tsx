'use client';

import React, { useEffect, useState } from 'react';
import { getAlter, getDate_und_Time } from '@/app/lib/Methodes/methodes';
import { RootState } from '@/app/services/Reduces/redux';
import { useDispatch, useSelector } from 'react-redux';
import { I_User } from '@/app/lib/Interfaces/I_User';
import Modal_User from '@/app/components/Modals/Modal_User';
import { useRouter } from 'next/navigation';
import { deleteBenutzer__Hilfe } from '@/app/services/Reduces/benutzer_Slice';
import { iconVonLabel } from '@/app/lib/icons/icons';

const UsersManager = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { usersList, user2 } = useSelector((state: RootState) => ({
    usersList: state.users,
    user2: state.auth,
  }));

  const currentUser = user2.user;

  const [config, setConfig] = useState<{
    openModal: boolean;
    edit: boolean;
    user?: I_User;
  }>({ openModal: false, edit: false });

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    } else {
      const aktuelUser = usersList.find((el) => el.id === currentUser.id);
      if (aktuelUser && aktuelUser.status !== 'ADMIN') {
        router.push('/');
      }
    }
  }, [currentUser, router, usersList]);

  const handleAdd = () => {
    setConfig({
      openModal: true,
      edit: false,
      user: undefined,
    });
  };

  const handleEdit = (userParam: I_User) => {
    setConfig({
      openModal: true,
      edit: true,
      user: userParam,
    });
  };

  const handleDelete = (id: string) => {
    dispatch(deleteBenutzer__Hilfe(id));
  };

  const handleCloseModal = () => {
    setConfig({
      ...config,
      openModal: false,
      user: undefined,
    });
  };

  return (
    <div className="h-full min-h-screen w-full pt-12 p-4">
      <h2 className="text-center text-3xl mt-6 mb-12 font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
        Bunutzerverwaltung!
      </h2>
      <div className="flex justify-center mb-16">
        <div className="mx-auto items-center">
          <button
            onClick={handleAdd}
            className="bg-indigo-600 hover:bg-indigo-800 text-gray-200 hover:border border-cyan-700 hover:border-cyan-700 p-4 rounded-md">
            Neuer User
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        {usersList.map((oneUser: I_User, index: number) => (
          <div
            key={index}
            className="rounded-xl bg-gray-600 p-6 my-6 mx-4 text-center shadow-xl flex flex-col justify-between">
            {/* User Information */}
            <div>
              {/* User Avatar and Details */}
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                {iconVonLabel('UserIcon')}
              </div>
              <div className="text-center mb-6">
                <h1 className="uppercase text-gray-300 mb-3 text-xl font-medium lg:px-14">
                  {oneUser.vorname + ', ' + oneUser.nachname} (ID:{' '}
                  {oneUser.id})
                </h1>
                <div
                  className={`${
                    oneUser.online ? 'bg-emerald-50' : 'bg-amber-50'
                  } py-1.5 px-3 rounded-full flex justify-center items-center gap-2 w-fit mx-auto`}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="2.5"
                      cy="3"
                      r="2.5"
                      fill={oneUser.online ? '#059669' : '#d97706'}></circle>
                  </svg>
                  <span
                    className={`${
                      oneUser.online ? 'text-emerald-600' : 'text-amber-600'
                    } font-medium text-xs`}>
                    {oneUser.online ? 'Online ✅' : 'Offline ❌'}
                  </span>
                </div>
              </div>

              {/* User Details */}
              <p className="px-4 text-gray-100">Email: {oneUser.email}</p>
              <p className="px-4 text-gray-100">Tel: {oneUser.tel}</p>
              <p className="px-4 text-gray-100">
                {getAlter(oneUser.geburtsdatum)} Jahr alt. ({oneUser.genre})
              </p>
              <p className="px-4 mb-1 mt-4 font-bold text-gray-400">
                Anmeldungsdatum:
              </p>
              <p className="px-4 text-gray-100">
                {getDate_und_Time(oneUser.anmeldungsDatum)}
              </p>
              <p className="px-4 mb-1 mt-4 font-bold text-gray-400">
                Anschrift:
              </p>
              <p className="px-4 text-gray-100">
                {oneUser.strasse + ', ' + oneUser.hausNr + '.'}
              </p>
              <p className="px-4 text-gray-100">
                {oneUser.plz + ', ' + oneUser.stadt + '.  (' + oneUser.land + ').'}
              </p>
            </div>

            {/* Edit and Delete Buttons */}
            <div>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => handleEdit(oneUser)}
                  className="p-2 rounded-full bg-gray-300 group transition-all duration-500 hover:bg-indigo-600 flex item-center">
                  {iconVonLabel('aendernIcon2')}
                </button>
                <button
                  onClick={() => handleDelete(oneUser.id)}
                  className="p-2 rounded-full bg-gray-300 group transition-all duration-500 hover:bg-red-600 flex item-center">
                  {iconVonLabel('loeschenIcon2')}
                </button>
              </div>
              <p className="mt-4 text-gray-300 text-sm">
                Pageid:{oneUser.id}
              </p>
            </div>

            {/* Modal */}
            {config.openModal && (
              <Modal_User
                isOpen={config.openModal}
                onClose={handleCloseModal}
                alterUser={config.edit ? config.user : undefined}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersManager;
