import { format } from "date-fns";

export type T_Message = {
  id: number;
  text: string;
  empfaengerID: string;
  istGelesen: boolean;
  sendungszeit: string;
};



export interface I_User {
  id: string;
  online: boolean;
  vorname: string;
  nachname: string;
  passwort: string;
  genre: string; // MANN, FRAU
  land: string;
  stadt: string;
  strasse: string;
  plz: string; // Code postal
  hausNr: number;
  email: string;
  tel: string;
  geburtsdatum: string;
  anmeldungsDatum: string;
  status: string; // ADMIN, KUNDE
  messages: T_Message[];
}


export function initialiseUser(
  id?: string,
  online?:boolean,
  vorname?: string,
  nachname?: string,
  passwort?: string,
  genre?: string,
  land?: string,
  stadt?: string,
  strasse?: string,
  plz?: string,
  hausNr?: number,
  email?: string,
  tel?: string,
  geburtsdatum?: string,
  anmeldungsDatum?: string,
  status?: string,
  messages?: T_Message[]
): I_User {
  const user: I_User = {
    id: id || '',
    online: online || false,
    vorname: vorname || '',
    nachname: nachname || '',
    passwort: passwort || '',
    genre: genre || 'MANN',
    land: land || '',
    stadt: stadt || '',
    strasse: strasse || '',
    plz: plz || '',
    hausNr: hausNr || 0,
    email: email || '',
    tel: tel || '',
    geburtsdatum: geburtsdatum || '',
    anmeldungsDatum: anmeldungsDatum || format(new Date(), 'yyyy-MM-dd'),
    status: status || 'KUNDE',
    messages: messages || [],
  };
  return user;
}
