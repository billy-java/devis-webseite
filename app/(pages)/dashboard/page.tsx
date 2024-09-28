'use client';

import { I_User } from '@/app/lib/Interfaces/I_User';
import { RootState } from '@/app/services/Reduces/redux';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';

const Dashboard = () => {
  const router = useRouter();
  const users = useSelector((state: RootState) => state.users);

  const [user, setUser] = useState<I_User | null>(null);
  const [verstecken, setVerstecken] = useState<boolean>(true);

  const webseiten = useSelector((state: RootState) => state.webseiten).filter(
    (el) => el.user_id === user?.id
  );
  /*  const anzahl = webseiten.filter((webseite) => webseite.fertig).length; */

  const [anzahl, setAnzahl] = useState<number | null>(
    webseiten.filter((webseite) => webseite.fertig).length
  );

  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    } else {
      const aktuelUser = users.find((el) => el.id === currentUser.id);
      if (aktuelUser) {
        setUser(aktuelUser);
        setAnzahl(webseiten.filter((webseite) => webseite.fertig).length);
      }
    }
  }, [currentUser, router, users, verstecken, webseiten]);




  const [tasks, setTasks] = useState({
    standart: false,
    startseite: false,
    contact: false,
    uberuns: false,
    datenschutz: false,
    impressum: false,
  });

  useEffect(() => {}, [anzahl]);

  const findId_Webseite = (name: string) => {
    if (name === 'Webseite auswählen...') {
      setVerstecken(true);
    } else {
      setVerstecken(false);

      const webS = webseiten.find((el) => el.title_WB === name);
      if (webS) {
        setTasks({
          ...webS.configuration,
        });
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-16 bg-gray-900">
        <div className='"bg-gray-800 w-full max-w-lg min-h-[500px]'>
          <h2 className="text-gray-100 text-center text-4xl font-semibold  mb-10 ">
            Dashboard!
          </h2>
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 ">
            <div className="flex items-center ">
              {/* Avatar ou icône utilisateur */}
              <div className="bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-200">
                  {user?.vorname[0]}
                  {user?.nachname[0]}
                </span>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">
                  {user?.vorname +
                    ' ' +
                    user?.nachname +
                    ' (id:' +
                    user?.id +
                    ') - '}
                  <span
                    className={`ml-2 text-xl font-medium ${
                      user?.online ? 'text-green-500' : 'text-amber-500'
                    }`}>
                    {user?.online ? 'ONLINE' : 'Offline'}
                  </span>
                </h2>

                <p className=" text-gray-400 text-lg">Email: {user?.email}</p>
                <p className=" text-gray-400 text-lg">Tel: {user?.tel}</p>
              </div>
            </div>

            <br />
            <br />

            {user?.status === 'KUNDE' ? (
              <div className="space-y-4 mb-7 ">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-lg">
                    Nombre de site internet:
                  </span>
                  <span className="text-lg">{webseiten.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-lg">
                    Nombre de site internet terminees:
                  </span>
                  <span className="text-lg">
                    {anzahl !== null ? anzahl : 'Loading...'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 mb-7 ">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-lg">
                    Nombre de Kunden:
                  </span>
                  <span className="text-lg">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-lg">
                    Nombre de site internet:
                  </span>
                  <span className="text-lg">33</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-lg">
                    Nombre de site internet terminees:
                  </span>
                  <span className="text-lg">14</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto flex flex-col items-center mb-8">
        <label
          htmlFor="type"
          className="mb-4 block font-semibold text-gray-400 text-4xl text-center">
          Eine Webseite auswählen:
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

          {webseiten &&
            webseiten.map((el, index) => (
              <option key={index} className="text-xl" value={el.title_WB}>
                {el.title_WB}
              </option>
            ))}
        </select>
      </div>

      {!verstecken && (
        <div className="container mx-auto p-4">
          <TaskList
            setTasks={setTasks} // Passe la fonction de mise à jour
            tasks={tasks} // Passe l'état complet des tâches
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
