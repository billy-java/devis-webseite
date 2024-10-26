'use client';

import Modal_Seite from '@/app/components/Modals/Modal_Seite';
import { I_Seite, initialiseSeite } from '@/app/lib/Interfaces/I_Seite';

import { RootState } from '@/app/services/Reduces/redux';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSeite__Hilfe } from '@/app/services/Reduces/seiten_Slice';
import { I_User } from '@/app/lib/Interfaces/I_User';
import { useRouter } from 'next/navigation';
import { iconVonLabel } from '@/app/lib/icons/icons';
import Titel_Absatz from '@/app/components/GUI/Titel_Absatz';

const Seiten = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [seite, setSeite] = useState<I_Seite>(initialiseSeite());
  const [user, setUser] = useState<I_User | null>(null);
  const [verstecken, setVerstecken] = useState<boolean>(true);
  const [config, setConfig] = useState<{
    openModal: boolean;
    edit: boolean;
    admin: boolean;
    seite?: I_Seite;
  }>({ openModal: false, edit: false, admin: false });

  const { seitenList, usersList, user2 } = useSelector((state: RootState) => ({
    seitenList: state.seiten,
    usersList: state.users,
    user2: state.auth,
  }));

  const currentUser = user2.user;

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    } else {
      const aktuelUser = usersList.find((el) => el.id === currentUser.id);
      if (aktuelUser) {
        setUser(aktuelUser);
      }
    }
  }, [currentUser, router, usersList]);

  const webseitenList = useSelector((state: RootState) => state.webseiten);
  const meineWebseiten = config.admin
    ? webseitenList
    : webseitenList.filter((el) => el.user_id === user?.id);

  const findId_Webseite = (name: string) => {
    if (name === 'Webseite auswählen...') {
      setVerstecken(true);
    } else {
      setVerstecken(false);

      const webS = meineWebseiten.find((el) => el.title_WB === name);
      if (webS) {
        setSeite(
          initialiseSeite(
            undefined,
            webS.id,
            webS.title_WB,
            undefined,
            undefined
          )
        );
      }
    }
  };

  const handleAdd = () => {
    const newConf = {
      ...config,
      openModal: true,
      edit: false,
      seite: undefined,
    };
    setConfig(newConf);
  };

  const handleEdit = (seiteOption: I_Seite) => {
    const newConf = {
      ...config,
      openModal: true,
      edit: true,
      seite: seiteOption,
    };
    setConfig(newConf);
  };

  const contentAdd = (seiteParam: I_Seite) => {
    const newConf = {
      ...config,
      openModal: true,
      edit: true,
      seite: initialiseSeite(
        seiteParam.id,
        seiteParam.wb_id,
        seiteParam.wb_name,
        [...seiteParam.content, { titel: '', absatz: '' }],
        seiteParam.kathegorie
      ),
    };

    setConfig(newConf);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteSeite__Hilfe(id));
  };

  const handleCloseModal = () => {
    const newConf = {
      ...config,
      openModal: false,
      edit: false,
      seite: undefined,
    };
    setConfig(newConf);
  };

  return (
    <div className="h-full min-h-screen w-full mb-20 pt-12 p-4">
      <h2 className="text-center text-3xl mt-6 mb-12 font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
        {seite.wb_name === ''
          ? 'Wählen Sie bitte eine Webseite!'
          : 'Alle Seiten von: ' + seite.wb_name}
      </h2>

      <div className="max-w-xl mx-auto flex flex-col items-center mb-8">
        <label
          htmlFor="type"
          className="mb-4 block font-semibold text-gray-400 text-4xl text-center">
          Webseite:
        </label>
        <select
          required
          id="webseite"
          name="webseite"
          onChange={(e) => findId_Webseite(e.target.value)}
          className="w-full rounded-md border border-[#e0e0e0] bg-gray-600 py-3 px-6 text-base font-medium placeholder-gray-200 outline-none focus:border-[#6A64F1] focus:shadow-md">
          <option className="text-xl" value="Webseite auswählen...">
            Webseite auswählen...
          </option>

          {meineWebseiten &&
            meineWebseiten.map((el, index) => (
              <option key={index} className="text-xl" value={el.title_WB}>
                {el.title_WB}
              </option>
            ))}
        </select>
      </div>

      {!verstecken && (
        <div className="flex justify-center mb-16">
          <div className="mx-auto items-center">
            <button
              onClick={handleAdd}
              className="bg-indigo-600 hover:bg-indigo-800 text-gray-200 hover:border border-indigo-600 hover:border-indigo-600 p-4 rounded-md">
              Neue Seite
            </button>
          </div>
        </div>
      )}

      {!verstecken && (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {seitenList
            .filter((el) => el.wb_id === seite.wb_id)
            .map((oneSeite, sectionIndex) => {
              return (
                <div key={sectionIndex} className="my-3 rounded-lg">
                  <div className="rounded-lg bg-sky-950 py-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                      {iconVonLabel('SeiteIcon')}
                    </div>

                    <div className="mb-8">
                      <Titel_Absatz
                        content={oneSeite.content}
                        sectionIndex={sectionIndex}
                      />
                    </div>

                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleEdit(oneSeite)}
                        className="p-2 rounded-full bg-gray-300 group transition-all duration-500 hover:bg-indigo-600 flex item-center">
                        {iconVonLabel('aendernIcon')}
                      </button>

                      <button
                        onClick={() => handleDelete(oneSeite.id)}
                        className="p-2 rounded-full bg-gray-300 group transition-all duration-500 hover:bg-red-600 flex item-center">
                        {iconVonLabel('loeschenIcon')}
                      </button>

                      <button
                        onClick={() => contentAdd(oneSeite)}
                        className="text-4xl px-2 hover:text-white text-blue-500  rounded-full bg-gray-300 group transition-all duration-500 hover:bg-blue-600 flex item-center">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-black rounded-b-lg">
                    <p className="text-gray-300 text-md py-2 text-center">
                      {'Pageid:' + oneSeite.id + ' - '}
                      <span className="text-red-300">
                        {oneSeite.kathegorie}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {config.openModal && (
        <Modal_Seite
          isOpen={config.openModal}
          onClose={handleCloseModal}
          alteSeite={config.edit ? config.seite : undefined}
        />
      )}
    </div>
  );
};
export default Seiten;
